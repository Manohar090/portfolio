document.addEventListener("DOMContentLoaded", () => {
    // Select the email button
    const emailButton = document.querySelector(".contact-card i.fa-envelope");

    if (emailButton) {
        emailButton.addEventListener("click", () => {
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=manoharvemuri143@gmail.com", "_blank");
        });
    }
});

// Skills Animation
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-animate');
                progressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.setProperty('--progress', progress + '%');
                    bar.classList.add('animate');
                });
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe all skill categories
    document.querySelectorAll('.skills-category').forEach(category => {
        observer.observe(category);
    });
});
