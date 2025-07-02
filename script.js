document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target content section
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});