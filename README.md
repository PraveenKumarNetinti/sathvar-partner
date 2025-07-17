<!-- <div align="center">
   <a href="https://mybizzerp.com"><img src="https://media.licdn.com/dms/image/v2/D563DAQGAY7OXq7JSFQ/image-scale_191_1128/B56ZWKhUx.HoAc-/0/1741785747377/mybizzerp_cover?e=2147483647&v=beta&t=-FzQO-yJmTbZGwLi1oVrnVL0gItkwLPpyqGecDfyejs" /></a><br>
</div>
<br />

<p align="center">
    <a href="https://mybizzerp.com/"><b>Website</b></a> •
    <a href="https://learn.mybizzerp.com/"><b>Documentation</b></a>
</p> -->

<div align='center'>
A modern React application built with Vite and powered by the TanStack ecosystem. Features fast builds, type-safe routing, efficient state and data management, and accessible UI components.
</div>

<br /><br />

## Table of Contents

- [🚀 Getting Started](#-getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set Up Environment Variables](#3-set-up-environment-variables)
  - [4. Start the Development Server](#4-start-the-development-server)
- [🔧 Tech Stack](#-tech-stack)
- [🛠 Tooling](#-tooling)
- [🌐 Networking](#-networking)
- [📦 Features](#-features)
- [🚀 Performance \& Optimization](#-performance--optimization)
- [🛡 Git Hooks with Husky](#-git-hooks-with-husky)
- [📜 Available Scripts](#-available-scripts)
- [📁 Folder Structure](#-folder-structure)
- [🤝 Contributing](#-contributing)

<br />

## 🚀 Getting Started

Instructions to clone, install dependencies, and run the project. Helpful for both developers and contributors.

### 1. Clone the Repository

```bash
$ git clone https://github.com/DDIndia-biz/sathvar-partner.git
$ cd sathvar-partner
```

### 2. Install Dependencies

Make sure you have PNPM installed globally:

```bash
$ npm install -g pnpm
```

Then install project dependencies:

```bash
$ pnpm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory by copying the .env.example:

```bash
$ cp .env.example .env
```

Update the .env file with appropriate values:

```
VITE_BASE_URL=http://10.1.0.4/api
VITE_AES_SECRET_KEY=your-aes-secret-key
VITE_JWT_SECRET_KEY=your-jwt-secret-key
```

- **VITE_BASE_URL**: The base URL for API requests. This usually points to the staging server or development backend.
- **VITE_AES_SECRET_KEY**: AES encryption secret key used for securely encoding sensitive data.
- **VITE_JWT_SECRET_KEY**: JWT secret key used for signing or verifying tokens. Should match the key used on the backend.

> [!WARNING]
> Make sure to keep your secret keys safe and never commit your .env file to version control.

### 4. Start the Development Server

```bash
$ pnpm dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

<br />

## 🔧 Tech Stack

- **[React](https://react.dev/)** – Library to build user interfaces
- **[Vite](https://vite.dev/)** – Fast build tool for modern web applications
- **[TanStack Router](https://tanstack.com/router/latest)** – Type-safe, file-based routing for React
- **[TanStack Query](https://tanstack.com/query/latest)** – Powerful asynchronous state and server caching
- **[TanStack Store](https://tanstack.com/store/latest)** – Lightweight and reactive state management
- **[React Hook Form](https://www.react-hook-form.com/)** – Performant and flexible form management
- **[Radix Primitives](https://www.radix-ui.com/primitives)** – Unstyled, accessible UI primitives
- **[TailwindCSS](https://tailwindcss.com/)** – Utility-first CSS framework used to style

<br />

## 🛠 Tooling

- **[PNPM](https://pnpm.io/)** – Fast and disk-efficient package manager
- **[Zod](https://zod.dev/)** – Type-safe schema validation
- **[ESLint](https://eslint.org/)** & **[Prettier](https://prettier.io/)** – Code quality and formatting

<br />

## 🌐 Networking

- **[Axios](https://axios-http.com/)** is used as the primary HTTP client to manage API requests.
- Configured with a dynamic `baseURL` that switches between development and production environments using `VITE_BASE_URL`.
- **Request Interceptors** automatically attach JWT authentication tokens from secure storage.
- **Response Interceptors** handle success and error messages consistently across the app with toast notifications.
- Handles session expiration by clearing relevant authentication data from storage and rejecting the request.

<br />

## 📦 Features

- **📶 Network Strength Indicator**  
  Displays toast notifications when the app detects slow, offline, or recovered network conditions, enhancing user awareness and experience.

- **🧠 Dynamic Breadcrumbs**  
  Automatically generated from the router state to reflect the current navigation path for improved UX and discoverability.

- **🔖 Meta Tag Management**  
  Page titles and metadata are updated dynamically via route context, improving SEO and accessibility.

- **⚡ Offline-First Queries**  
  Powered by **TanStack Query**, all data operations are configured with `networkMode: "offlineFirst"`, preventing network calls during offline scenarios to enhance reliability and offline support.

- **🔐 Auth via Router Context**  
  Uses **TanStack Router’s Context** for clean and scalable authentication:
  - Acts as a dependency injection layer through the route hierarchy.
  - Simplifies managing authenticated user state and access control within routes.

<br />

## 🚀 Performance & Optimization

The project is configured with various plugins and build strategies to ensure optimal performance and bundle efficiency:

- **Code Splitting with TanStack Router**  
  Uses `TanStackRouterVite` with `autoCodeSplitting: true` to split route-based code automatically for faster initial loads.

- **Rollup Manual Chunking**  
  Splits large dependencies (like React, Framer Motion, Axios) and internal components into separate chunks to improve caching and reduce initial bundle size.

- **[vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin)**  
  Compresses image assets during build time to reduce payload size and improve load performance.

- **[vite-plugin-pwa](https://vite-pwa-org.netlify.app/)**  
  Enables Progressive Web App support with offline capability, caching, and installability.

- **[vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)**  
  Optimizes SVG usage by allowing SVGs to be imported as React components with support for props, refs, and memoization.

- **[rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)**  
  Generates a bundle analysis report to visualize module sizes and identify optimization opportunities.

These tools and configurations ensure the app is fast, scalable, and production-ready.

<br />

## 🛡 Git Hooks with Husky

This project uses **[Husky](https://typicode.github.io/husky/)** to enforce consistent code quality and streamline development workflows via Git hooks:

- **`commit-msg`** – Ensures commit messages follow a conventional format using `commitlint`.
- **`pre-commit`** – Runs `lint-staged` to lint and fix staged files before committing.
- **`post-merge`** – Automatically runs `pnpm install` to ensure dependencies are up to date after pulling changes.

These hooks help prevent broken code from being committed and maintain a clean Git history.

<br />

## 📜 Available Scripts

These scripts help with development, building, linting, and formatting:

| Script             | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| `pnpm dev`         | Starts the development server using Vite                   |
| `pnpm build`       | Builds the TypeScript project and bundles with Vite        |
| `pnpm preview`     | Serves the production build locally for preview            |
| `pnpm lint`        | Lints all files using ESLint                               |
| `pnpm lint:fix`    | Automatically fixes linting issues where possible          |
| `pnpm lint:debug`  | Runs ESLint in debug mode                                  |
| `pnpm lint:strict` | Strictly lints JavaScript and TypeScript files recursively |
| `pnpm prettier`    | Formats code using Prettier across multiple file types     |
| `pnpm prepare`     | Runs Husky install (usually triggered automatically)       |

<br />

## 📁 Folder Structure

The project follows a modular and scalable folder structure under the `src/` directory:

```
.
└── src
    ├── assets/ # Static assets (images, icons, logos, fonts, etc.)
    ├── components/ # Reusable UI and shared components
    │   ├── ui/ # Accessible, styled UI primitives (Radix + Tailwind) 
    │   └── ... # Feature-specific or generic components
    ├── context/ # Global context providers (auth, theme, etc.)
    ├── features/ # Modular feature-based slices (e.g., Sales, Dashboard)
    ├── hooks/ # Reusable custom React hooks
    ├── routes/ # File-based routing using TanStack Router
    ├── schema/ # Zod schemas for validation and form handling
    ├── services/ # API service layer powered by Axios
    ├── styles/ # Global styles and Tailwind configuration
    ├── utils/ # Helper functions and utilities
    └── main.tsx # Application entry point
```

<br />

## 🤝 Contributing

See [CONTRIBUTING.md](https://github.com/DDIndia-biz/sathvar-partner/blob/main/CONTRIBUTING.md) for ways to get started.
