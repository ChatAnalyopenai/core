## Codex Explorer

Interactive explorer for Vue's code frame generation utility.

The code frame generator is used internally by Vue to create formatted error messages that highlight specific locations in source code.

### Features

- Input source code and specify start/end positions
- See how Vue generates formatted code frames with line numbers
- Real-time updates as you type or change positions
- Demonstrates the `generateCodeFrame` utility from `@vue/shared`

### Usage

To run locally:

```bash
cd packages-private/codex-explorer
pnpm dev
```

Or from the repository root:

```bash
pnpm dev-codex
```

### What is a Code Frame?

A code frame is a formatted snippet of source code with:

- Line numbers
- Highlighted range using caret (^) symbols
- Context lines above and below the highlighted range

This is commonly used in compiler error messages to show exactly where an error occurred in the source code.
