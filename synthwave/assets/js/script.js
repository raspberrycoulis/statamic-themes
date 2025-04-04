document.addEventListener('DOMContentLoaded', function() {
    // Interactive Neon Color Shift: Adjust accent color based on mouse X position.
    document.addEventListener('mousemove', function(event) {
      // Calculate a hue value from 0 to 360 based on mouse position
      let hue = Math.floor((event.clientX / window.innerWidth) * 360);
      // Update the CSS variable for accent color dynamically
      document.documentElement.style.setProperty('--accent-color', `hsl(${hue}, 100%, 50%)`);
    });
  
    // Optional: Randomly toggle the neon flicker effect on elements with the class 'neon-text'
    const neonElements = document.querySelectorAll('.neon-text');
    neonElements.forEach(el => {
      setInterval(() => {
        el.classList.toggle('neon-flicker');
      }, 3000); // Flicker effect toggles every 3 seconds
    });
  });