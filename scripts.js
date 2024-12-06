/*
enlargeImage function takes image as a parameter. 
It initializes the constant lightbox, which is set to the id lightbox.
lightboxImg is initialized to the id lightbox-img.
Changes the style of lightbox to block to show (it is initially set to display:none).
Sets lightboxImg to link to the image path
*/
function enlargeImage(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = image.src;
}

/*
The closeLightbox function doesn't take any parameters.
It will get the lightbox id element and changes it to display:none.
The function is activated on click, which triggers
*/
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
/* Initials:
    ______ .    .
       |   |\  /|
       |   | \/ |
       |   |    |
    |__|   |    |

*/