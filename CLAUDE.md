# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Build/Lint/Test Instructions:**
- This is a static HTML/CSS/JS portfolio - no build step required
- To test: Open `index.html` in a web browser
- For responsive testing: Use browser dev tools (F12) to toggle device toolbar
- To validate HTML: Use W3C validator or similar online tool
- To validate CSS: Use CSS validator or browser dev tools

**Common Tasks:**
- View project: Open `index.html` in browser
- Edit content: Modify `index.html`, `style.css`, or `script.js`
- Update year: The footer year is updated automatically via JavaScript
- Add sections: Follow existing HTML structure patterns in index.html

## Project Structure

```
portfolio/
├── index.html        # Main HTML structure
├── style.css         # All styling (CSS3 with modern features)
├── script.js         # Interactive functionality (vanilla JS)
└── CLAUDE.md         # This file
```

## Architecture Overview

**Frontend Stack:**
- HTML5 Semantic Elements: Proper sectioning (header, nav, main, section, footer)
- CSS3 Modern Features: Flexbox, Grid, Custom Properties, Transitions, Animations
- Vanilla JavaScript: ES6+ features for interactivity
- Google Fonts: Inter font family for typography
- Font Awesome: Icons for theme toggle and social links
- Responsive Design: Mobile-first approach with media queries

**Key Components:**
1. **Navigation**: Fixed navbar with theme toggle (light/dark), active link highlighting via scroll spy
2. **Hero Section**: Typing animation, call-to-action buttons
3. **About Section**: Two-column layout with text and skills list
4. **Skills Section**: Grid of skill cards with hover effects
5. **Projects Section**: Interactive project cards with overlay effects
6. **Experience Section**: Vertical grid of experience cards
7. **Contact Section**: Form with validation and social links
8. **Footer**: Copyright and links
9. **Scroll to Top Button**: Appears after scrolling down

**Design System:**
- Color Scheme: Black and white with dark/light theme toggle
- Typography: Inter font family with clear hierarchy
- Spacing: Consistent 8px-based spacing system
- Border Radius: Uniform 4px radius for cards and buttons
- Shadows & Hover: Subtle shadows and hover effects for depth
- Transitions: Smooth 0.2s easing for all interactive elements

**JavaScript Functionality:**
- Typing animation for hero section role
- Dark/Light theme toggle with system preference detection and local storage
- Scroll-triggered fade-in animations
- Active navigation highlighting (scroll spy)
- Scroll-to-top button visibility
- Form submission handling (UI only)
- Smooth scrolling for anchor links

## Code Quality Standards

**HTML:**
- Use semantic elements appropriately
- Maintain proper indentation (2 spaces)
- Include alt text for images (when added)
- Follow accessibility guidelines (ARIA labels where needed)

**CSS:**
- Use CSS custom properties for theme colors
- Organize styles by section/component
- Use meaningful class names (BEM-like convention)
- Keep specificity low; avoid !important when possible
- Mobile-first media queries

**JavaScript:**
- Use ES6+ features (const/let, arrow functions, template literals)
- Comment complex logic
- Follow consistent naming conventions (camelCase)
- Handle events efficiently (debounce/throttle where needed)
- Keep DOM manipulations minimal

## Adding New Content

**To add a new section:**
1. Copy an existing section structure in index.html
2. Update the section ID and title
3. Add corresponding styles in style.css
4. Add any needed JavaScript functionality in script.js
5. Update navigation if needed

**To modify styling:**
1. Edit variables in :root and [data-theme="dark"] for theme-wide changes
2. Modify specific section styles as needed
3. Ensure responsive behavior is maintained
4. Test hover/focus states for accessibility

**To add animations:**
1. Use existing animation classes (fade-in-up) or create new ones
2. Consider performance; avoid layout thrashing
3. Test on various devices
4. Respect user's prefers-reduced-motion preference if implementing

## Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge (latest versions)
- Mobile: iOS Safari, Android Chrome
- Graceful degradation for older browsers (no JS fallback needed for basic content)

## Performance Considerations

- Minimize DOM repaints/reflows
- Use CSS transforms for animations when possible
- Optimize any future image assets
- Keep JavaScript non-blocking where appropriate
- Leverage browser caching for static assets

## Maintenance

- Update project cards in the Projects section as you complete new work
- Keep skills current in both About and Skills sections
- Update timeline in Experience section with new roles
- Test links periodically to ensure they still work
- Consider adding dark/light theme toggle as enhancement