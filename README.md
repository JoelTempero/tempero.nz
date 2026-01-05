# Tempero Creative Website

A modern, SEO-optimized website for Tempero Creative built with Next.js 14, TypeScript, Tailwind CSS, and Firebase.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Server-side rendering, meta tags, structured data
- **Responsive Design**: Mobile-first approach, works on all devices
- **Animations**: Smooth transitions with Framer Motion
- **Firebase Ready**: Authentication, Firestore, and Storage configured
- **PWA Ready**: Can be installed as an app on mobile devices

## 📁 Project Structure

```
tempero-creative/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── news/
│   │   ├── portal/
│   │   ├── services/
│   │   │   ├── [category]/
│   │   │   │   └── [service]/
│   │   └── team/
│   │       └── [slug]/
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable UI components
│   ├── data/
│   │   └── siteData.ts         # All site content (edit this!)
│   ├── lib/
│   │   ├── firebase.ts         # Firebase configuration
│   │   └── utils.ts            # Utility functions
│   └── types/                  # TypeScript types
├── public/
│   ├── images/                 # Static images
│   └── videos/                 # Static videos
├── .env.example                # Environment variables template
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project (for future portal features)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tempero-creative.git
   cd tempero-creative
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Firebase credentials.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

All website content is managed through the `src/data/siteData.ts` file. This includes:

- Site configuration (name, contact info, social links)
- Navigation structure
- Page content (headings, descriptions, CTAs)
- Team member profiles
- Service listings
- FAQ items
- And more...

See the companion Excel spreadsheet for a complete content reference.

## 🖼️ Images

Place images in the `public/images/` directory following this structure:

```
public/images/
├── hero-bg.jpg
├── og-card.jpg
├── team/
│   ├── joel.jpg
│   ├── rachel.jpg
│   └── ...
├── services/
│   ├── videography-hero.jpg
│   ├── videography/
│   │   ├── weddings.jpg
│   │   └── ...
│   └── ...
└── news/
    └── ...
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Build

```bash
npm run build
npm start
```

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID |

## 📱 PWA Setup (Future)

To enable PWA features:

1. Add a `manifest.json` to `public/`
2. Add service worker configuration
3. Add appropriate meta tags to layout

## 📄 License

© 2024 Tempero Creative. All rights reserved.
