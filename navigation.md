Responsive Navigation Menu

Step-by-Step Instructions and Explanations
1. HTML Structure of the Navigation Bar
The HTML file includes a navigation bar (<nav>) with a logo, navigation links, and a menu toggle button for mobile view.

<sub><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GKroon CryptoInvest</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav>
        <div class="nav-container">
            <a href="#" class="logo">GKroon Crypto Invest</a>
            <ul class="nav-links">
                <li><a href="index.html">About</a></li>
                <li><a href="Investment-Plans.html">Investment Plans</a></li>
                <li><a href="Risk-Disclosure.html">Risk Disclosure</a></li>
                <li><a href="Crypto-News-Blog.html">Crypto News/Blog</a></li>
                <li><a href="Signup-Login.html" class="cta-button">Sign Up & Login</a></li>
            </ul>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <span class="hamburger"></span>
                <span class="hamburger"></span>
                <span class="hamburger"></span>
            </button>
        </div>
    </nav>

    <div class="mobile-menu">
        <ul>
            <li><a href="index.html">About</a></li>
            <li><a href="Investment-Plans.html">Investment Plans</a></li>
            <li><a href="Risk-Disclosure.html">Risk Disclosure</a></li>
            <li><a href="Crypto-News-Blog.html">Crypto News/Blog</a></li>
            <li><a href="Signup-Login.html">Sign Up & Login</a></li>
        </ul>
    </div>

    <script src="script.js"></script>
</body>
</html></sub>

Explanation:
HTML Boilerplate:

The <sub><!DOCTYPE html></sub> declaration defines the document type and version of HTML.
The <html> element is the root element of the document.
The <head> element contains meta-information about the document, such as character set and viewport settings.
<sub><link rel="stylesheet" href="styles.css"></sub> links an external CSS file for styling the page.
Navigation Bar (<nav>):

The <sub><nav></sub> element contains the navigation bar.
Inside the <nav>, there is a div with the class nav-container that wraps the navigation content.
Logo:

<sub><a href="#" class="logo">GKroon Crypto Invest</a></sub> is a link styled as a logo.

Navigation Links:

<sub><ul class="nav-links"></sub> contains the navigation links.
Each <li> element represents a navigation item linking to different pages (index.html, Investment-Plans.html, etc.).
Menu Toggle Button:

<sub><button class="menu-toggle" aria-label="Toggle navigation"></sub> is a button for toggling the navigation menu in mobile view.
The button contains three <sub><span class="hamburger"></sub> elements styled as hamburger bars.
Mobile Menu:

<sub><div class="mobile-menu"></sub> is a container for the mobile version of the navigation menu.
Contains a <ul> with the same links as in the desktop navigation.
External JavaScript:

<sub><script src="script.js"></script></sub> links an external JavaScript file for interactive functionalities.


Step-by-Step Instructions and Explanations
2. CSS for Responsive Navigation Bar

The CSS file styles the navigation bar, making it responsive for different screen sizes.

CSS:

<sub>:root {
    --primary-color: #1a237e;
    --accent-color: #4CAF50;
    --text-color: #ffffff;
    --transition-speed: 0.3s;
}</sub

<sub>:root</sub>: This defines CSS variables for primary color, accent color, text color, and transition speed. 
Using these variables makes it easier to manage and update color schemes and transitions across the entire stylesheet.

CSS:

<sub>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}
</sub>            

Universal Selector <sub>(*)</sub>: Resets <sub>margin</sub> and <sub>padding</sub> for all elements to ensure consistent spacing. <sub>box-sizing: border-box</sub> ensures that padding and border are included in the element's total width and height. 
The <sub>font-family</sub> is set to <sub>'Segoe UI'</sub>.

CSS:

<sub>
nav {
    background: var(--primary-color);
    padding: 1rem 5%;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}    
</sub>
<sub>nav</sub>: Sets the background color using the primary color variable, adds padding, and applies a slight shadow for depth. 
The navigation bar is fixed at the top of the page and spans the full width. <sub>z-index: 1000</sub> ensures it stays on top of other content. 

CSS:
<sub>
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}  
</sub>
<sub>.nav-container</sub>: Uses Flexbox to align navigation items horizontally and space them evenly.

CSS:
<sub>
.logo {
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: transform var(--transition-speed) ease;
}   
</sub>
<sub>.logo</sub>: Styles the logo link with text color, font size, and weight. 
Removes text decoration and adds a smooth transition effect on hover.

CSS:
<sub>
.logo:hover {
    transform: translateY(-2px);
}   
</sub>
<sub>.logo:hover</sub>: Adds a subtle upward movement when the logo is hovered over.

CSS:
<sub>
.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}
</sub>
<sub>.nav-links</sub>: Horizontally displays navigation links with a gap between them and removes default list styling.


CSS:
<sub>
.nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    transition: all var(--transition-speed) ease;
    position: relative;
    padding: 0.5rem 0;
}
</sub>
<sub>.nav-links a</sub>: Styles navigation links with text color, removes text decoration, and adds padding. Adds a smooth transition effect and positions them relatively for the underline effect.

CSS:
<sub>
.nav-links a:hover {
    color: var(--accent-color);
    transform: translateY(-2px);
    text-shadow: 0 2px 10px rgba(76, 175, 80, 0.3);
}
</sub>
<sub>.nav-links a:hover</sub>: Changes the link color, adds a slight upward movement, and applies a shadow effect on hover.

CSS:
<sub>
.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--accent-color);
    bottom: 0;
    left: 0;
    transition: width var(--transition-speed) ease;
}
</sub>
<sub>.nav-links a::after</sub>: Creates an underline effect that transitions in width on hover.

CSS:
<sub>
.nav-links a:hover::after {
    width: 100%;
}
</sub>
<sub>.nav-links a:hover::after</sub>: Expands the underline to the full width of the link on hover.

CSS:
<sub>
.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    z-index: 1001;
}
</sub>
<sub>.menu-toggle</sub>: Styles the menu toggle button for mobile view. Initially hidden, it will be displayed on smaller screens.

CSS:
<sub>
.hamburger {
    display: block;
    width: 25px;
    height: 3px;
    background: var(--text-color);
    margin: 5px 0;
    transition: all var(--transition-speed) ease;
    transform-origin: center;
}
</sub>
<sub>.hamburger</sub>: Styles the hamburger bars inside the menu toggle button.

CSS:
<sub>
.menu-toggle.active .hamburger:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.menu-toggle.active .hamburger:nth-child(2) {
    opacity: 0;
}
.menu-toggle.active .hamburger:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}
</sub>

<sub>.menu-toggle.active .hamburger</sub>: Animates the hamburger bars to form a cross (X) when the menu is active.

CSS:
<sub>
.mobile-menu {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background: #1a237e;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.mobile-menu.active {
    display: block;
}
</sub>
<sub>.mobile-menu</sub>: Styles the mobile menu, initially hidden and displayed when active.

CSS
<sub>
.mobile-menu ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
</sub>

<sub>.mobile-menu ul</sub>: Displays the mobile menu links vertically with a gap.

CSS:
<sub>
.mobile-menu a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all var(--transition-speed) ease;
}
.mobile-menu a:hover {
    background: rgba(76,175,80,0.3);
    transform: translateX(10px);
    text-shadow: 0 2px 10px rgba(76, 175, 80, 0.3);
}
</sub>
<sub>.mobile-menu a</sub>: Styles the mobile menu links and adds a hover effect.

CSS:
<sub>
.cta-button {
    background: var(--accent-color);
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    transition: transform var(--transition-speed) ease;
}
.cta-button:hover {
    transform: translateY(-2px) scale(1.05);
}
</sub>

<sub>.cta-button</sub>: Styles the call-to-action button and adds a hover effect.

CSS:
<sub>
@media screen and (max-width: 768px) {
    .nav-links {
        display: none;
    }
<!-- //--> //
/
    .menu-toggle {
        display: block;
    }
}

@media screen and (min-width: 769px) {
    .mobile-menu {
        display: none;
    }
}
</sub>

Media Queries: Adjusts the display of navigation elements based on screen width. 
Hides the desktop navigation links and displays the menu toggle button on screens smaller than 768px. Hides the mobile menu on screens larger than 768px.

Next, we will look at the JavaScript code for the responsive navigation bar.

Step-by-Step Instructions and Explanations:

3. JavaScript code for the Responsive Navigation Bar
The JavaScript file (script.js) enhances the interactivity of the navigation bar, making it responsive to user actions and screen size changes.

JavaScript:
<sub>
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgers = document.querySelectorAll('.hamburger');</sub>
<sub>DOMContentLoaded</sub> event: Ensures the script runs after the HTML document has been completely loaded and parsed.
<sub>menuToggle</sub>: Selects the menu toggle button.
<sub>mobileMenu</sub>: Selects the mobile menu container.
<sub>hamburger</sub>: Selects all elements with the class hamburger.

JavaScript:
<sub>
    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
</sub>
Toggle mobile menu: Adds a click event listener to the menu toggle button. 
When clicked, it toggles the active class on both the mobile menu and the menu toggle button, showing or hiding the menu.

JavaScript
<sub>
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && 
            !e.target.closest('.mobile-menu') &&
            mobileMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
 </sub>   
 
Close menu when clicking outside: Adds a click event listener to the entire document. 
If the user clicks outside the navigation container and the mobile menu is active, it removes the active class from both the menu toggle button and the mobile menu, hiding the menu.

JavaScript:
<sub>
    // Close menu when clicking links
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
</sub> 

Close menu when clicking links: Adds click event listeners to all links inside the mobile menu. 
When a link is clicked, it removes the active class from both the menu toggle button and the mobile menu, hiding the menu.

JavaScript:
<sub>
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
</sub>

Handle window resize: Adds a resize event listener to the window. 
If the window width exceeds 768 pixels, it removes the active class from both the menu toggle button and the mobile menu, ensuring the menu is hidden on larger screens.

JavaScript:
<sub>
    // Add hover effect delay for mobile
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.querySelectorAll('a').forEach(link => {
            link.style.touchAction = 'manipulation';
        });
    }
});
</sub>

Add hover effect delay for mobile: Detects if the user is on a mobile device using a regular expression to test the user agent string. If true, it sets touch-action: manipulation on all links to improve touch responsiveness and delay hover effects.

Additional Tips and Resources:
Tip: Use addEventListener to handle events such as clicks and window resize. This approach is more flexible and cleaner than using inline event handlers.
Resource: MDN Web Docs on addEventListener - Learn more about using addEventListener.

Project Suggestion: Create a responsive e-commerce website with a similar navigation bar and interactive product filters.

Summary of the Training Documentation
HTML Structure: Explained the HTML structure of the navigation bar and its components.
CSS Styling: Detailed the CSS styling for the navigation bar, including responsiveness and hover effects.
JavaScript Interactivity: Provided step-by-step instructions on how the JavaScript code enhances the navigation bar's interactivity.



