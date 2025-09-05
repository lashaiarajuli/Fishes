document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("player");
    const button = document.querySelector("button");
    const loop = document.querySelector(".loop");
    const overlay = document.querySelector(".start-look");

    button.addEventListener("click", () => {
        // Start audio
        audio.play().catch(err => console.log("Autoplay blocked:", err));

        // Start animations
        loop.querySelectorAll("img, .bubble, .bubble1a, .bubble1b, .bubble2, .bubble2a, .bubble2b, .bubble3, .bubble3a, .bubble3b")
            .forEach(el => el.style.animationPlayState = "running");

        // Hide overlay + button
        overlay.style.display = "none";
        button.style.display = "none";
    });
});