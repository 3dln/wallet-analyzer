## Project Overview

### Scenario

You're building a Web3 platform that takes a list of wallet addresses and provides an analysis of transactions within a specified timeframe. You're using Moralis for backend services, given that you have a business plan with them.

### Current State

Your existing setup is a console-based application written in pure JavaScript. It uses libraries like `inquirer` for CLI prompts, `ora` for loading spinners, `xlsx` for Excel file generation, and `chalk` for console text styling. The core logic interacts with the Moralis API for fetching blockchain data.

### Target State

You want to convert this into a Next.js project with TypeScript and Tailwind CSS, managed by pnpm. The project will transition from a console-based application to an API-based web application.

---

## Roadmap

### Phase 1: Project Setup

1. **Initialize Next.js with TypeScript**: Create a new Next.js project with TypeScript support.
2. **Tailwind CSS Integration**: Add Tailwind CSS to the project.
3. **pnpm Setup**: Initialize pnpm and update the `package.json` scripts.

### Phase 2: Backend Conversion

1. **API Endpoints**: Convert the existing logic into RESTful API endpoints.
2. **Moralis Initialization**: Initialize Moralis in the Next.js API routes.
3. **Data Models**: Define TypeScript interfaces for the data models.
4. **Error Handling**: Implement robust error handling for API endpoints.

### Phase 3: Frontend Development

1. **UI Components**: Create reusable UI components using Tailwind CSS.
2. **State Management**: Decide on a state management solution (e.g., Redux, Zustand).
3. **Data Fetching**: Implement data fetching logic in the frontend to interact with the API.
4. **User Interface**: Build the main UI where users can input wallet addresses and view analysis.

### Phase 4: Testing and Deployment

1. **Unit Testing**: Write unit tests for the API endpoints and UI components.
2. **Integration Testing**: Perform end-to-end tests.
3. **Deployment**: Deploy the application to a production environment.

### Phase 5: Documentation and Cleanup

1. **Code Comments**: Add inline comments for complex logic.
2. **API Documentation**: Document the API endpoints.
3. **Final README**: Update this README with setup instructions and usage guide.

---

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Moralis
- **Package Manager**: pnpm

---

## Coding Standards

- **TypeScript**: Strict type checking
- **Code Styling**: ESLint + Prettier
- **Commit Messages**: Conventional commits

---

## Security Measures

- **Environment Variables**: Securely manage API keys and sensitive information.
- **Rate Limiting**: Implement rate limiting on API endpoints.
- **Data Validation**: Validate user input both on client and server sides.

---

## Future Enhancements

1. **Pagination**: Implement pagination for large sets of data.
2. **Caching**: Add caching mechanisms for frequent data.
3. **Real-time Updates**: Use WebSockets for real-time updates.

