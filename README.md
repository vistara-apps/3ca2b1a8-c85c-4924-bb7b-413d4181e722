# Errandly - Base Mini App

Your hyperlocal task network: Get small errands done, fast.

## Features

- **Hyperlocal Errand Feed**: Real-time feed of nearby tasks with distance and payment info
- **Simple Errand Posting**: Quick 30-second task posting with crypto payments
- **Secure Payment System**: Base blockchain integration for secure transactions
- **Task Verification & Rating**: Complete tasks and build reputation through ratings

## Tech Stack

- **Next.js 15** with App Router
- **MiniKit** for Base Mini App integration
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Base Network** for blockchain transactions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your API keys
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                # Utilities and types
└── public/             # Static assets
```

## Key Components

- **AppShell**: Main layout wrapper
- **TaskCard**: Individual task display with actions
- **PostErrandModal**: Task creation interface
- **UserProfileBadge**: User identity and reputation display
- **NotificationBanner**: Success/error messaging

## Mock Data

The app currently uses mock data for demonstration. In production, this would connect to:
- Base Network for payments and escrow
- Farcaster for user identity
- Location services for hyperlocal filtering
- Real-time database for task updates

## Design System

- **Colors**: Dark theme with accent colors for actions
- **Typography**: Clean, readable fonts optimized for mobile
- **Spacing**: Consistent 4px grid system
- **Motion**: Subtle animations for better UX

## Deployment

This app is designed to be deployed as a Base Mini App within the Base App ecosystem.

## License

MIT License
