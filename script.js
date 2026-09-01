
function openCertModal(imagePath) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    modalImg.src = imagePath;
    modal.style.display = 'flex'; // Opens the modal
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none'; // Closes the modal
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};