// JavaScript to randomly change the background image every 15 seconds with a fade
document.addEventListener("DOMContentLoaded", function () {
    const photosCount = 10; // Number of images in the folder
    const photosPath = "./img/photos/"; // Path to the images
    const extension = ".JPEG"; // Image extension
    const root = document.documentElement; // Target the html element

    let currentImageIndex = -1; // To track the current image index

    // Function to generate a random image index, avoiding repeats
    function getRandomImageIndex() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * photosCount) + 1;
        } while (newIndex === currentImageIndex);
        currentImageIndex = newIndex;
        return newIndex;
    }

    // Function to update the background with a fade effect
    function updateBackground() {
        const newImage = `${photosPath}${String(getRandomImageIndex()).padStart(3, "0")}${extension}`;
        root.style.transition = "background-image 1s ease-in-out";
        root.style.backgroundImage = `url('${newImage}')`;
    }

    // Initial call and setup for repeated changes
    updateBackground();
    setInterval(updateBackground, 15000);
});
