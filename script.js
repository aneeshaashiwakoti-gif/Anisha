/* =========================================
   DARK MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☾";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeToggle.textContent =
        isDark ? "☾" : "☼";

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});


/* =========================================
   AI CHAT
========================================= */

const openChat =
    document.getElementById("openChat");

const closeChat =
    document.getElementById("closeChat");

const chatWindow =
    document.getElementById("chatWindow");

const chatForm =
    document.getElementById("chatForm");

const chatInput =
    document.getElementById("chatInput");

const chatMessages =
    document.getElementById("chatMessages");


openChat.addEventListener("click", () => {

    chatWindow.classList.add("open");

    chatInput.focus();

});


closeChat.addEventListener("click", () => {

    chatWindow.classList.remove("open");

});


/* =========================================
   TEMPORARY PORTFOLIO AI
========================================= */

function getAIResponse(message) {

    const text =
        message.toLowerCase().trim();


    if (
        text.includes("skill") ||
        text.includes("know") ||
        text.includes("technology")
    ) {

        return `
            Anisha currently works with Python, C, Java,
            HTML, CSS and JavaScript. She is also learning
            Data Structures, Object-Oriented Programming,
            NumPy, Pandas and Machine Learning.
        `;

    }


    if (
        text.includes("project") ||
        text.includes("built")
    ) {

        return `
            Anisha's current featured project is her
            personal portfolio website, built with HTML,
            CSS and JavaScript. More projects are being
            added as she continues learning and building.
        `;

    }


    if (
        text.includes("learning") ||
        text.includes("learn")
    ) {

        return `
            Anisha is currently going deeper into Java,
            Object-Oriented Programming, Data Structures
            and Algorithms, and Artificial Intelligence /
            Machine Learning.
        `;

    }


    if (
        text.includes("education") ||
        text.includes("college") ||
        text.includes("study")
    ) {

        return `
            Anisha is pursuing a B.E. in Computer Science
            and Engineering at Sona College of Technology
            in Salem, Tamil Nadu.
        `;

    }


    if (
        text.includes("cgpa") ||
        text.includes("gpa")
    ) {

        return `
            Anisha's current CGPA is 8.34 / 10.
        `;

    }


    if (
        text.includes("certificate") ||
        text.includes("certification")
    ) {

        return `
            Anisha has completed Supervised Machine Learning:
            Regression & Classification through Stanford Online
            and DeepLearning.AI, as well as Python Programming
            Fundamentals through Infosys Springboard.
        `;

    }


    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("hire")
    ) {

        return `
            You can reach Anisha at
            aneeshaashiwakoti@gmail.com or connect with her
            on LinkedIn.
        `;

    }


    return `
        I'm still learning! Try asking me about Anisha's
        skills, projects, certifications, education,
        CGPA or what she's currently learning.
    `;

}


/* =========================================
   SEND MESSAGE
========================================= */

chatForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const message =
        chatInput.value.trim();

    if (!message) return;


    /* USER MESSAGE */

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.textContent =
        message;

    chatMessages.appendChild(
        userMessage
    );


    chatInput.value = "";


    /* BOT RESPONSE */

    setTimeout(() => {

        const botMessage =
            document.createElement("div");

        botMessage.className =
            "bot-message";

        botMessage.innerHTML =
            getAIResponse(message);

        chatMessages.appendChild(
            botMessage
        );


        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }, 600);

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .stat-card, .project-card, .learning-card, .certificate-card"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 700ms ease, transform 700ms cubic-bezier(.2,.8,.2,1)";

    observer.observe(element);

});


/* =========================================
   CURSOR PARALLAX ON HERO IMAGE
========================================= */

const imageCard =
    document.querySelector(".image-card");


document.addEventListener("mousemove", (event) => {

    if (!imageCard) return;

    if (window.innerWidth < 900) return;


    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);


    imageCard.style.transform = `
        rotate(${3 + x * 4}deg)
        translate(${x * 8}px, ${y * 8}px)
    `;

});


/* =========================================
   KEYBOARD SHORTCUT
========================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "/" &&
        document.activeElement !== chatInput
    ) {

        event.preventDefault();

        chatWindow.classList.add("open");

        chatInput.focus();

    }

});