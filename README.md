# Stripe Test Tools

A Chrome extension for quick access to Stripe test cards and SEPA IBANs.

## Features

- 🔍 Fuzzy search to quickly find cards/IBANs
- 🏷️ Feature badges showing card behaviors
- 📋 One-click copy for card numbers and IBANs
- 🔄 Auto-fills with random valid:
  - Expiry dates
  - CVCs (4 digits for Amex)
  - Cardholder names

## Installation

1. Clone and install:

```bash
git clone https://github.com/yourusername/stripe-test-tools.git
cd stripe-test-tools
bun install
```

2. Build and load:

```bash
bun run build
```

Then load the `dist` directory in Chrome extensions page (`chrome://extensions/`).

## Development

```bash
bun run dev
```
