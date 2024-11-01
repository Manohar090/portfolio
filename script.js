document.addEventListener("DOMContentLoaded", () => {
    // Select the email button
    const emailButton = document.querySelector(".contact-card i.fa-envelope");

    if (emailButton) {
        emailButton.addEventListener("click", () => {
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=manoharvemuri143@gmail.com", "_blank");
        });
    }
});
