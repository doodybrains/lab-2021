// console.log("my js is working!!!!!");

// get all elements that have class name of bubble container
var allBubbleContainers = document.getElementsByTagName("bubble-container");

// console.log(allBubbleContainers);

// add a click, mouseenter, mouseover handler to each bubble container 
Array.from(allBubbleContainers).forEach(function(bubble) {
  bubble.addEventListener("click", event => {
    console.log("click is working");
    bubble.classList.add("show-emoji");
  })
})
// when the user clicks on A bubble container, show the emoji thats closest to it

