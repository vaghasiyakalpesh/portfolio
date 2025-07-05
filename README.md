# Personal Portfolio Website

A modern, responsive personal portfolio website for Kalpesh Vaghasiya, built with HTML, CSS, and JavaScript.

## Features

- **Animated Home Section:** Introduction, animated text, and profile image.
- **Services:** Grid layout showcasing Laravel, API, database, e-commerce, and security services.
- **Resume:** Tabbed experience, education, skills, and about sections with persistent tab state.
- **Portfolio:** Carousel with navigation for latest projects, including live project links and images.
- **Contact:** Contact details and a styled contact form with Formspree integration for inquiries.
- **Responsive Design:** Fully responsive for desktop, tablet, and mobile.
- **Custom Scrollbars:** Themed scrollbars for a modern look.
- **State Persistence:** Remembers last visited section and resume tab using localStorage/sessionStorage.
- **Accessible Navigation:** Hamburger menu for mobile, keyboard navigation support.

## Project Structure

```
├── css/
│   └── style.css                # Main stylesheet
├── documents/
│   └── kalpesh_vaghasiya_resume.pdf  # Resume file
├── images/
│   ├── my_photo.jpg             # Profile image
│   ├── lonlonlyf.png            # Portfolio project image
│   ├── home.png                 # Home section image
│   ├── portfolio1.jpg           # Additional portfolio images
│   ├── portfolio2.jpg
│   ├── portfolio3.jpg
│   ├── portfolio4.jpg
│   └── portfolio5.jpg
├── js/
│   └── script.js                # Main JavaScript file (includes Formspree integration)
└── index.html                   # Main HTML file
```

## Getting Started

1. **Clone or Download** this repository.
2. **Open `index.html`** in your browser.
3. **No build step required.** All assets are local except for icon/font CDN links.

## Customization

- **Profile Info:** Edit the content in `index.html` (name, about, services, etc.).
- **Images:** Replace images in the `images/` folder.
- **Resume:** Update `documents/kalpesh_vaghasiya_resume.pdf` with your own resume.
- **Styling:** Modify `css/style.css` for custom colors or layout.

## Scripts

- All interactivity and form handling (including Formspree integration for inquiries) is handled in [`js/script.js`](js/script.js).
- No frameworks or build tools required.

## Using Formspree

The contact form on this website uses [Formspree](https://formspree.io/) to handle inquiries and submissions securely.  
The integration is implemented in the [`js/script.js`](js/script.js) file.  
To use your own Formspree endpoint, update the form's `action` attribute in `index.html` and adjust any related logic in `script.js` as needed.

## Credits

- [Boxicons](https://boxicons.com/) and [Font Awesome](https://fontawesome.com/) for icons.
- Images and illustrations are either self-created or sourced from free-to-use resources.
- Designed and developed by Kalpesh Vaghasiya.

## License

This project is provided for personal portfolio and educational use.  
You are welcome to use it as a template for your own portfolio.  
Attribution is appreciated but not required.
