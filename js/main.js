// Make all content unselectable across pages
document.addEventListener('DOMContentLoaded', function() {
    // Function to make elements unselectable
    function makeUnselectable(elements) {
        elements.forEach(element => {
            // Skip interactive elements
            if (element.tagName === 'A' || element.tagName === 'BUTTON' || 
                element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ||
                element.tagName === 'SELECT' || element.classList.contains('download-btn') ||
                element.classList.contains('badge-toggle') || 
                element.classList.contains('view-details-btn') ||
                element.classList.contains('close-modal')) {
                return;
            }

            // Make element unselectable
            element.style.userSelect = 'none';
            element.style.webkitUserSelect = 'none';
            element.style.mozUserSelect = 'none';
            element.style.msUserSelect = 'none';

            // Prevent image dragging
            if (element.tagName === 'IMG') {
                element.draggable = false;
                // Only disable pointer events if it's NOT inside a button/link
                if (!element.closest('a') && !element.closest('button')) {
                    element.style.pointerEvents = 'none';
                }
            }
        });
    }

    // Select all content sections including the main area and potential modals
    const contentSections = document.querySelectorAll('main, section, header, footer, .modal-content, [class*="-section"]');
    
    contentSections.forEach(section => {
        // Get all text and content elements within each section
        const elements = section.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div, img, li');
        makeUnselectable(elements);
    });
});
