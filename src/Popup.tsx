import { useState, useMemo } from "react";
import { testCards } from "./data/test-cards";
import { testIBANs } from "./data/test-ibans";
import type { TestCard, CardFeature } from "./data/test-cards";
import type { TestIBAN } from "./data/test-ibans";
import { Copy, CreditCard, Building2, Search } from "lucide-react";
import Fuse from "fuse.js";

function Badge({ feature }: { feature: CardFeature }) {
  const styles: Record<
    CardFeature,
    { bg: string; text: string; label: string }
  > = {
    success: {
      bg: "bg-green-100",
      text: "text-green-800",
      label: "Success",
    },
    success_async: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      label: "Success (Async)",
    },
    fail: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Fail",
    },
    fail_async: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      label: "Fail (Async)",
    },
    insufficient_funds: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      label: "Insufficient Funds",
    },
    "3ds": {
      bg: "bg-purple-100",
      text: "text-purple-800",
      label: "3D Secure",
    },
    "3ds_required": {
      bg: "bg-purple-100",
      text: "text-purple-800",
      label: "3DS Required",
    },
    "3ds_optional": {
      bg: "bg-purple-100",
      text: "text-purple-800",
      label: "3DS Optional",
    },
    declined: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Declined",
    },
    declined_insufficient_funds: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      label: "Insufficient Funds",
    },
    declined_expired_card: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Expired Card",
    },
    declined_incorrect_cvc: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Incorrect CVC",
    },
    declined_processing_error: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Processing Error",
    },
    declined_incorrect_number: {
      bg: "bg-red-100",
      text: "text-red-800",
      label: "Incorrect Number",
    },
    dispute: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      label: "Dispute",
    },
    refund_failed: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      label: "Refund Failed",
    },
  };

  const style = styles[feature];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${style.bg} ${style.text}`}
    >
      {style.label}
    </span>
  );
}

function CopyIcon({ text }: { text: string }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
      }}
      aria-label="Copy to clipboard"
      className="ml-2 p-1 text-gray-400 hover:text-blue-600 rounded-full hover:bg-gray-100"
    >
      <Copy className="w-4 h-4" />
    </button>
  );
}

function CardItem({ card }: { card: TestCard }) {
  const fillForm = async () => {
    // Generate random future expiry date
    const now = new Date();
    const futureYear = now.getFullYear() + Math.floor(Math.random() * 5) + 1; // 1-5 years in future
    const futureMonth = String(Math.floor(Math.random() * 12) + 1).padStart(
      2,
      "0"
    );
    const expiry = `${futureMonth}/${String(futureYear).slice(-2)}`;

    // Generate random CVC based on card brand
    const cvc = card.brand?.toLowerCase().includes("american express")
      ? String(Math.floor(Math.random() * 9000) + 1000) // 4 digits for Amex
      : String(Math.floor(Math.random() * 900) + 100); // 3 digits for others

    // Generate random name
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Emily",
      "David",
      "Sarah",
      "James",
      "Emma",
      "William",
      "Olivia",
    ];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Martinez",
    ];
    const name = `${
      firstNames[Math.floor(Math.random() * firstNames.length)]
    } ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;

    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tab.id) {
      chrome.tabs.sendMessage(tab.id, {
        type: "FILL_CARD_DETAILS",
        card: {
          ...card,
          expiry,
          cvc,
          name,
        },
      });
    }
  };

  return (
    <div
      className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
      onClick={fillForm}
    >
      <div className="flex items-center gap-2">
        <CreditCard className="w-4 h-4 text-gray-500" />
        <h3 className="font-medium text-gray-900">{card.type}</h3>
      </div>
      <div className="flex flex-wrap gap-1 mt-2">
        {card.features.map((feature) => (
          <Badge key={feature} feature={feature} />
        ))}
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <div className="flex items-center">
          Number: {card.number}
          <CopyIcon text={card.number} />
        </div>
        {card.cvc && (
          <div className="mt-1 text-sm text-gray-500">Note: Use {card.cvc}</div>
        )}
      </div>
      {card.description && (
        <p className="mt-2 text-sm text-gray-500">{card.description}</p>
      )}
    </div>
  );
}

function IBANItem({ iban }: { iban: TestIBAN }) {
  const fillForm = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    if (tab.id) {
      chrome.tabs.sendMessage(tab.id, {
        type: "FILL_IBAN_DETAILS",
        iban,
      });
    }
  };

  return (
    <div
      className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
      onClick={fillForm}
    >
      <div className="flex items-center gap-2">
        <Building2 className="w-4 h-4 text-gray-500" />
        <h3 className="font-medium text-gray-900">{iban.type}</h3>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <div className="flex items-center">
          IBAN: {iban.iban}
          <CopyIcon text={iban.iban} />
        </div>
      </div>
      {iban.description && (
        <p className="mt-2 text-sm text-gray-500">{iban.description}</p>
      )}
    </div>
  );
}

export default function Popup() {
  const [activeTab, setActiveTab] = useState<"cards" | "iban">("cards");
  const [searchTerm, setSearchTerm] = useState("");

  // Initialize Fuse instances
  const cardsFuse = useMemo(
    () =>
      new Fuse(testCards, {
        keys: ["type", "description", "features"],
        threshold: 0.3,
        includeMatches: true,
      }),
    []
  );

  const ibanFuse = useMemo(
    () =>
      new Fuse(testIBANs, {
        keys: ["type", "description"],
        threshold: 0.3,
      }),
    []
  );

  // Filter items based on search term
  const filteredCards = useMemo(() => {
    if (!searchTerm) return testCards;
    return cardsFuse.search(searchTerm).map((result) => result.item);
  }, [searchTerm, cardsFuse]);

  const filteredIBANs = useMemo(() => {
    if (!searchTerm) return testIBANs;
    return ibanFuse.search(searchTerm).map((result) => result.item);
  }, [searchTerm, ibanFuse]);

  return (
    <div className="w-96 p-4">
      <h1 className="text-xl font-bold text-gray-900 mb-4">
        Stripe Test Tools
      </h1>

      <div className="flex mb-4 border-b">
        <button
          className={`px-4 py-2 flex items-center gap-2 ${
            activeTab === "cards"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("cards")}
        >
          <CreditCard className="w-4 h-4" />
          Cards
        </button>
        <button
          className={`px-4 py-2 flex items-center gap-2 ${
            activeTab === "iban"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("iban")}
        >
          <Building2 className="w-4 h-4" />
          SEPA IBAN
        </button>
      </div>

      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={`Search ${activeTab === "cards" ? "cards" : "IBANs"}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 p-2 border rounded-lg"
        />
      </div>

      <div className="space-y-2">
        {activeTab === "cards"
          ? filteredCards.map((card, index) => (
              <CardItem key={index} card={card} />
            ))
          : filteredIBANs.map((iban, index) => (
              <IBANItem key={index} iban={iban} />
            ))}
      </div>
    </div>
  );
}
