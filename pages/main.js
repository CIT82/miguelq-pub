// poster table image hover functionality
// ----------------------------------------
// get reference for the items whose class is fresno-concerts and save in variable images
const images = document.querySelectorAll('.fresno-concerts');

// ----- forEach method -----
images.forEach(image => {
  // Get the original image source
  const originalSrc = image.src; 
  // Construct the large image source
  const largeSrc = originalSrc.replace(/\.png$/, "_large.png"); 
  // mouseover event listener
  image.addEventListener('mouseover', () => {
    // Set the large image on hover
    image.src = largeSrc; 
  });
  // mouseout event listener
  image.addEventListener('mouseout', () => {
    // Revert to the original image on mouseout
    image.src = originalSrc; 
  });
});
// ----- forEach method -----

// ----------------------------------------

//console.log("Hello from external JS file");