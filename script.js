document.addEventListener('DOMContentLoaded', () => {
    // Get the current hour (0-23) from the user's computer
    const currentHour = new Date().getHours();
    const body = document.body;

    // Remove any existing theme classes just in case
    body.classList.remove('theme-morning', 'theme-afternoon', 'theme-evening', 'theme-night');

    // Determine the time of day and apply the corresponding theme
    if (currentHour >= 6 && currentHour < 12) {
        // 6:00 AM to 11:59 AM
        body.classList.add('theme-morning');
    } else if (currentHour >= 12 && currentHour < 18) {
        // 12:00 PM to 5:59 PM
        body.classList.add('theme-afternoon');
    } else if (currentHour >= 18 && currentHour < 21) {
        // 6:00 PM to 8:59 PM
        body.classList.add('theme-evening');
    } else {
        // 9:00 PM to 5:59 AM
        body.classList.add('theme-night');
    }
});