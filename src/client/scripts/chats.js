// const socket = io('/BOT');
document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message === '') {
        return;
    }
    if (message !== "") {
        addMessageToChat('User', message);
        userInput.value = '';
    }
    try {
        const response = await fetch(`https://hr-chatbot-xddc.onrender.com/chat?query=${message}`)
        const result = await response.json()
        addMessageToChat('Bot', result.response);
    } catch (error) {
        console.error('Error:', error);
        addMessageToChat('Bot', 'There was an error processing your request.');
    }
}
//Required to connect hr to user
// socket.on("connect", () => {
//     let p = document.createElement("p")
//     p.innerText = "You're connected"
//     p.style.backgroundColor = "#d4edda";
//     messageContainer.appendChild(p)
// });

//Required to connect hr to user
// socket.on('message', (message) => {
//     addMessageToChat("Operator", message);
// });


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




