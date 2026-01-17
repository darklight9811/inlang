---
"@inlang/cli": minor
"@inlang/plugin-i18next": minor
"@inlang/plugin-icu1": minor
"@inlang/sdk": minor
"@inlang/rpc": minor
---

feat: Added JSONC (JSON with Comments) support across SDK and plugins. The SDK now parses JSONC files with proper error handling and informative error messages. Added jsonc-parser as direct dependency to CLI and RPC to ensure availability in production environments.
