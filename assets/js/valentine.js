var imageShowingFlag = false;

function toggleImages() {
  if (imageShowingFlag === false) {
    $(".hidden-img").css("opacity", "1");
    imageShowingFlag = true;
  } else {
    $(".hidden-img").css("opacity", "");
    imageShowingFlag = false;
  }
}

$("#hide-btn").on("click", function() {
  toggleImages();
});