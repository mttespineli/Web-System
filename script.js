// This is the code for your main image modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeModalBtn = document.querySelector('.close');

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

// This is the code for the "Change Heading Color" button
const heading = document.querySelector('h1');
const changeColorBtn = document.getElementById('changeColorBtn');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];
let currentColorIndex = 0;

changeColorBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    heading.style.color = colors[currentColorIndex];
});

// This is the code for the "Toggle Car Fact" button
const carFact = document.getElementById('carFact');
const toggleFactBtn = document.getElementById('toggleFactBtn');

toggleFactBtn.addEventListener('click', () => {
    if (carFact.style.display === 'none') {
        carFact.style.display = 'block';
    } else {
        carFact.style.display = 'none';
    }
});

// This is the code for the Image Hover and Click Counter
const hoverImage = document.getElementById('hoverImage');
if (hoverImage) { // Check if the element exists before trying to use it
    const originalSrc = hoverImage.src;
    const newSrc = 'https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2024/11/New-Bayside-Blue-Custom-R34-GT-R-by-Built-By-Legends-1-1024x683.jpg';

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

// This is the code for the Gallery Filter Buttons
const filterButtons = document.querySelectorAll('.filter-buttons button');
const galleryItemsFiltered = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.id.replace('Btn', '');
        
        galleryItemsFiltered.forEach(item => {
            if (filter === 'all' || item.dataset.color === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
