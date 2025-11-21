# Barrett's Quarry Website

A professional single-page website for Barrett's Quarry, a family-run white quartzite stone supplier in Bangor, County Mayo, Ireland.

## About the Business

Barrett's Quarry specializes in premium white quartzite stone, serving both commercial and domestic customers:

- **Bulk Aggregates**: Large volume supply for roads, construction, and infrastructure projects
- **Domestic Ton Bags**: Garden landscaping, driveways, and pathways available through garden centers
- **Direct Collection**: Visit the quarry for flexible collection and expert advice

## Website Features

- **Modern Single-Page Design**: Clean, professional layout inspired by leading quarry websites
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky header with smooth scrolling to sections
- **Contact Form**: JavaScript-powered form that opens the user's email client with pre-filled information
- **Accessible**: Built with semantic HTML and keyboard navigation support
- **Fast Loading**: Optimized CSS and vanilla JavaScript (no heavy frameworks)

## Technology Stack

- **HTML5**: Semantic structure with proper meta tags and SEO optimization
- **CSS3**: Modern responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No dependencies, lightweight and fast
- **GitHub Pages**: Free hosting solution

## File Structure

```
barrettsquary.ie/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript functionality
├── CNAME              # Custom domain configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Deployment Instructions

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com and sign up

2. **Create a New Repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it: `barrettsquarry.ie` (or any name you prefer)
   - Make it Public
   - Don't initialize with README (we already have one)

3. **Push Your Code to GitHub**
   ```bash
   # Navigate to the project folder
   cd /Users/damian/Development/damianflynn/barrettsquary.ie

   # Initialize git repository
   git init

   # Add all files
   git add .

   # Create first commit
   git commit -m "Initial commit: Barrett's Quarry website"

   # Add your GitHub repository as remote (replace YOUR-USERNAME)
   git remote add origin https://github.com/YOUR-USERNAME/barrettsquarry.ie.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/barrettsquarry.ie/`

5. **Set Up Custom Domain (Optional)**
   - In the "Pages" settings, add your custom domain: `barrettsquarry.ie`
   - Configure DNS with your domain registrar:
     - Create an A record pointing to GitHub Pages IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - Create a CNAME record for `www` pointing to `YOUR-USERNAME.github.io`

### Option 2: Netlify (Alternative - Also Free)

1. Go to https://netlify.com and sign up
2. Drag and drop the entire project folder
3. Your site will be live instantly with a Netlify URL
4. You can configure a custom domain in the Netlify dashboard

### Option 3: Cloudflare Pages (Alternative - Also Free)

1. Go to https://pages.cloudflare.com and sign up
2. Connect your GitHub repository
3. Deploy with default settings
4. Configure custom domain in Cloudflare dashboard

## Customization Guide

### Update Contact Information

Edit [index.html](index.html):

1. **Email Address**: Search for `info@barrettsquarry.ie` and update
2. **Phone Number**: Find the phone section and add your actual number
3. **Address**: Update the address in the Visit and Footer sections

### Add Real Images

Replace image placeholders:

1. Add your images to the project folder (e.g., `images/hero.jpg`)
2. Update the hero section background in [styles.css](styles.css):
   ```css
   .hero {
       background-image:
           linear-gradient(rgba(44, 62, 80, 0.7), rgba(52, 73, 94, 0.8)),
           url('images/hero.jpg');
   }
   ```
3. Replace `.image-placeholder` and `.map-placeholder` with actual `<img>` tags

### Update Colors

Modify the color scheme in [styles.css](styles.css) at the `:root` section:

```css
:root {
    --primary-color: #2c3e50;    /* Main dark color */
    --accent-color: #3498db;     /* Accent blue - change this! */
    --light-gray: #ecf0f1;       /* Light backgrounds */
}
```

### Add Google Maps

Replace the map placeholder in [index.html](index.html):

```html
<div class="visit-map">
    <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
        width="100%"
        height="500"
        style="border:0; border-radius: 8px;"
        allowfullscreen=""
        loading="lazy">
    </iframe>
</div>
```

Get your embed code:
1. Go to Google Maps
2. Search for your quarry location
3. Click "Share" → "Embed a map"
4. Copy the iframe code

### Update Business Hours

Edit the opening hours section in [index.html](index.html) to match your actual schedule.

## Contact Form Functionality

The contact form uses a `mailto:` approach that:

1. Validates user input
2. Creates a formatted email with all form data
3. Opens the user's default email client
4. Pre-fills the recipient, subject, and body

This approach works without a backend server and is perfect for small businesses. The email will be sent to `info@barrettsquarry.ie`.

### Alternative: Use a Form Service

If you want the form to work without opening an email client, consider:

- **Formspree** (https://formspree.io) - Free tier available
- **Netlify Forms** - Built-in if hosting on Netlify
- **Google Forms** - Embed a Google Form

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- No external dependencies
- Minimal CSS and JavaScript
- Fast load times
- Optimized for mobile

## SEO Optimization

The site includes:
- Meta descriptions
- Semantic HTML structure
- Proper heading hierarchy
- Alt text placeholders for images (add when you insert real images)
- Mobile-friendly responsive design

## Future Enhancements

Consider adding:
- **Photo Gallery**: Showcase quarry operations and stone products
- **Testimonials**: Customer reviews and case studies
- **Blog Section**: Industry news and project highlights
- **Online Quote Calculator**: Estimate costs based on quantity
- **Live Chat**: Real-time customer support
- **Analytics**: Google Analytics to track visitors

## License

This website was built for Barrett's Quarry. All rights reserved.

## Support

For technical issues or questions about the website, contact the developer or refer to:
- GitHub Pages documentation: https://docs.github.com/pages
- Web development resources: https://developer.mozilla.org/

---

**Built with care for a family business in the West of Ireland** 🏔️
