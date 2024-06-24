# Build a GenAI SaaS Platform with Next.js 13, React, Tailwind, Prisma, and Stripe

[![Next.js](https://img.shields.io/badge/Next.js-13-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-17-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2.30-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-2023-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

## Features

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

## Cloning the Repository

To get started with the project, clone the repository using the following command:

```shell
git clone https://github.com/jhuboo/GenAI-SaaS-Platform.git
```

## Install Packages

Navigate to the project directory and install the necessary packages:

```shell
npm install
```

## Setup Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Setup Prisma

To set up the database, push the Prisma schema to your MySQL database (you can use PlanetScale or any other MySQL database):

```shell
npx prisma db push
```

## Start the App

Run the development server with the following command:

```shell
npm run dev
```

## Available Commands

You can run the following commands with npm `npm run [command]`:

| Command | Description                              |
| ------- | ---------------------------------------- |
| `dev`   | Starts a development instance of the app |

# Images of the App

- ![Demo 1](https://github.com/jhuboo/GenAI-SaaS-Platform/blob/main/public/screenshots/demo-1.png)
- ![Demo 2](https://github.com/jhuboo/GenAI-SaaS-Platform/blob/main/public/screenshots/demo-2.png)
- ![Demo 3](https://github.com/jhuboo/GenAI-SaaS-Platform/blob/main/public/screenshots/demo-3.png)
