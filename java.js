
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const galleryItems = document.querySelectorAll('.gallery-item img');
const closeModalBtn = document.querySelector('.close');
const hoverImage = document.getElementById('hoverImage');

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


if (hoverImage) {
    const originalSrc = hoverImage.src;
    const newSrc = 'https://images.unsplash.com/photo-1627582522774-325b57f0709b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTI3MDV8MHwxfHNlYXJjaHw0fHJOaXNzYW4lMjBHVC1SJTJCUjM0fGVufDB8fHx8MTY3ODg1MTE0MHww&lib=rb-4.0.3&q=80&w=1080';

    hoverImage.addEventListener('mouseover', () => {
        hoverImage.src = newSrc;
    });

    hoverImage.addEventListener('mouseout', () => {
        hoverImage.src = originalSrc;
    });

  
    
}


const filterButtons = document.querySelectorAll('.filter-buttons button');
const galleryItemsFiltered = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.id.replace('Btn', '');
        
        galleryItemsFiltered.forEach(item => {
        
            if (item.hasAttribute('data-color')) {
                 if (filter === 'all' || item.dataset.color === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            } else if (filter === 'all') {
               
                 item.style.display = 'block'; 
            }
           
        });
    });
});

