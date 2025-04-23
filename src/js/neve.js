document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.snow-container');
    const numberOfSnowflakes = 100;
  
    for (let i = 0; i < numberOfSnowflakes; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snow');
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random() * 0.5 + 0.2;
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      container.appendChild(snowflake);
    }
  });
  