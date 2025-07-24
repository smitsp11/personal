# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features an animated skyline as the central visual metaphor with smooth transitions and a dark, minimal theme.

## 🌆 Features

- **Animated Skyline**: Interactive buildings representing different sections (About, Projects, Experience, Passions, Contact)
- **Dark Minimal Theme**: Clean, modern design with soft accent glows
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Modern Typography**: Space Grotesk and Inter fonts for optimal readability
- **Interactive Elements**: Hover effects, glow animations, and smooth scrolling

## 🏗️ Sections

### About Me
- Personal bio and photo
- Personality traits and skills
- Technical expertise showcase

### Projects
- Featured project cards with tech stacks
- GitHub and live demo links
- Responsive grid layout

### Experience
- Timeline format showing career progression
- Company details and role descriptions
- Skills used in each position

### Passions
- Interests beyond coding (F1, videography, music, etc.)
- Interactive cards with detailed descriptions
- Call-to-action for shared interests

### Contact
- Contact form with validation
- Social media links
- Professional contact information

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Dark theme colors in the `dark` object
- Accent colors in the `accent` object

### Content
Update the content in each component:
- `src/components/AboutMe.tsx` - Personal information
- `src/components/Projects.tsx` - Project details
- `src/components/Experience.tsx` - Work history
- `src/components/Passions.tsx` - Personal interests
- `src/components/Contact.tsx` - Contact information

### Skyline Buildings
Modify the buildings array in `src/components/Skyline.tsx` to change:
- Building heights and widths
- Colors and glow effects
- Section mappings

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

- **Entrance animations**: Fade and slide effects for sections
- **Hover effects**: Scale and glow animations on interactive elements
- **Scroll animations**: Reveal effects as users scroll
- **Building animations**: Staggered entrance and hover effects

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── AboutMe.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Navbar.tsx
│   ├── Passions.tsx
│   ├── Projects.tsx
│   └── Skyline.tsx
├── App.tsx
├── index.tsx
└── index.css
```

### Key Features
- **TypeScript**: Full type safety throughout the application
- **Component-based**: Modular, reusable components
- **CSS-in-JS**: Tailwind utilities for styling
- **Animation-ready**: Framer Motion integration for smooth transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
