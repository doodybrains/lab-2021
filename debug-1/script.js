// here i added a console log just to make sure my javascript file is connected to my HTML file
console.log("my js is working!!!!!");

// this line get all elements that have class name of bubble container


function putBubblesEverywhere() {
  let allBubbleContainers = document.querySelectorAll(".bubble");
  // this line uses the allBubbleContainers variable and attaches a forEach function to it. a forEach function is a way to go through EACH of the bubble container elements on my page. in this example ive pushed in the variable bubble so that i can use it to do stuff to EACH bubble container inside the function
  allBubbleContainers.forEach(function(bubble) {
    let randomHorizontalPosition = Math.floor(Math.random() * window.innerWidth);
    let randomVerticalPosition = Math.floor(Math.random() * window.innerHeight);
    bubble.style.top = randomVerticalPosition + "px";
    bubble.style.left = randomHorizontalPosition + "px";
    // this line uses the bubble variable and adds an event listener, an event listener is a javascript function that listens for user interactions! in this case the interaction is a CLICK
    bubble.addEventListener("click", event => {
      // here i wrote a console log to make sure the event actuallly works when i click on a bubble
      console.log("click is working");
      // here i am adding the class name of .show-emoji, which i have also defined in my css files! 
      bubble.classList.add("hide");
    })
  })
}



document.addEventListener('keydown', addBubble);

function addBubble(event) {
  console.log(event);
  if (event.key === "b") {
    let newBubble = document.createElement("div");
    newBubble.classList.add("bubble");
    document.body.appendChild(newBubble);
    putBubblesEverywhere();
  }
}


putBubblesEverywhere();