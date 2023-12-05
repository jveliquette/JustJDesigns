// This event listener waits for the DOM (Document Object Model) to be fully loaded before executing its code.
document.addEventListener("DOMContentLoaded", function () {

    // Selects all elements with the class "clickable-image"
    const clickableImages = document.querySelectorAll(".clickable-image");

    // Selects an element with the ID "image-modal" (The modal that will display a larger version of the clicked image.)
    const modal = document.getElementById("image-modal");

    // Selects an element with the ID "modal-image" (The image container inside the modal where the larger image will be displayed.)
    const modalImage = document.getElementById("modal-image");

    // Iterates through each clickable image and attaches click listener
    clickableImages.forEach(function (image) {
        image.addEventListener("click", function () {

            // when clickable image is clicked, this is executed
            // sets display to "block" making the modal visible
            // sets src to the src of the clicked image
            modal.style.display = "block";
            modalImage.src = this.src;
        });
    });
});

// Selects the modal element and sets display to none (hides the modal when called)
function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
