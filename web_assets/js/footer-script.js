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

function updateSEOMetaTags(pageTitle, pageDescription, pageKeywords, pageThumbnail, homeUrl, canonicalUrl) {
    // Update the meta title
    document.title = pageTitle;

    // Update meta description
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
        descriptionTag.setAttribute('content', pageDescription);
    }

    // Update meta keywords
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
        keywordsTag.setAttribute('content', pageKeywords);
    }

    // Update Open Graph meta tags
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
        ogTitleTag.setAttribute('content', pageTitle);
    }

    let ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute('content', pageDescription);
    }

    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
        ogImageTag.setAttribute('content', pageThumbnail);
    }

    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
        ogUrlTag.setAttribute('content', homeUrl);
    }

    // Update Twitter meta tags
    let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag) {
        twitterTitleTag.setAttribute('content', pageTitle);
    }

    let twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionTag) {
        twitterDescriptionTag.setAttribute('content', pageDescription);
    }

    let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageTag) {
        twitterImageTag.setAttribute('content', pageThumbnail);
    }

    // Use homeUrl for twitter:url
    let twitterUrlTag = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrlTag) {
        twitterUrlTag.setAttribute('content', homeUrl);
    }

    // Update Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
        canonicalTag.setAttribute('href', canonicalUrl);
    }

    // Update or create Schema.org JSON-LD script tag
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
        // Parse the existing schema content and update
        let schemaData = JSON.parse(schemaScript.textContent);

        // Update fields in the schema (modify as needed)
        schemaData.name = pageTitle;
        schemaData.description = pageDescription;
        schemaData.keywords = pageKeywords;
        schemaData.image = pageThumbnail;
        schemaData.url = homeUrl;

        // Update the schema script content
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
    } else {
        // If no schema is found, create a new one
        let newSchema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": pageDescription,
            "keywords": pageKeywords,
            "image": pageThumbnail,
            "url": homeUrl
        };

        // Create and append the schema script tag
        let scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.textContent = JSON.stringify(newSchema, null, 2);
        document.head.appendChild(scriptTag);
    }
}

// Call the function with the variables
updateSEOMetaTags(pageTitle, pageDescription, pageKeywords, pageThumbnail, homeUrl, canonicalUrl);

