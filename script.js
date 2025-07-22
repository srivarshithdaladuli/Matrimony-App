// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Multi-step Form Logic
const steps = document.querySelectorAll('.form-step');
const progressBar = document.getElementById('progress-bar');
let currentStep = 1;

function showStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('active', index + 1 === step);
    });
    progressBar.style.width = `${(step / 3) * 100}%`;
}

function validateStep(step) {
    let isValid = true;
    if (step === 1) {
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;

        document.getElementById('name-error').classList.toggle('hidden', /^[a-zA-Z\s]{2,}$/.test(name));
        document.getElementById('dob-error').classList.toggle('hidden', dob !== '');
        document.getElementById('gender-error').classList.toggle('hidden', gender !== '');

        isValid = /^[a-zA-Z\s]{2,}$/.test(name) && dob !== '' && gender !== '';
    } else if (step === 2) {
        const height = document.getElementById('height').value;
        const religion = document.getElementById('religion').value;
        const education = document.getElementById('education').value;

        document.getElementById('height-error').classList.toggle('hidden', height >= 100 && height <= 250);
        document.getElementById('religion-error').classList.toggle('hidden', religion !== '');
        document.getElementById('education-error').classList.toggle('hidden', /^[a-zA-Z\s]{2,}$/.test(education));

        isValid = height >= 100 && height <= 250 && religion !== '' && /^[a-zA-Z\s]{2,}$/.test(education);
    } else if (step === 3) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        document.getElementById('email-error').classList.toggle('hidden', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
        document.getElementById('password-error').classList.toggle('hidden', password.length >= 8);
        document.getElementById('confirm-password-error').classList.toggle('hidden', password === confirmPassword);

        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 8 && password === confirmPassword;
    }
    return isValid;
}

document.getElementById('next-1').addEventListener('click', () => {
    if (validateStep(1)) {
        currentStep = 2;
        showStep(currentStep);
    }
});

document.getElementById('next-2').addEventListener('click', () => {
    if (validateStep(2)) {
        currentStep = 3;
        showStep(currentStep);
    }
});

document.getElementById('prev-2').addEventListener('click', () => {
    currentStep = 1;
    showStep(currentStep);
});

document.getElementById('prev-3').addEventListener('click', () => {
    currentStep = 2;
    showStep(currentStep);
});

document.getElementById('submit').addEventListener('click', () => {
    if (validateStep(3)) {
        alert('Registration successful! (Mock submission)');
    }
});

// Password Toggle
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Login Password Toggle
const toggleLoginPassword = document.getElementById('toggle-login-password');
const loginPasswordInput = document.getElementById('login-password');
toggleLoginPassword.addEventListener('click', () => {
    const type = loginPasswordInput.type === 'password' ? 'text' : 'password';
    loginPasswordInput.type = type;
    toggleLoginPassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Login Form Validation
document.getElementById('login-submit').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    document.getElementById('login-email-error').classList.toggle('hidden', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    document.getElementById('login-password-error').classList.toggle('hidden', password.length >= 8);

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= 8) {
        alert('Login successful! (Mock submission)');
    }
});

// Search Filters (Mock)
document.getElementById('apply-filters').addEventListener('click', () => {
    alert('Filters applied! (Mock functionality)');
});

// Send Interest Buttons
document.querySelectorAll('.send-interest').forEach(button => {
    button.addEventListener('click', () => {
        alert('Interest sent! (Mock functionality)');
    });
});

// Profile Details Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => {
            btn.classList.remove('border-pink-500', 'text-pink-600');
            btn.classList.add('text-gray-500', 'border-transparent');
        });
        button.classList.add('border-pink-500', 'text-pink-600');
        button.classList.remove('text-gray-500', 'border-transparent');

        tabPanes.forEach(pane => pane.classList.add('hidden'));
        document.getElementById(button.dataset.tab).classList.remove('hidden');
    });
});

// Messaging UI
const matchItems = document.querySelectorAll('.match-item');
const chatWith = document.getElementById('chat-with');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendMessageButton = document.getElementById('send-message');
const messageError = document.getElementById('message-error');

const mockMessages = {
    jane: [
        { sender: 'received', text: 'Hi! I saw your profile and would love to connect.', time: '10:30 AM' },
        { sender: 'sent', text: 'Hey, thanks for reaching out! I\'m interested too.', time: '10:32 AM' }
    ],
    priya: [
        { sender: 'received', text: 'Hello! I liked your profile. Are you open to chatting?', time: '11:00 AM' },
        { sender: 'sent', text: 'Hi Priya, sure, let\'s chat!', time: '11:05 AM' }
    ],
    sonia: [
        { sender: 'received', text: 'Hey there! I think we have a lot in common.', time: '12:15 PM' },
        { sender: 'sent', text: 'Hi Sonia, I agree! Let\'s get to know each other.', time: '12:20 PM' }
    ]
};

function loadChat(match) {
    chatWith.textContent = match === 'jane' ? 'Jane Smith' : match === 'priya' ? 'Priya Patel' : 'Sonia Khan';
    chatWindow.innerHTML = '';
    mockMessages[match].forEach(msg => {
        const div = document.createElement('div');
        div.classList.add('chat-message', msg.sender);
        div.innerHTML = `<p>${msg.text}</p><span class="text-xs text-gray-400">${msg.time}</span>`;
        chatWindow.appendChild(div);
    });
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

matchItems.forEach(item => {
    item.addEventListener('click', () => {
        matchItems.forEach(i => i.classList.remove('bg-pink-100'));
        item.classList.add('bg-pink-100');
        loadChat(item.dataset.match);
    });
});

sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message === '') {
        messageError.classList.remove('hidden');
        return;
    }
    messageError.classList.add('hidden');
    const activeMatch = document.querySelector('.match-item.bg-pink-100')?.dataset.match || 'jane';
    const newMessage = { sender: 'sent', text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    mockMessages[activeMatch].push(newMessage);
    loadChat(activeMatch);
    messageInput.value = '';
});

// Load default chat
loadChat('jane');