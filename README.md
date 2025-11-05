# SspGameWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Overview

SspGameWeb is a web-based implementation of the classic "Stone, Scissors, Paper" game. The application allows players to compete against either a random opponent or an AI-driven opponent. It is built using Angular and leverages Angular Material for the UI.

## Features

- **Game Modes**:
  - Play against a random opponent.
  - Play against an AI-driven opponent.
- **Interactive UI**:
  - Material Design components for a modern and responsive interface.
- **Game Results**:
  - Displays the player's move, the opponent's move, and the result of the game (win, lose, or draw).
- **Reset Functionality**:
  - Allows players to reset the game state and start over.
- **Loading Indicators**:
  - Shows a spinner while waiting for the opponent's move.
- **Responsive Design**:
  - Optimized for both desktop and mobile devices.

## Getting Started

Before starting the project, make sure to install the dependencies:

```bash
yarn install
```
## Backend Dependency

This application relies on a backend service (`ssp-game-api`) to handle game logic and provide responses for the player's moves. The backend must be running for the frontend to function correctly.

### Setting up the Backend

1. Clone the backend repository:
   ```bash
   git clone <backend-repo-url>
   cd ssp-game-api
   ```

2. Build and run the backend:
   - Using Maven:
     ```bash
     mvn clean package -DskipTests
     mvn spring-boot:run -Dspring-boot.run.profiles=dev
     ```
   - Using Docker Compose:
     ```bash
     docker compose up --build
     ```

3. Ensure the backend is running on `http://localhost:8080` (default). If the backend is running on a different port or domain, update the `proxy.conf.json` file in this project to match the backend's URL.

### Proxy Configuration

The frontend uses a proxy configuration (`proxy.conf.json`) to forward API requests to the backend. This avoids cross-origin issues during development.

Example `proxy.conf.json`:
```json
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug"
  }
}
```

To use the proxy, start the development server with:
```bash
yarn start
```

## Development server

To start a local development server, run:

```bash
yarn start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

To generate a new component, run:

```bash
yarn generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
yarn generate --help
```

## Building

To build the project, run:

```bash
yarn build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
yarn test
```

## Application Structure

The application is organized as follows:

```
src/
├── app/
│   ├── components/
│   │   ├── stone-scissors-paper/
│   │   │   ├── stone-scissors-paper.component.ts
│   │   │   ├── stone-scissors-paper.html
│   │   │   ├── stone-scissors-paper.scss
│   │   │   ├── move-options/
│   │   │   ├── oponent-type/
│   │   │   ├── result/
│   ├── services/
│   │   ├── ssp-game-service.ts
│   ├── app.module.ts
├── assets/
├── environments/
```

### Key Components

- **`StoneScissorsPaper`**:
  - The main game component that handles the game logic and UI.
- **`MoveOptions`**:
  - A subcomponent for selecting the player's move.
- **`OponentType`**:
  - A subcomponent for selecting the type of opponent (random or AI).
- **`Result`**:
  - A subcomponent for displaying the game result.

### Services

- **`SspGameService`**:
  - Handles the game logic and communicates with the backend to determine the opponent's move and the game result.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.