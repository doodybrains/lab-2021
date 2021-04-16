// here i added a console log just to make sure my javascript file is connected to my HTML file
console.log("my js is working!!!!!");

// here i have written a new function, i called it putBubblesEverywhere
function putBubblesEverywhere() {
  // this line get all elements that have class name of bubble container
  let allBubbleContainers = document.querySelectorAll(".bubble");
  // this line uses the allBubbleContainers variable and attaches a forEach function to it. a forEach function is a way to go through EACH of the bubble container elements on my page. in this example ive pushed in the variable bubble so that i can use it to do stuff to EACH bubble container inside the function
  allBubbleContainers.forEach(function(bubble) {
    // here I am getting a random number between 0 and the width of the window
    let randomHorizontalPosition = Math.floor(Math.random() * window.innerWidth);
    // here I am getting a random number between 0 and the height of the window
    let randomVerticalPosition = Math.floor(Math.random() * window.innerHeight);
    // here i am setting the top value of each bubble to the random vertical position and adding px!
    bubble.style.top = randomVerticalPosition + "px";
    // here i am setting the top value of each bubble to the random horizontal position and adding px!
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


//we will do these comments in class together!
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