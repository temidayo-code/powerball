const messages = [
    "Hey everyone! How's it going?",
    "Did anyone watch the game last night?",
    "I'm working on a new project, super excited!",
    "Can't believe it's already this time of the year",
    "Who's up for coffee later?",
    "Just finished reading an amazing book!",
    "Has anyone tried the new restaurant downtown?",
    "The weather is perfect today ☀️",
    "I'm learning to code, it's challenging but fun!",
    "Missing summer vacation already..."
];

const names = ["Alex", "Sarah", "Mike", "Emma", "James"];
const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5"
];

// Default messages
const defaultMessages = [
    {
        name: "Sarah",
        message: "Hey everyone! Welcome to the group chat 👋",
        avatar: "https://i.pravatar.cc/150?img=1",
        isOwn: false
    },
    {
        name: "Alex",
        message: "Thanks Sarah! Excited to be here!",
        avatar: "https://i.pravatar.cc/150?img=2",
        isOwn: true
    },
    {
        name: "Mike",
        message: "How's everyone doing today?",
        avatar: "https://i.pravatar.cc/150?img=3",
        isOwn: false
    },
    {
        name: "Emma",
        message: "Great! Just finished my morning coffee ☕",
        avatar: "https://i.pravatar.cc/150?img=4",
        isOwn: true
    }
];

let isOwnMessage = false;

function createMessage(messageData = null) {
    const messageDiv = document.createElement('div');
    
    if (messageData) {
        messageDiv.className = `message ${messageData.isOwn ? 'own' : ''} new`;
        messageDiv.innerHTML = `
            <img class="message-avatar" src="${messageData.avatar}" alt="avatar">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-name">${messageData.name}</span>
                    <span class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
                <div class="message-text">${messageData.message}</div>
            </div>
        `;
    } else {
        messageDiv.className = `message ${isOwnMessage ? 'own' : ''} new`;
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

        messageDiv.innerHTML = `
            <img class="message-avatar" src="${randomAvatar}" alt="avatar">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-name">${randomName}</span>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                </div>
                <div class="message-text">${randomMessage}</div>
            </div>
        `;
    }

    const chatMessages = document.getElementById('chatMessages');
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Keep only the last 8 messages
    while (chatMessages.children.length > 8) {
        chatMessages.removeChild(chatMessages.firstChild);
    }
}

function getRandomInterval() {
    // Convert 2s to 35s to milliseconds (2000ms to 35000ms)
    const minTime = 2000;  // 2 seconds
    const maxTime = 35000; // 35 seconds
    return Math.floor(Math.random() * (maxTime - minTime) + minTime);
}

function startChat() {
    createMessage(); // Create first message immediately
    
    function scheduleNextMessage() {
        setTimeout(() => {
            createMessage();
            scheduleNextMessage();
        }, getRandomInterval());
    }
    
    scheduleNextMessage();
}

// Enhanced version with small variations
function updateOnlineCount() {
    const currentCount = getNumberFromString(document.querySelector('.online-count').textContent);
    
    // Generate a small variation (-5 to +5) from current count
    const variation = Math.floor(Math.random() * 11) - 5;
    
    // Ensure count stays within bounds (50-200)
    let newCount = currentCount + variation;
    newCount = Math.max(50, Math.min(200, newCount));
    
    const onlineCountElement = document.querySelector('.online-count');
    animateValue(onlineCountElement, currentCount, newCount, 1000);
}

function getNumberFromString(str) {
    return parseInt(str.match(/\d+/)[0]) || 0;
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        element.textContent = `${currentCount} members online`;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize online count and set up interval
function initializeOnlineCount() {
    // Set initial count
    updateOnlineCount();
    
    // Update count every 90 seconds
    setInterval(updateOnlineCount, 90000);
}

// Add this function to create more natural variations
function startRandomVariations() {
    // Occasionally update with small variations (every 5-15 seconds)
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance to update
            updateOnlineCount();
        }
    }, 5000);
}

// Start the chat simulation when the page loads
window.onload = function() {
    startChat();
    initializeOnlineCount();
    startRandomVariations();
} 