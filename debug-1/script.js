// console.log("my js is working!!!!!");

// this line get all elements that have class name of bubble container
var allBubbleContainers = document.querySelectorAll("bubble-container");

// this line uses the allBubbleContainers variable and attaches a forEach function to it. a forEach function is a way to go through EACH of the bubble container elements on my page. in this example ive pushed in the variable bubble so that i can use it to do stuff to EACH bubble container inside the function
allBubbleContainers.forEach(function(bubble) {
  // this line uses the bubble variable and adds an event listener, an event listener is a javascript function that listens for user interactions! in this case the interaction is a CLICK
  bubble.addEventListener("click", event => {
    // here i wrote a console log to make sure the event actuallly works when i click on a bubble
    console.log("click is working");
    // here i am adding the class name of .show-emoji, which i have also defined in my css files! 
    bubble.classList.add("show-emoji");
  })
})


