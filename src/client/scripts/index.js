document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    const getStartedButton = document.querySelector('.get-started-button');
    getStartedButton.addEventListener('click', () => {
        window.location.href = 'signin.html';
    });
});


const subtitleText = "I am your HR Asistant, I am here to assist you. If you have any query feel free to ask!";
    const subtitleElement = document.getElementById('subtitle');
    let index = 0;

    function typeSubtitle() {
        if (index < subtitleText.length) {
            subtitleElement.innerHTML += subtitleText.charAt(index);
            index++;
            setTimeout(typeSubtitle, 150);
        }
    }

    typeSubtitle();


    document.addEventListener('DOMContentLoaded', () => {
        const robot = document.querySelector('.robot');
        const message = document.querySelector('.message');
      
        // Start Animation
        robot.style.animationPlayState = 'running';
      
        // Toggle Animation and Message on Click
        robot.addEventListener('click', () => {
          if (robot.style.animationPlayState === 'running') {
            robot.style.animationPlayState = 'paused';
            message.style.display = 'block';
          } else {
            robot.style.animationPlayState = 'running';
            message.style.display = 'none';
          }
        });
      });
      
      
