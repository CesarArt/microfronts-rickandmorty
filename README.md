# Microfronts Rick and Morty

## Project Overview
Microfronts Rick and Morty is a modular web application demonstrating micro-frontend architecture using Vite and Vite-Plugin-Federation. The project is based on the "Rick and Morty" universe, splitting features into independent apps for scalability and maintainability.

## Purpose
- Showcase micro-frontend architecture in React using Vite.
- Enable independent development, deployment, and scaling of features.
- Demonstrate integration with Docker for containerization.
- Provide a robust setup for testing and development.

## Technologies
- **React**
- **TypeScript**
- **Vite**
- **Vite-Plugin-Federation**
- **Jest** (Testing)
- **Docker**
- **ESLint**

## Folder Structure
```
microfronts-rickandmorty/
├── mf-host/            # Main host app (shell)
├── mf-characters/      # Microfront: Characters listing & filters
├── mf-character-detail/# Microfront: Character detail view
└── docker-compose.yml  # Docker orchestration
```

## Architecture
- **Host App (`mf-host`)**: Loads remote microfrontends and manages routing.
- **Microfronts (`mf-characters`, `mf-character-detail`)**: Expose features via Vite-Plugin-Federation.
- **Federation**: Each microfront is independently built and deployed, then consumed by the host.
- **Docker**: Each app can be containerized and orchestrated via `docker-compose`.

## Setup Instructions

### 1. Install Dependencies
```bash
cd mf-host && npm install
cd ../mf-characters && npm install
cd ../mf-character-detail && npm install
```

### 2. Run Microfrontends Locally
Start each app in a separate terminal:
```bash
cd mf-host && npm run dev
cd mf-characters && npm run serve
cd mf-character-detail && npm run serve
```

### 3. Microfront Integration (Vite-Plugin-Federation)
- Each microfront configures `vite.config.ts` with `Vite-Plugin-Federation`.
- Host app consumes remote modules via federation URLs.

### 4. Docker Setup
To run all apps in containers:
```bash
docker-compose up --build
```

### 5. Run Tests
Each app has its own tests:
```bash
cd mf-host && npm test
cd ../mf-characters && npm test
cd ../mf-character-detail && npm test
```