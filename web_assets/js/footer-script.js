document.addEventListener("DOMContentLoaded", function () {
    function setActiveMenuItem() {
        let currentPage = window.location.pathname.split("/").filter(Boolean).pop();
        let activeItem = document.querySelector(`nav .menu-item[data-page="${currentPage}"]`);

        if (activeItem) {
            activeItem.classList.add("active");
        }
    }

    setActiveMenuItem();

    const observer = new MutationObserver(() => {
        setActiveMenuItem();
        if (document.querySelector("nav .menu-item.active")) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});

function toggleMenu() {

    const hamburger = document.getElementById('hamburger');
    const cross = document.getElementById('cross');
    const navLinks = document.getElementById('nav-menu');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        navLinks.classList.add('show');
        body.style.overflow = 'hidden';
    });

    cross.addEventListener('click', () => {
        navLinks.classList.remove('show');
        body.style.overflow = '';
    });
}

const navLinks = document.querySelectorAll('.nav-menu .menu-item');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.nav-menu .nav-menu-mobile');
        navLinks.classList.remove('show');
        body.style.overflow = '';
    });

});

// Function to update SEO meta tags
function updateSEOMetaTags(pageTitle, pageDescription, pageKeywords, pageThumbnail, homeUrl, canonicalUrl) {
    // Update the meta title
    document.title = pageTitle;

    // Update meta description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
        descriptionTag.setAttribute('content', pageDescription);
    } else {
        let metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', pageDescription);
        document.head.appendChild(metaDescription);
    }

    // Update meta keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
        keywordsTag.setAttribute('content', pageKeywords);
    } else {
        let metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', pageKeywords);
        document.head.appendChild(metaKeywords);
    }

    // Update Open Graph meta tags
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
        ogTitleTag.setAttribute('content', pageTitle);
    } else {
        let metaOgTitle = document.createElement('meta');
        metaOgTitle.setAttribute('property', 'og:title');
        metaOgTitle.setAttribute('content', pageTitle);
        document.head.appendChild(metaOgTitle);
    }

    let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute('content', pageDescription);
    } else {
        let metaOgDescription = document.createElement('meta');
        metaOgDescription.setAttribute('property', 'og:description');
        metaOgDescription.setAttribute('content', pageDescription);
        document.head.appendChild(metaOgDescription);
    }

    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
        ogImageTag.setAttribute('content', pageThumbnail);
    } else {
        let metaOgImage = document.createElement('meta');
        metaOgImage.setAttribute('property', 'og:image');
        metaOgImage.setAttribute('content', pageThumbnail);
        document.head.appendChild(metaOgImage);
    }

    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
        ogUrlTag.setAttribute('content', homeUrl);
    } else {
        let metaOgUrl = document.createElement('meta');
        metaOgUrl.setAttribute('property', 'og:url');
        metaOgUrl.setAttribute('content', homeUrl);
        document.head.appendChild(metaOgUrl);
    }

    // Update Twitter meta tags
    let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag) {
        twitterTitleTag.setAttribute('content', pageTitle);
    } else {
        let metaTwitterTitle = document.createElement('meta');
        metaTwitterTitle.setAttribute('name', 'twitter:title');
        metaTwitterTitle.setAttribute('content', pageTitle);
        document.head.appendChild(metaTwitterTitle);
    }

    let twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionTag) {
        twitterDescriptionTag.setAttribute('content', pageDescription);
    } else {
        let metaTwitterDescription = document.createElement('meta');
        metaTwitterDescription.setAttribute('name', 'twitter:description');
        metaTwitterDescription.setAttribute('content', pageDescription);
        document.head.appendChild(metaTwitterDescription);
    }

    let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageTag) {
        twitterImageTag.setAttribute('content', pageThumbnail);
    } else {
        let metaTwitterImage = document.createElement('meta');
        metaTwitterImage.setAttribute('name', 'twitter:image');
        metaTwitterImage.setAttribute('content', pageThumbnail);
        document.head.appendChild(metaTwitterImage);
    }

    // Update Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
        canonicalTag.setAttribute('href', canonicalUrl);
    } else {
        let metaCanonical = document.createElement('link');
        metaCanonical.setAttribute('rel', 'canonical');
        metaCanonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(metaCanonical);
    }
}

// Call the function with the variables
updateSEOMetaTags(pageTitle, pageDescription, pageKeywords, pageThumbnail, homeUrl, canonicalUrl);

function addSchemaMarkup(pageTitle, pageDescription, pageThumbnail, homeUrl) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Nutritionist",
        "name": pageTitle,
        "url": homeUrl,
        "description": pageDescription,
        "image": pageThumbnail,
        "logo": "https://raven-developer.github.io/Nutritionist/web_assets/images/nutrionist-logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 91813 23 2309",
            "contactType": "Customer Service",
            "areaServed": "Somewhere in the World",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.facebook.com/",
            "https://twitter.com/",
            "https://www.linkedin.com/"
        ]
    };

    // Add JSON-LD schema markup to the head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
}

// Call function to add schema with page data
addSchemaMarkup(pageTitle, pageDescription, pageThumbnail, homeUrl);
