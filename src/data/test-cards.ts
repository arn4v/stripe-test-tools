export type CardFeature =
  | "success"
  | "success_async"
  | "fail"
  | "fail_async"
  | "insufficient_funds"
  | "3ds"
  | "3ds_required"
  | "3ds_optional"
  | "declined"
  | "declined_insufficient_funds"
  | "declined_expired_card"
  | "declined_incorrect_cvc"
  | "declined_processing_error"
  | "declined_incorrect_number"
  | "dispute"
  | "refund_failed";

export interface TestCard {
  type: string;
  number: string;
  expiry?: string;
  cvc?: string;
  description?: string;
  features: CardFeature[];
  brand?: string;
}

export const testCards: TestCard[] = [
  {
    type: "Success",
    number: "4242424242424242",
    description: "Succeeds and immediately processes the payment",
    features: ["success"],
    brand: "Visa",
  },
  {
    type: "3DS Required",
    number: "4000000000003220",
    description: "3D Secure 2 authentication must be completed",
    features: ["success_async", "3ds", "3ds_required"],
    brand: "Visa",
  },
  {
    type: "3DS Optional",
    number: "4000000000003063",
    description: "3D Secure 2 authentication can be triggered conditionally",
    features: ["success", "3ds", "3ds_optional"],
    brand: "Visa",
  },
  {
    type: "Insufficient Funds",
    number: "4000000000009995",
    description: "Card has insufficient funds",
    features: ["fail", "declined", "declined_insufficient_funds"],
    brand: "Visa",
  },
  {
    type: "Expired Card",
    number: "4000000000000069",
    description: "Card has expired",
    features: ["fail", "declined", "declined_expired_card"],
    brand: "Visa",
  },
  {
    type: "Incorrect CVC",
    number: "4000000000000127",
    description: "Card's CVC is incorrect",
    features: ["fail", "declined", "declined_incorrect_cvc"],
    brand: "Visa",
  },
  {
    type: "Processing Error",
    number: "4000000000000119",
    description: "Payment cannot be processed",
    features: ["fail", "declined", "declined_processing_error"],
    brand: "Visa",
  },
  {
    type: "Incorrect Number",
    number: "4242424242424241",
    description: "Card number is incorrect",
    features: ["fail", "declined", "declined_incorrect_number"],
    brand: "Visa",
  },
  {
    type: "Fraudulent",
    number: "4000000000009235",
    description: "Charge succeeds but is disputed as fraudulent",
    features: ["success", "dispute"],
    brand: "Visa",
  },
  {
    type: "Refund Failed",
    number: "4000000000000259",
    description: "Refunds on the card will be declined",
    features: ["success", "refund_failed"],
    brand: "Visa",
  },
  {
    type: "Visa Debit",
    number: "4000056655665556",
    description: "Charge succeeds and is processed as a debit card",
    features: ["success"],
    brand: "Visa (debit)",
  },
  {
    type: "Mastercard",
    number: "5555555555554444",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Mastercard",
  },
  {
    type: "Mastercard (2-series)",
    number: "2223003122003222",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Mastercard",
  },
  {
    type: "Mastercard (debit)",
    number: "5200828282828210",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Mastercard (debit)",
  },
  {
    type: "Mastercard (prepaid)",
    number: "5105105105105100",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Mastercard (prepaid)",
  },
  {
    type: "American Express",
    number: "378282246310005",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "American Express",
    cvc: "Any 4 digits",
  },
  {
    type: "American Express",
    number: "371449635398431",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "American Express",
    cvc: "Any 4 digits",
  },
  {
    type: "Discover",
    number: "6011111111111117",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Discover",
  },
  {
    type: "Discover",
    number: "6011000990139424",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Discover",
  },
  {
    type: "Discover (debit)",
    number: "6011981111111113",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Discover (debit)",
  },
  {
    type: "Diners Club",
    number: "3056930009020004",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Diners Club",
  },
  {
    type: "Diners Club (14-digit)",
    number: "36227206271667",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "Diners Club",
  },
  {
    type: "JCB",
    number: "3566002020360505",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "JCB",
  },
  {
    type: "UnionPay",
    number: "6200000000000005",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "UnionPay",
  },
  {
    type: "UnionPay (debit)",
    number: "6200000000000047",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "UnionPay (debit)",
  },
  {
    type: "UnionPay (19-digit)",
    number: "6205500000000000004",
    description: "Charge succeeds and processes the payment normally",
    features: ["success"],
    brand: "UnionPay",
  },
];
