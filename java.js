// This is the code for your main image modal and other features on gallery.html
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeModalBtn = document.querySelector('.close');
const hoverImage = document.getElementById('hoverImage');

// Check if elements are present before running the code (Important for stability)
if (modal && closeModalBtn) {
    function openModal(imageSrc) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            openModal(item.src);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}


// Change Heading Color
const heading = document.querySelector('h1');
const changeColorBtn = document.getElementById('changeColorBtn');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];
let currentColorIndex = 0;

if (changeColorBtn) {
    changeColorBtn.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        heading.style.color = colors[currentColorIndex];
    });
}


// Toggle Car Fact
const carFact = document.getElementById('carFact');
const toggleFactBtn = document.getElementById('toggleFactBtn');

if (toggleFactBtn) {
    toggleFactBtn.addEventListener('click', () => {
        if (carFact.style.display === 'none') {
            carFact.style.display = 'block';
        } else {
            carFact.style.display = 'none';
        }
    });
}


// Image Hover and Click Counter
if (hoverImage) {
    const originalSrc = hoverImage.src;
    // NOTE: Replace this 'newSrc' with a different image if you want a noticeable hover effect!
    const newSrc = 'https://images.unsplash.com/photo-1627582522774-325b57f0709b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTI3MDV8MHwxfHNlYXJjaHw0fHJOaXNzYW4lMjBHVC1SJTJCUjM0fGVufDB8fHx8MTY3ODg1MTE0MHww&lib=rb-4.0.3&q=80&w=1080';

    hoverImage.addEventListener('mouseover', () => {
        hoverImage.src = newSrc;
    });

    hoverImage.addEventListener('mouseout', () => {
        hoverImage.src = originalSrc;
    });

    // Click Counter
    const clickCountSpan = document.getElementById('clickCount');
    let clickCount = 0;

    hoverImage.addEventListener('click', () => {
        clickCount++;
        clickCountSpan.textContent = clickCount;
    });
}


// Gallery Filter Buttons
const filterButtons = document.querySelectorAll('.filter-buttons button');
const galleryItemsFiltered = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.id.replace('Btn', '');
        
        galleryItemsFiltered.forEach(item => {
            // Only hide/show items that have a data-color attribute
            if (item.hasAttribute('data-color')) {
                 if (filter === 'all' || item.dataset.color === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            } else if (filter === 'all') {
                // Keep non-data-color items visible if showing all
                 item.style.display = 'block'; 
            }
           
        });
    });
});
