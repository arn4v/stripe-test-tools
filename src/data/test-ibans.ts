export interface TestIBAN {
  type: string;
  iban: string;
  description: string;
  country: string;
}

export const testIBANs: TestIBAN[] = [
  // Austria
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
  // Belgium
  {
    type: "Success",
    iban: "BE62510007547061",
    description: "The charge status transitions from pending to succeeded",
    country: "Belgium",
  },
  {
    type: "Failure",
    iban: "BE68539007547034",
    description: "The charge status transitions from pending to failed",
    country: "Belgium",
  },
  {
    type: "Disputed",
    iban: "BE08510007547063",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Belgium",
  },
  // Denmark
  {
    type: "Success",
    iban: "DK5000400440116243",
    description: "The charge status transitions from pending to succeeded",
    country: "Denmark",
  },
  {
    type: "Failure",
    iban: "DK8003450003179681",
    description: "The charge status transitions from pending to failed",
    country: "Denmark",
  },
  {
    type: "Disputed",
    iban: "DK9300400440116245",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Denmark",
  },
  // Estonia
  {
    type: "Success",
    iban: "EE382200221020145685",
    description: "The charge status transitions from pending to succeeded",
    country: "Estonia",
  },
  {
    type: "Failure",
    iban: "EE762200221020145680",
    description: "The charge status transitions from pending to failed",
    country: "Estonia",
  },
  {
    type: "Disputed",
    iban: "EE492200221020145681",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Estonia",
  },
  // Finland
  {
    type: "Success",
    iban: "FI2112345600000785",
    description: "The charge status transitions from pending to succeeded",
    country: "Finland",
  },
  {
    type: "Failure",
    iban: "FI9112345600000786",
    description: "The charge status transitions from pending to failed",
    country: "Finland",
  },
  {
    type: "Disputed",
    iban: "FI6412345600000787",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Finland",
  },
  // France
  {
    type: "Success",
    iban: "FR1420041010050500013M02606",
    description: "The charge status transitions from pending to succeeded",
    country: "France",
  },
  {
    type: "Failure",
    iban: "FR8420041010050500013M02607",
    description: "The charge status transitions from pending to failed",
    country: "France",
  },
  {
    type: "Disputed",
    iban: "FR5720041010050500013M02608",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "France",
  },
  // Germany
  {
    type: "Success",
    iban: "DE89370400440532013000",
    description: "The charge status transitions from pending to succeeded",
    country: "Germany",
  },
  {
    type: "Failure",
    iban: "DE62370400440532013001",
    description: "The charge status transitions from pending to failed",
    country: "Germany",
  },
  {
    type: "Disputed",
    iban: "DE35370400440532013002",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Germany",
  },
  // Ireland
  {
    type: "Success",
    iban: "IE29AIBK93115212345678",
    description: "The charge status transitions from pending to succeeded",
    country: "Ireland",
  },
  {
    type: "Failure",
    iban: "IE02AIBK93115212345679",
    description: "The charge status transitions from pending to failed",
    country: "Ireland",
  },
  {
    type: "Disputed",
    iban: "IE51AIBK93115212345670",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Ireland",
  },
  // Italy
  {
    type: "Success",
    iban: "IT40S0542811101000000123456",
    description: "The charge status transitions from pending to succeeded",
    country: "Italy",
  },
  {
    type: "Failure",
    iban: "IT60X0542811101000000123456",
    description: "The charge status transitions from pending to failed",
    country: "Italy",
  },
  {
    type: "Disputed",
    iban: "IT83S0542811101000000123458",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Italy",
  },
  // Lithuania
  {
    type: "Success",
    iban: "LT121000011101001000",
    description: "The charge status transitions from pending to succeeded",
    country: "Lithuania",
  },
  {
    type: "Failure",
    iban: "LT821000011101001001",
    description: "The charge status transitions from pending to failed",
    country: "Lithuania",
  },
  {
    type: "Disputed",
    iban: "LT551000011101001002",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Lithuania",
  },
  // Luxembourg
  {
    type: "Success",
    iban: "LU280019400644750000",
    description: "The charge status transitions from pending to succeeded",
    country: "Luxembourg",
  },
  {
    type: "Failure",
    iban: "LU980019400644750001",
    description: "The charge status transitions from pending to failed",
    country: "Luxembourg",
  },
  {
    type: "Disputed",
    iban: "LU710019400644750002",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Luxembourg",
  },
  // Netherlands
  {
    type: "Success",
    iban: "NL39RABO0300065264",
    description: "The charge status transitions from pending to succeeded",
    country: "Netherlands",
  },
  {
    type: "Failure",
    iban: "NL91ABNA0417164300",
    description: "The charge status transitions from pending to failed",
    country: "Netherlands",
  },
  {
    type: "Disputed",
    iban: "NL82RABO0300065266",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Netherlands",
  },
  // Norway
  {
    type: "Success",
    iban: "NO9386011117947",
    description: "The charge status transitions from pending to succeeded",
    country: "Norway",
  },
  {
    type: "Failure",
    iban: "NO6686011117948",
    description: "The charge status transitions from pending to failed",
    country: "Norway",
  },
  {
    type: "Disputed",
    iban: "NO3986011117949",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Norway",
  },
  // Portugal
  {
    type: "Success",
    iban: "PT50000201231234567890154",
    description: "The charge status transitions from pending to succeeded",
    country: "Portugal",
  },
  {
    type: "Failure",
    iban: "PT23000201231234567890155",
    description: "The charge status transitions from pending to failed",
    country: "Portugal",
  },
  {
    type: "Disputed",
    iban: "PT93000201231234567890156",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Portugal",
  },
  // Spain
  {
    type: "Success",
    iban: "ES0700120345030000067890",
    description: "The charge status transitions from pending to succeeded",
    country: "Spain",
  },
  {
    type: "Failure",
    iban: "ES9121000418450200051332",
    description: "The charge status transitions from pending to failed",
    country: "Spain",
  },
  {
    type: "Disputed",
    iban: "ES5000120345030000067892",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Spain",
  },
  // Sweden
  {
    type: "Success",
    iban: "SE3550000000054910000003",
    description: "The charge status transitions from pending to succeeded",
    country: "Sweden",
  },
  {
    type: "Failure",
    iban: "SE0850000000054910000004",
    description: "The charge status transitions from pending to failed",
    country: "Sweden",
  },
  {
    type: "Disputed",
    iban: "SE7850000000054910000005",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Sweden",
  },
  // Switzerland
  {
    type: "Success",
    iban: "CH9300762011623852957",
    description: "The charge status transitions from pending to succeeded",
    country: "Switzerland",
  },
  {
    type: "Failure",
    iban: "CH5362200119938136497",
    description: "The charge status transitions from pending to failed",
    country: "Switzerland",
  },
  {
    type: "Disputed",
    iban: "CH1260378413965193069",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "Switzerland",
  },
  // United Kingdom
  {
    type: "Success",
    iban: "GB82WEST12345698765432",
    description: "The charge status transitions from pending to succeeded",
    country: "United Kingdom",
  },
  {
    type: "Failure",
    iban: "GB55WEST12345698765433",
    description: "The charge status transitions from pending to failed",
    country: "United Kingdom",
  },
  {
    type: "Disputed",
    iban: "GB28WEST12345698765434",
    description:
      "The charge status transitions from pending to succeeded, but a dispute is immediately created",
    country: "United Kingdom",
  },
];
