# MasonWorks

A modern, animated website for a masonry and stonework contractor built with Next.js, Framer Motion, and Radix UI.

## Features

- **Modern UI/UX**: Designed with an emphasis on unique layouts and creative motion
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Engaging animations using Framer Motion
- **Accessible Components**: Built with Radix UI primitives for maximum accessibility
- **Optimized Performance**: Fast loading times and smooth interactions
- **Client Testimonials**: Animated testimonial section with client avatars
- **Project Gallery**: Interactive project showcase
- **Contact Form**: User-friendly contact form for inquiries

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **React**: React 19 with Server Components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousels**: [Swiper.js](https://swiperjs.com/)
- **3D Effects**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mason-app.git
   cd mason-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── components/       # React components
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   └── images/           # Image assets
└── package.json          # Project dependencies
```

## Key Components

- **Hero**: Animated hero section with call-to-action
- **Services**: Interactive services showcase
- **Gallery**: Project portfolio with animations
- **Testimonials**: Client testimonials with avatars and ratings
- **Process**: Step-by-step process explanation
- **Contact**: Contact form with validation

## Recent Updates

- Added client avatars to testimonials section with Framer Motion animations
- Integrated Radix UI Avatar component for accessible, fallback-ready profile images
- Enhanced user interaction with hover animations on testimonial cards

## Deployment

The site can be easily deployed to Vercel:

```bash
npm run build
# or
vercel
```

## License

This project is licensed under the MIT License.
