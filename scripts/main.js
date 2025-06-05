document.querySelectorAll(".highlight__card").forEach((card) => {
    const content = card.querySelector(".highlight__content");

    card.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
            const { offsetX, offsetY } = e;
            const width = card.offsetWidth;
            const height = card.offsetHeight;

            const rotateX = ((offsetY / height) - 0.5) * 15; 
            const rotateY = ((offsetX / width) - 0.5) * -15; 

            content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });

    card.addEventListener("mouseleave", () => {
        requestAnimationFrame(() => {
            content.style.transform = "rotateX(0deg) rotateY(0deg)";
        });
    });
});