document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(item.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});






// JavaScript for Modal Interaction
const modal = document.getElementById("runnerModal");
const closeModal = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

// Sample data for runners (you can replace this with your data)
const runnersData = [
    {
        name: "Runner 1",
        stats: "Mile: 4:30, 5K: 16:00, 800m: 1:55",
        bio: "Runner 1 is a dedicated athlete with a passion for cross country and track. Known for their speed and determination, they consistently strive for excellence.",
        image: "runner1.jpg",
    },
    {
        name: "Runner 2",
        stats: "Mile: 4:35, 5K: 16:15, 800m: 1:58",
        bio: "Runner 2 is a versatile athlete who excels in both short and long-distance races. Their strong work ethic and positive attitude inspire the team.",
        image: "runner2.jpg",
    },
    // Add more runner data as needed
];

// Function to open the modal and populate it with specific runner's data
function openModal(runnerIndex) {
    const runner = runnersData[runnerIndex];
    modalContent.innerHTML = `
        <img src="${runner.image}" alt="${runner.name}">
        <h3>${runner.name}</h3>
        <p><strong>Stats:</strong> ${runner.stats}</p>
        <p><strong>Bio:</strong> ${runner.bio}</p>
    `;
    modal.style.display = "block";
}

// Function to close the modal
function closeModalHandler() {
    modal.style.display = "none";
}

// Add a click event listener to each runner's card to open the modal
const runnerCards = document.querySelectorAll(".roster-member");
runnerCards.forEach((card, index) => {
    card.addEventListener("click", () => openModal(index));
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", closeModalHandler);

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalHandler();
    }
});

// Prevent clicks inside the modal from closing it
modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
});
