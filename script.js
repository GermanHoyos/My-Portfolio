console.log("script loaded");

function nameChange() {
    const header1 = document.querySelector(".header_1");
    const header2 = document.querySelector(".header_2");
    if (!header1 || !header2) return;

    if (window.innerWidth <= 683) {
        header1.innerHTML = "Adrian Hoyos";
        header1.style.fontSize = "26px";
        header1.style.textAlign = "center";
        header2.style.fontSize = "16px";
    } else {
        header1.innerHTML = "Adrian Hoyos";
        header1.style.fontSize = "30px";
        header1.style.textAlign = "center";
        header2.style.fontSize = "20px";
    }
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", () => {
        window.addEventListener("resize", nameChange);
        nameChange();
    });
} else {
    window.addEventListener("resize", nameChange);
    nameChange();
}