
let childElement = document.querySelectorAll(".image-container");




//Initial z-index value
let zIndex = 1;

let imageUrls = ["tt1.jpg", "tt2.jpg", "tt.jpg", "tt4.jpg","tt5.jpg" ,"tt.jpg"];

childElement.forEach((element, index) => {
  //Create an image element
  let img = document.createElement("img");
  img.setAttribute("src", imageUrls[index]);
  img.setAttribute("class", "image");
  element.appendChild(img);

  //Add a click event listener to each image container
  element.addEventListener("click", () => {
    zIndex++;
    element.style.right = "50em";
    element.style.zIndex = zIndex.toString();
    element.style.transform = "rotate(0deg)";

    element.style.transition = " right 0.3s ease";

    //Remomve the class and reset properties after a delay
    setTimeout(() => {
      zIndex -= 3;
      element.style.right = "";
      element.style.zIndex = zIndex.toString();
      element.style.transform = "";

      element.style.transition = "all 0.3s ease";

      //Clear the transition property after a slight delay
      setTimeout(() => {
        element.style.transition = "";
      }, 300);
    }, 1000);
  });
});