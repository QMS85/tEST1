document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI elements
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.auth-form');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const countrySelect = document.getElementById('country');

    // Mobile menu handlers
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container') && 
                !e.target.closest('.mobile-menu') &&
                mobileMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });

        // Close menu when clicking links
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu) {
            menuToggle?.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Add hover effect delay for mobile
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        document.querySelectorAll('a').forEach(link => {
            link.style.touchAction = 'manipulation';
        });
    }

    // Tab switching
    if (tabBtns && forms) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                forms.forEach(f => f.classList.remove('active'));
                btn.classList.add('active');
                const formId = `${btn.dataset.form}-form`;
                document.getElementById(formId)?.classList.add('active');
            });
        });
    }

    // Populate countries
    if (countrySelect) {
        // Add loading state
        countrySelect.innerHTML = '<option value="">Loading countries...</option>';
        
        // Fallback countries in case API fails
        const fallbackCountries = [
            'United States', 'United Kingdom', 'Canada', 'Australia',
            'Germany', 'France', 'South Africa', 'Nigeria', 'Kenya',
            'India', 'China', 'Japan', 'Brazil', 'Mexico'
        ];

        // Try fetching from API first
        fetch('https://restcountries.com/v3.1/all', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Clear loading state
            countrySelect.innerHTML = '<option value="">Select Country</option>';
            
            // Process and sort countries
            const countries = data
                .map(country => country.name.common)
                .sort((a, b) => a.localeCompare(b));
            
            // Add countries to select
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
            
            // Use fallback countries if API fails
            countrySelect.innerHTML = '<option value="">Select Country</option>';
            fallbackCountries.sort().forEach(country => {
                const option = document.createElement('option');
                option.value = country;
                option.textContent = country;
                countrySelect.appendChild(option);
            });
        });
    }

    // Form validation helper
    const validateField = (input, errorMessage) => {
        if (!input) return false;
        const errorElement = input.nextElementSibling?.nextElementSibling;
        if (!errorElement) return false;

        if (!input.validity.valid) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            input.classList.add('error');
            return false;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            input.classList.remove('error');
            return true;
        }
    };

    // Signup form validation
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            isValid = validateField(
                this.fullName,
                'Please enter your full name (letters only)'
            ) && isValid;

            isValid = validateField(
                this.email,
                'Please enter a valid email address'
            ) && isValid;

            isValid = validateField(
                this.country,
                'Please select your country'
            ) && isValid;

            isValid = validateField(
                this.phone,
                'Please enter a valid phone number'
            ) && isValid;

            isValid = validateField(
                this.password,
                'Password must be at least 8 characters with letters and numbers'
            ) && isValid;

            if (isValid) {
                // Handle form submission
                console.log('Form is valid, ready to submit');
            }
        });
    }

    // Login form validation
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            isValid = validateField(
                this.email,
                'Please enter your email address'
            ) && isValid;

            isValid = validateField(
                this.password,
                'Please enter your password'
            ) && isValid;

            if (isValid) {
                // Handle login
                console.log('Login form is valid, ready to submit');
            }
        });
    }

    // Footer scroll visibility
    const footer = document.querySelector('.footer');
    let lastScrollTop = 0;
    let ticking = false;

    function handleFooterVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Show footer when near bottom or scrolling up
        if (scrollTop + windowHeight >= documentHeight - 100 || scrollTop < lastScrollTop) {
            footer.style.transform = 'translateY(0)';
            footer.style.opacity = '1';
        } else {
            footer.style.transform = 'translateY(100%)';
            footer.style.opacity = '0';
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleFooterVisibility();
            });
            ticking = true;
        }
    });

    // Initial footer state
    if (footer) {
        footer.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        handleFooterVisibility();
    }
});

// INVEST PLAN BUTTON REDIRECTS //
document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('click', () => {
                const url = button.getAttribute('data-url');
                window.location.href = url;
            });
        });
//END OF INVESTMENT PLAN BUTTON REDIRECTS//


// JavaScript for QR Code and Copy Functionality
document.addEventListener("DOMContentLoaded", function () {
    // Generate QR Code
    const qrCodeContainer = document.getElementById("qrcode");
    const walletAddress = "TPwAC3Zjr4YWNHybnB9Q6MMFQWyM5zB88M";
    const qrCode = new QRCode(qrCodeContainer, {
        text: walletAddress,
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Copy Wallet Address to Clipboard
    const copyButton = document.getElementById("copyButton");
    const copySuccess = document.getElementById("copySuccess");

    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(walletAddress).then(() => {
            // Show success message
            copySuccess.style.display = "block";

            // Hide success message after 2 seconds
            setTimeout(() => {
                copySuccess.style.display = "none";
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy wallet address: ", err);
        });
    });
});

