var gallery = document.querySelectorAll(".gallery .image");
var previewImage = document.querySelector(".preview");
var imagePreview = previewImage.querySelector(".photo");
var closePreview = document.querySelector(".icon");
var backScroll = document.querySelector(".back-scroll");
var nextScroll = document.querySelector(".next-scroll");
var currentImage = document.querySelector(".curreentImg");
var totalImage = document.querySelector(".total-img");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImage.textContent = gallery.length;
    gallery[i].onclick = () => {
      console.log(i);

      function preview() {
        currentImage.textContent = i + 1;
        var selectedImage = gallery[i].querySelector("img").src;
        imagePreview.src = selectedImage;
      }

      backScroll.onclick = () => {
        i--;
        if (i === 0) {
          preview();
          backScroll.style.display = "none";
        } else {
          preview();
          nextScroll.style.display = "block";
        }
      };

      nextScroll.onclick = () => {
        i++;
        if (i >= gallery.length) {
          nextScroll.style.display = "none";
          preview();
        } else {
          preview();
          backScroll.style.display = "block";
        }
      };

      preview();
      previewImage.classList.add("display");
    };

    closePreview.onclick = () => {
      previewImage.classList.remove("display");
    };
  }
};
