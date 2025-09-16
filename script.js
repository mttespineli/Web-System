const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeModalBtn = document.querySelector('.close');

// Function to open the modal
function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add click event listeners to each gallery image
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        openModal(item.src);
    });
});

// Add click event listener to the close button
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
    
    const heading = document.querySelector('h1');
const changeColorBtn = document.getElementById('changeColorBtn');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];
let currentColorIndex = 0;

changeColorBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    heading.style.color = colors[currentColorIndex];
    });
});

const carFact = document.getElementById('carFact');
const toggleFactBtn = document.getElementById('toggleFactBtn');

toggleFactBtn.addEventListener('click', () => {
    if (carFact.style.display === 'none') {
        carFact.style.display = 'block';
    } else {
        carFact.style.display = 'none';
    }
});

const hoverImage = document.getElementById('hoverImage');
const originalSrc = hoverImage.src;
const newSrc = 'https://i.ibb.co/C1V1R21/r34-4.jpg'; // A different R34 image

hoverImage.addEventListener('mouseover', () => {
    hoverImage.src = newSrc;
});

hoverImage.addEventListener('mouseout', () => {
    hoverImage.src = originalSrc;
});

const clickImage = document.getElementById('hoverImage'); // Using the same image as the previous example
const clickCountSpan = document.getElementById('clickCount');
let clickCount = 0;

clickImage.addEventListener('click', () => {
    clickCount++;
    clickCountSpan.textContent = clickCount;
});




