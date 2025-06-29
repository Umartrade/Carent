# Lux Car Rental

A modern, responsive car rental website built with React and Vite. Experience the ultimate convenience and freedom of exploring your destination at your own pace with our premium car rental services.

## 🚗 Features

- **Modern UI/UX**: Clean, responsive design with premium aesthetics
- **Car Selection**: Browse and select from a variety of luxury vehicles
- **Booking System**: Complete booking flow with location, car selection, personalization, and confirmation
- **Interactive Components**: Dynamic forms, date pickers, and interactive elements
- **Mobile Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.3.5
- **Routing**: React Router DOM 6.20.1
- **Date Handling**: React DatePicker 4.24.0
- **Phone Input**: React Phone Input 2.15.1
- **Testing**: Vitest 1.0.0
- **Font**: Manrope (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/lux-car-rental.git
cd lux-car-rental
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot reload.

### Build
```bash
npm run build
```
Builds the app for production to the `build` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
src/
├── Components/
│   ├── Card/           # Reusable card components
│   ├── Icon/           # SVG icon components
│   ├── Nav/            # Navigation components (Header, Footer)
│   ├── Pages/          # Page-specific components
│   └── UI/             # Custom UI components (Container, Row, Col, Form)
├── Layouts/
│   └── DefaultLayout.jsx
├── Pages/              # Main page components
├── Style/              # CSS and styling files
├── App.jsx             # Main app component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Key Components

### Pages
- **Homepage**: Hero section with car search, featured cars, and newsletter
- **Booking**: Multi-step booking process (Location → Car Selection → Personalization → Confirmation)
- **About**: Company information and team showcase
- **Blog**: Blog listing and detail pages
- **Careers**: Job listings and company values
- **Contact**: Contact form and information
- **FAQ**: Searchable frequently asked questions

### Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom UI Components**: Replaced Bootstrap with custom components
- **Interactive Forms**: Date pickers, phone input, and form validation
- **Dynamic Content**: Filterable cars, searchable FAQ, pagination
- **Modern Icons**: Custom SVG icon components

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### Tailwind CSS
Custom color scheme and utilities are defined in `tailwind.config.js`:
- **Primary Blue**: #1E19D8
- **Green Accent**: #EAFE89
- **Black**: #171717
- **White**: #FFFFFF

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern car rental platforms
- Icons and images from various sources
- Manrope font family from Google Fonts

## 📞 Support

For support, email customer@luxcarrental.com or create an issue in this repository.

---

**Built with ❤️ using React and Vite**