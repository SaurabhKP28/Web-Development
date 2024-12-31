// Handle night mode functionality
const NightMode = {
    toggle() {
        document.body.classList.toggle('night-mode')
        if (document.body.classList.contains('night-mode')) {
            document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)');
            document.documentElement.style.setProperty('--gradient-card', 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)');
        } else {
            document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #f5f7fa 0%, #e5e9f0 100%)');
            document.documentElement.style.setProperty('--gradient-card', 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)');
        }
    }
};