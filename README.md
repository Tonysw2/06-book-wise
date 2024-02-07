# QuickConverter

## Introduction

BookWise is a dynamic web application designed for book enthusiasts. It offers users the ability to explore a vast collection of books, rate them, and read reviews from other users. Whether you're looking for your next read or wanting to share your thoughts on your latest book, BookWise provides a platform for engaging with a community of like-minded readers.

## Technologies

- Zod
- Axios
- React
- Prisma
- Next.js
- Radix-ui
- TypeScript
- Tailwind CSS
- TanStack Query

## Getting Started

To run the BookWise on your machine, follow these quick steps:

1. **Clone the repository**

   First, clone the project repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Tonysw2/06-book-wise.git
   ```
2. **Install dependencies**

   Navigate to the project directory and install the required dependencies:

   ```bash
   npm i
   ```
## Environment Setup

Before running the project, you need to set up the required environment variables. Create a `.env` file in the root directory of your project and fill it with the necessary values:

- `DATABASE_URL`: The connection string to your database (e.g., `file:./dev.db`).
- `NEXTAUTH_URL`: The full URL of your site (e.g., `https://example.com` or `http://localhost:3000` for development).
- `NEXTAUTH_SECRET`: A secret used to encrypt your session cookies and tokens.
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: Credentials for Google OAuth integration.
- `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`: Credentials for GitHub OAuth integration.

Check the [NextAuth documentation](https://next-auth.js.org/) and follow the steps to add Google and Github authentication.

3. **Database Setup**

   After setting up the environment variables and installing dependencies, prepare the database:

   ```bash
   npx prisma migrate dev
   ```

   This command initializes your database schema and applies any migrations necessary for the development environment.

4. **Running the Project**

   To start the project on your local development server, execute:

   ```bash
   npm run dev
   ```

   This will start the development server, typically accessible at `http://localhost:3000` in your web browser.
  