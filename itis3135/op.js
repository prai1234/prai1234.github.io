// Show the "What" section by default
// JavaScript to show/hide sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Show the "What" section by default
showSection('what');
