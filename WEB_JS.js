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
});