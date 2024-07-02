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
});

// login.js

const msalConfig = {
    auth: {
        clientId: 'YOUR_CLIENT_ID', // Replace with your client ID
        authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Replace with your tenant ID
        redirectUri: 'http://localhost:3000', // Replace with your redirect URI
    },
    cache: {
        cacheLocation: 'sessionStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set to true if you are having issues on IE11 or Edge
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

const loginRequest = {
    scopes: ['openid', 'profile', 'User.Read'] // Add any other scopes you need
};

document.getElementById('ms-login-button').addEventListener('click', () => {
    msalInstance.loginPopup(loginRequest)
        .then(response => {
            console.log(response);
            // Handle successful login
            alert('Login successful');
        })
        .catch(error => {
            console.error(error);
            alert('Login failed: ' + error);
        });
});

// Optional: Your existing form login logic
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userid, password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful');
    } else {
        alert('Login failed: ' + data.message);
    }
});
