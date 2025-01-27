/// <reference types="chrome"/>
import type { TestCard } from "./data/test-cards";
import type { TestIBAN } from "./data/test-ibans";

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(
  (
    message: { type: string; card?: TestCard; iban?: TestIBAN },
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ) => {
    if (message.type === "FILL_CARD_DETAILS" && message.card) {
      const card = message.card;

      // Common selectors for card fields, including Stripe Elements
      const selectors = {
        number: [
          'input[name*="number"], input[data-elements-stable-field-name="cardNumber"]',
          'input[name="cardNumber"]',
          '[data-qa="cardNumber-input"]',
          "#cardNumber",
          ".CardNumberField-input",
        ],
        expiry: [
          'input[name*="expiry"], input[data-elements-stable-field-name="cardExpiry"]',
          'input[name="cardExpiry"]',
          '[data-qa="cardExpiry-input"]',
          "#cardExpiry",
          ".CardExpiryField-input",
        ],
        cvc: [
          'input[name*="cvc"], input[name*="cvv"], input[data-elements-stable-field-name="cardCvc"]',
          'input[name="cardCvc"]',
          '[data-qa="cardCvc-input"]',
          "#cardCvc",
          ".CardCVCField-input",
        ],
      };

      // Helper function to find and fill input
      const fillField = (selectors: string[], value: string) => {
        for (const selector of selectors) {
          const field = document.querySelector<HTMLInputElement>(selector);
          if (field) {
            // Focus the field first
            field.focus();
            // Set the value
            field.value = value;
            // Trigger events that Stripe Elements listens to
            field.dispatchEvent(new Event("input", { bubbles: true }));
            field.dispatchEvent(new Event("change", { bubbles: true }));
            field.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
            return true;
          }
        }
        return false;
      };

      // Fill fields in sequence with small delays to mimic human interaction
      setTimeout(() => {
        if (fillField(selectors.number, card.number)) {
          setTimeout(() => {
            if (fillField(selectors.expiry, card.expiry)) {
              setTimeout(() => {
                fillField(selectors.cvc, card.cvc);
              }, 100);
            }
          }, 100);
        }
      }, 100);

      sendResponse({ success: true });
    }

    if (message.type === "FILL_IBAN_DETAILS" && message.iban) {
      const iban = message.iban;

      // Common selectors for IBAN fields
      const selectors = [
        'input[name*="iban"], input[data-elements-stable-field-name="iban"]',
        'input[name="iban"]',
        '[data-qa="iban-input"]',
        "#iban",
        ".IbanField-input",
      ];

      const fillField = (selectors: string[], value: string) => {
        for (const selector of selectors) {
          const field = document.querySelector<HTMLInputElement>(selector);
          if (field) {
            field.focus();
            field.value = value;
            field.dispatchEvent(new Event("input", { bubbles: true }));
            field.dispatchEvent(new Event("change", { bubbles: true }));
            field.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
            return true;
          }
        }
        return false;
      };

      setTimeout(() => {
        fillField(selectors, iban.iban);
      }, 100);

      sendResponse({ success: true });
    }
  }
);
