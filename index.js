// Ensures the script runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Ensure this code runs only after the DOM is fully loaded
    var video = document.getElementById('background-video');
    if (video) { // Check if the element was found
        video.addEventListener('loadedmetadata', function() {
            this.play();
        });

        // So viewer can't Pause
        video.addEventListener('click', function(event) {
            event.preventDefault(); 
        });
    }

    let index = 0; // Current slide index
    const slides = document.querySelectorAll('.carousel-slide img'); // All slides
    const totalSlides = slides.length; // Total number of slides
    const nextButton = document.querySelector('.next'); // Next button
    const prevButton = document.querySelector('.prev'); // Previous button

    function updateCarousel() {
        // Assuming each slide takes up the full width of the carousel container
        const newTransformValue = -index * 100; // Calculate new transform value as a percentage
        document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}%)`; // Apply new transform
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            index = (index + 1) % totalSlides; // Increment index, loop back to 0 if at the last slide
            updateCarousel(); // Update carousel to new slide
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            index = (index - 1 + totalSlides) % totalSlides; // Decrement index, loop back to the last slide if at 0
            updateCarousel(); // Update carousel to new slide
        });
    }
});

