// Get a reference to the download button
const downloadButton = document.getElementById('downloadButton');

// Define the photo file name
const photoFileName = 'img/cv.JPG';

// Function to handle the button click event
downloadButton.addEventListener('click', () => {
    // Create a virtual anchor element
    const link = document.createElement('a');
    link.href = photoFileName;

    // Set the download attribute and the file name
    link.setAttribute('download', photoFileName);

    // Trigger a click event on the anchor element
    link.click();

    // Clean up the virtual anchor element
    link.remove();
});