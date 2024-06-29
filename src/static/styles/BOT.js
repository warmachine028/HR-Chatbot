const socket = io('/BOT');
document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message === '') return;
    else if (message !== "") {
        // socket.emit("message", message);
        addMessageToChat('User', message);
        userInput.value = '';
    }
 
    // Send message to backend and get response
    fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        addMessageToChat('Bot', data);
    })
    .catch(error => {
        console.error('Error:', error);
        addMessageToChat('Bot', 'There was an error processing your request.');
    });
    
}

socket.on("connect", () => {
    let p = document.createElement("p")
    p.innerText = "You're connected"
    p.style.backgroundColor = "#d4edda";
    messageContainer.appendChild(p)
});

sendButton.addEventListener("click", () => {
    sendMessage();
});

userInput.addEventListener("keypress", (e) => {
    if (e.which === 13 && userInput.value.trim() !== "") {
        sendMessage();
    }
});
socket.on('message', (message) => {
    addMessageToChat("Operator", message);
});


function addMessageToChat(sender, message) {
    const chatLog = document.querySelector('.chat-log');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender.toLowerCase());
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function handleFaqClick(question) {
    document.getElementById('userInput').value = question;
    sendMessage();
}


const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.chat-log').classList.toggle('dark-mode');
    document.querySelector('.user-input input').classList.toggle('dark-mode');

    // const getStartedButton = document.querySelector('#nextPg');
    // getStartedButton.addEventListener('click', () => {
    //     window.location.href = 'HR.html';
    // });
});




