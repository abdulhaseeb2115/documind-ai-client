# DocuMind AI - Frontend Client

Modern, responsive Next.js frontend for DocuMind AI with a beautiful UI and smooth animations.

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
client/
├── public/                    # Static assets
│   ├── logo.png              # Application logo
│   ├── chat-session.png      # Screenshot for documentation
│   └── empty-session.png     # Screenshot for documentation
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── page.tsx         # Home page (Hero + Features)
│   │   ├── about/
│   │   │   └── page.tsx     # About page
│   │   ├── tool/
│   │   │   └── page.tsx     # Main chat interface
│   │   ├── layout.tsx        # Root layout with fonts
│   │   └── globals.css       # Global styles & animations
│   │
│   └── components/           # React components
│       ├── Navbar.tsx        # Navigation bar
│       ├── Footer.tsx        # Footer component
│       ├── Logo.tsx          # Logo component
│       ├── AnimatedBackground.tsx  # Animated particles
│       └── UserAvatar.tsx    # User avatar with initials
│
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Pages

### Home Page (`/`)

- **Hero Section:** Full-screen hero with animated background
- **Features Section:** "How It Works" with 3 steps
- **Value Section:** "Why Choose DocuMind AI" benefits
- **Screenshots Section:** "See It In Action" with tool previews

### About Page (`/about`)

- Information about DocuMind AI
- How PDFs are processed
- Context-based answering explanation

### Tool Page (`/tool`)

- **Left Panel:** PDF upload area with drag & drop
- **Right Panel:** Chat interface with message history
- **Name Modal:** Prompts for user name on first visit
- **Session Management:** Clear session functionality

## 🧩 Components

### Navbar (`components/Navbar.tsx`)

- Responsive navigation bar
- Logo, Home, Tool, About links
- Active link highlighting
- Glassmorphism effect

### Footer (`components/Footer.tsx`)

- Logo and description
- Navigation links
- Consistent styling with navbar

### Logo (`components/Logo.tsx`)

- Image logo from `/public/logo.png`
- Next.js Image optimization
- Link to home page

### AnimatedBackground (`components/AnimatedBackground.tsx`)

- Animated particle system
- Multiple shapes (circles, squares, diamonds, stars, hexagons)
- Gradient color animations
- Hero mode for enhanced animations
- Spread across entire viewport

### UserAvatar (`components/UserAvatar.tsx`)

- Generates avatar from user initials
- Reads from sessionStorage
- Gradient background
- Circular design

## 🎨 Design System

### Color Palette

- **Primary:** Electric Purple (`#9333ea`)
- **Secondary:** Cyber Blue (`#3b82f6`)
- **Accent:** Solar Orange (`#f97316`)
- **Background:** Soft Off-White / Light Lavender (`#faf9ff`)
- **Surface:** White (`#ffffff`)
- **Text Primary:** Near-black (`#1a1a1a`)
- **Text Secondary:** Muted gray (`#6b6b7a`)

### Typography

- **Body Font:** Inter (clean, modern, tech-friendly)
- **Display Font:** Space Grotesk (geometric, futuristic, AI-inspired)

### Animations

- Smooth fade-in and slide-up effects
- Gradient color-changing animations
- Floating particle animations
- Hover glow effects
- Typing indicators

## 🔧 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Environment Variables

The frontend connects to the backend API. By default, it expects the backend at:

```
http://localhost:8000
```

To change this, update the API base URL in the tool page component.

### API Integration

The frontend communicates with the backend through these endpoints:

- `POST /upload-pdf` - Upload PDF file
- `POST /ask` - Ask question about PDF
- `POST /delete-session/{session_id}` - Clear session

### State Management

- **Session Storage:** User name stored in `sessionStorage`
- **Component State:** React hooks for UI state
- **API State:** Axios for HTTP requests

## 🎯 Features

### PDF Upload

- Drag and drop support
- Click to upload
- File validation (PDF only)
- Upload progress indicator
- Success feedback

### Chat Interface

- Real-time messaging
- User messages (right-aligned, purple gradient)
- Bot messages (left-aligned, neutral with accent border)
- Typing indicator
- Smooth message animations
- Auto-scroll to latest message

### User Experience

- Name input modal on first visit
- Avatar generation from initials
- Session-based chat
- Clear session functionality
- Empty state messaging
- Error handling with user-friendly messages

## 📱 Responsive Design

The application is fully responsive:

- **Mobile:** Stacked layout, optimized touch targets
- **Tablet:** Adjusted spacing and layout
- **Desktop:** Full two-panel layout

## 🎭 Animations

### Background Animations

- Floating blobs with gradient colors
- Multiple particle shapes
- Slow, smooth movements
- Low opacity for subtlety
- Gradient color transitions

### UI Animations

- Fade-in on page load
- Smooth hover transitions
- Button glow effects
- Message entry animations
- Typing indicator pulse

## 🐛 Troubleshooting

### Common Issues

**1. Cannot connect to backend**
- Ensure backend is running on port 8000
- Check CORS configuration in backend
- Verify API endpoint URLs

**2. Build errors**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version (18+)

**3. Images not loading**
- Ensure images are in `/public` folder
- Use Next.js `Image` component for optimization
- Check file paths are correct

**4. Styling issues**
- Clear browser cache
- Check Tailwind CSS configuration
- Verify `globals.css` is imported in layout

### Development Tips

- Use React DevTools for component inspection
- Check browser console for errors
- Use Next.js DevTools for performance
- Monitor network tab for API calls

## 🚀 Production Build

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables if needed
4. Deploy

### Environment Variables for Production

If you need to configure the backend URL:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com
```

Then use `process.env.NEXT_PUBLIC_API_URL` in your code.

## 📦 Dependencies

### Core

- **next** (15.4.6) - React framework
- **react** (19.1.0) - UI library
- **react-dom** (19.1.0) - React DOM renderer
- **typescript** (5.0) - Type safety

### Styling

- **tailwindcss** (4.0) - Utility-first CSS
- **@tailwindcss/postcss** - PostCSS integration

### HTTP Client

- **axios** (1.11.0) - HTTP requests

### Fonts

- **next/font/google** - Google Fonts integration
  - Inter
  - Space Grotesk

## 🎨 Customization

### Changing Colors

Update color values in:
- `src/app/globals.css` - CSS variables and animations
- Component files - Tailwind classes

### Adding New Pages

1. Create new file in `src/app/[page-name]/page.tsx`
2. Add route to Navbar if needed
3. Follow existing page structure

### Modifying Animations

- Particle animations: `components/AnimatedBackground.tsx`
- CSS animations: `src/app/globals.css`
- Component animations: Individual component files

## 🔒 Security

- No sensitive data stored in localStorage
- User name stored in sessionStorage (client-side only)
- API keys never exposed to frontend
- CORS handled by backend

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

When contributing to the frontend:

1. Follow TypeScript best practices
2. Use functional components with hooks
3. Maintain consistent styling with Tailwind
4. Add proper TypeScript types
5. Test responsive design
6. Update this README if adding features

## 📝 Code Style

- Use functional components
- Prefer hooks over class components
- Use TypeScript for type safety
- Follow Next.js App Router conventions
- Use Tailwind utility classes
- Keep components small and focused

---

**Note:** This frontend is designed to work with the DocuMind AI backend. Make sure the backend server is running for full functionality.
