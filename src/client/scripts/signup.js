document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggle');
   
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    });

    // const getStartedButton = document.querySelector('.register-button');
    // getStartedButton.addEventListener('click', () => {
    //     window.location.href = 'login.html';
    // });
});
 