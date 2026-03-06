# Development

## ESLint v10

A few dependencies we rely on still only support the legacy `eslintrc`/`extends` config structure, and ESLint v10 removes that entirely, so we are waiting for those packages to add flat config support before migrating.

Once we migrate, we should also migrate this package to ESM.
