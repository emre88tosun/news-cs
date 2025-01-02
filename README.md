# News App

## Overview
This is a **News Website** built with **Next.js 15** and **React 19**, designed for optimal SEO performance and user experience. The application features a paginated news list fetched from a public API and detailed views for individual articles. It is fully responsive and adheres to modern web development best practices.

---

## Features

### 1. News List Page
- Displays the latest news articles (10 per page).
- Server-Side Rendering (SSR) for SEO optimization.
- Pagination with "Next" and "Previous" controls.

### 2. News Detail Page
- Dynamic route for individual news articles.
- Displays the article's title, description, and associated image.
- SEO-optimized and pre-rendered for improved performance.

### 3. Responsive Design
- Fully mobile-friendly with a clean and user-friendly layout.

### 4. Error Handling
- Informative error messages for API failures or other issues.

### 5. Bonus Features
- Unit tests to ensure component reliability and functionality.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [News API](https://newsdata.io/)
- **Testing**: [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/) and [Playwright](https://playwright.dev/)

---

## Installation and Setup

### Prerequisites
- Node.js v18 or later
- npm or yarn package manager

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/emre88tosun/news-cs.git
   cd news-cs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Assumptions and Constraints

1. **Assumptions**:
   - The News API is reliable and provides data in the expected format.
   - Pagination will always return 10 results per page.

2. **Constraints**:
   - API responses are not cached server-side indefinitely; they are refreshed every 1.5 minutes.
   - The website does not include complex user interactions or features beyond those specified.

---

## Testing

### Running Unit Tests
1. To run unit tests:
   ```bash
   npm run test
   ```

2. To run e2e tests:
   ```bash
   npm run test:e2e
   ```

---

## Future Improvements
- Add more filtering options (e.g., by category).
- Include user authentication for personalized experiences.
- Add support for light/dark mode.

---
