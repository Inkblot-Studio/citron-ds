# Publishing to npm

## Prerequisites

1. **npm account** — [Sign up](https://www.npmjs.com/signup) if you don't have one.
2. **Organization** — The package is `@citron-systems/citron-ds`. You need an npm org named `citron-systems`.

## What You Need from npm

| Item | Where to get it |
|------|-----------------|
| **Username** | Your npm account username |
| **Password** | Your npm account password (or use a token) |
| **Email** | Your npm account email (must be verified) |
| **2FA** | Recommended — enable in Account Settings → Two-Factor Auth |

### Using an Access Token (recommended)

1. Go to [npmjs.com](https://www.npmjs.com/) → your profile → **Access Tokens**
2. Generate New Token → **Automation** or **Publish**
3. Copy the token and use it when prompted for password: `npm login` will accept the token as the password.

---

## Publishing Steps

### 1. Create the npm organization (if using `@citron-systems`)

```bash
npm org create citron-systems
```

Or create it via [npmjs.com/org/create](https://www.npmjs.com/org/create).

### 2. Log in to npm

```bash
npm login
```

Enter your username, password (or token), and email when prompted.

### 3. Verify the package

```bash
npm run build
npm pack
```

This creates `citron-systems-citron-ds-1.0.0.tgz`. Inspect its contents:

```bash
tar -tzf citron-systems-citron-ds-1.0.0.tgz
```

You should see `package/`, `package/dist/`, `package/tokens/`, `package/README.md`.

### 4. Publish

**Scoped packages** (`@org/name`) are private by default. To publish publicly:

```bash
npm publish --access public
```

For unscoped packages, `npm publish` is enough.

### 5. Verify on npm

Visit: `https://www.npmjs.com/package/@citron-systems/citron-ds`

---

## Updating Versions

```bash
# Patch (1.0.0 → 1.0.1)
npm version patch

# Minor (1.0.0 → 1.1.0)
npm version minor

# Major (1.0.0 → 2.0.0)
npm version major

npm publish --access public
```

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `402 Payment Required` | Scoped package; add `--access public` |
| `403 Forbidden` | Not logged in or no permission to publish to that scope |
| `404 Not Found` | Org doesn't exist; create it first |
| `You must verify your email` | Verify email in npm account settings |
