# Owen Njaria Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark theme
- Interactive UI components
- Dynamic color themes
- Smooth animations with Framer Motion
- Type-safe development with TypeScript

## Tech Stack

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/NjariaOwen/dynamic-portfolio.git
   cd dynamic-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
   or
   \`\`\`
   yarn install
   \`\`\`

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

4. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`
   or
   \`\`\`
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

This project is set up for easy deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository.
2. Sign up for a Vercel account if you haven't already.
3. In Vercel, click "Import Project" and select your GitHub repository.
4. Configure your project settings, including environment variables.
5. Click "Deploy" and Vercel will automatically build and deploy your application.

This project is also set up for deployment on Firebase Hosting. Follow these steps:

1. Install the Firebase CLI globally:
   \`\`\`
   npm install -g firebase-tools
   \`\`\`

2. Log in to Firebase:
   \`\`\`
   firebase login
   \`\`\`

3. Initialize Firebase in your project:
   \`\`\`
   firebase init
   \`\`\`
   Select "Hosting" and choose your Firebase project.

4. Build and deploy your project:
   \`\`\`
   npm run deploy
   \`\`\`

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region
RECIPIENT_EMAIL=your_email@example.com
SENDER_EMAIL=noreply@yourdomain.com
\`\`\`

Make sure to add these environment variables to your Firebase project settings as well.

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Author

Owen Njaria Njuguna

## License

This project is open source and available under the [MIT License](LICENSE).


