export interface TestIBAN {
  type: string;
  iban: string;
  description?: string;
  country: string;
}

export const testIBANs: TestIBAN[] = [
  {
    type: "Success",
    iban: "AT611904300234573201",
    description: "The charge status transitions from pending to succeeded",
    country: "Austria",
  },
  {
    type: "Failure",
    iban: "AT861904300235473202",
    description: "The charge status transitions from pending to failed",
    country: "Austria",
  },
  {
    type: "Disputed",
    iban: "AT591904300235473203",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Austria",
  },
];
