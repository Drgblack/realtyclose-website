// Cookie Consent Banner for RealtyClose
(function() {
    'use strict';
    
    // Check if user has already consented
    function hasConsented() {
        return localStorage.getItem('realtyclose-cookie-consent') !== null;
    }
    
    // Create the cookie banner
    function createCookieBanner() {
        if (hasConsented()) {
            return;
        }
        
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div style="
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(17, 24, 39, 0.95);
                backdrop-filter: blur(8px);
                border-top: 1px solid rgba(55, 65, 81, 0.5);
                z-index: 9999;
                padding: 16px;
                font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
                <div style="max-width: 1200px; margin: 0 auto;">
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="flex: 1;">
                            <h3 style="color: white; font-weight: 600; margin: 0 0 8px 0; font-size: 16px;">
                                🍪 We use essential cookies
                            </h3>
                            <p style="color: #d1d5db; font-size: 14px; margin: 0; line-height: 1.5;">
                                We use only essential cookies for website functionality and security. No tracking or advertising cookies.
                                <a href="privacy-policy.html" style="color: #60a5fa; text-decoration: underline;">
                                    Learn more about our privacy policy
                                </a>
                            </p>
                        </div>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                            <button 
                                id="decline-cookies" 
                                style="
                                    background: transparent;
                                    color: #d1d5db;
                                    border: none;
                                    padding: 8px 16px;
                                    cursor: pointer;
                                    font-size: 14px;
                                    transition: color 0.2s;
                                "
                                onmouseover="this.style.color='white'"
                                onmouseout="this.style.color='#d1d5db'"
                            >
                                Decline
                            </button>
                            <button 
                                id="accept-cookies" 
                                style="
                                    background: #3b82f6;
                                    color: white;
                                    border: none;
                                    padding: 8px 24px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-size: 14px;
                                    font-weight: 500;
                                    transition: background-color 0.2s;
                                "
                                onmouseover="this.style.backgroundColor='#2563eb'"
                                onmouseout="this.style.backgroundColor='#3b82f6'"
                            >
                                Accept Essential Cookies
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(banner);
        
        // Add event listeners
        document.getElementById('accept-cookies').addEventListener('click', function() {
            localStorage.setItem('realtyclose-cookie-consent', 'accepted');
            localStorage.setItem('realtyclose-cookie-consent-date', new Date().toISOString());
            removeBanner();
        });
        
        document.getElementById('decline-cookies').addEventListener('click', function() {
            localStorage.setItem('realtyclose-cookie-consent', 'declined');
            localStorage.setItem('realtyclose-cookie-consent-date', new Date().toISOString());
            removeBanner();
        });
    }
    
    function removeBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.opacity = '0';
            banner.style.transition = 'opacity 0.3s ease-out';
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createCookieBanner);
    } else {
        createCookieBanner();
    }
})();