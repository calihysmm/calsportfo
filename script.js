const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar a");

function updateActiveLink() {
    let currentId = "introduction";

    const marker = window.scrollY + 150;

    sections.forEach((section) => {
        if (section.offsetTop <= marker) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive =
            link.getAttribute("href") === `#${currentId}`;

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveLink, {
    passive: true
});

window.addEventListener("load", updateActiveLink);