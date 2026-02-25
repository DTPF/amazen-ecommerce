# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Amazén is an ecommerce React 18 SPA with a custom CMS, admin panel, and PWA support. Built with Create React App, Ant Design, and SCSS. Backend is a separate Node.js/Express + MongoDB repo.

Live site: https://amazen.dtpf.es/

## Commands

```bash
npm start      # Dev server on localhost:3000 (backend must run on port 3994)
npm run build  # Production build to ./build/
```

No test runner is configured. ESLint uses the `react-app` preset (configured in package.json).

## Architecture

### Entry Point & Providers

`src/App.jsx` wraps the app in three nested Context providers:
```
AuthProvider → ProductProvider → CartProvider → RouterProvider
```
IndexedDB is initialized on every render of App (for offline sections data).

### State Management

React Context API (no Redux). Three contexts in `src/context/`:
- **Auth** — JWT tokens (access + refresh) stored in cookies via `js-cookie`. Auto-logout on expiry. User data decoded from JWT payload.
- **Product** — Global product list loaded on mount.
- **Cart** — Cart items loaded on mount for authenticated users, synced with backend.

Each has a custom hook in `src/hooks/` (`useAuthContext`, `useProductContext`, `useCartContext`).

### API Layer (`src/api/`)

All HTTP calls go through `src/api/utils/makeRequest.js` which wraps native `fetch()`. Base path is auto-detected in `src/api/utils/config.js`:
- **Dev:** `http://{hostname}:3994/api` (detects localhost, 127.x, 192.168.1.x)
- **Prod:** `{origin}/api`
- API version: `v1`

API modules: `auth.js`, `cart.js`, `products.js`, `user.js`, `order.js`. Auth APIs are React hooks (`useGetAccessTokenApi`, `useRefreshAccessTokenApi`); others are plain async functions.

### Routing (`src/router/`)

React Router v6 with `createBrowserRouter`. All pages are lazy-loaded via `React.lazy()`. Three route groups:
- **`/`** — Public site (MainLayout): Home, Products, Help, Cart (protected), Checkout (protected)
- **`/auth`** — Auth pages (AuthLayout): Login, Register (reject if logged in)
- **`/admin`** — Admin panel (AdminLayout): Dashboard, Products CRUD, Users (coming soon)

Route guards in `RouterMiddlewares.jsx`: `ProtectedRoute` (requires auth), `AdminRoute` (requires admin role), `RejectUserLoggedRoute` (redirects if already logged in).

### Responsive Design

Breakpoint at **815px** (defined as `responsiveBreak` in `src/views/utils/componentsConstants.js`). Desktop and mobile have completely separate component trees under `src/views/components/main/desktop/` and `mobile/`. Layout components select which tree to render using the `useWindowSizeReport` hook.

### Component Organization

```
src/views/
  layouts/       — MainLayout, AdminLayout, AuthLayout (page shells)
  pages/         — Route-level page components (main/, auth/, admin/, messages/)
  components/    — Reusable UI (main/, admin/, UI/, auth/)
  utils/         — HelmetSEO wrapper, constants
```

### Styling

SCSS via `node-sass`. Global variables/mixins in `src/scss/` (`_variables.scss`, `_mixins.scss`, `_animations.scss`). Component styles are co-located `.scss` files. Key colors: dark header `#131921`, orange accent `#F08804`/`#FEBD69`, blue links `#0066C0`.

### PWA & Offline

Service worker (`src/service-worker.js`) uses Workbox for precaching and image caching (stale-while-revalidate, max 50 entries). IndexedDB (`src/indexedDB/`) caches homepage sections data offline. Database name: `amazen_idb`.

## Key Patterns

- **Token management**: Tokens stored as JSON in a single cookie. Expiry checked with 60-second buffer. Refresh token flow is automatic via `useRefreshAccessTokenApi`.
- **File uploads**: Use `FormData` via `react-dropzone` for product images and user avatars.
- **Notifications**: `react-hot-toast` for toasts, `sweetalert2` for confirmation dialogs.
- **SEO**: `react-helmet-async` via `HelmetSEO` wrapper component.
- **Naming**: Components are PascalCase `.jsx` files. Hooks prefixed with `use`. Context files follow `*Context.jsx`/`*Provider.jsx` pattern.
