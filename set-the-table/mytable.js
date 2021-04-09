// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below

// the next two lines are calling the Airtable API!!
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyejD5C7eO17ScML" }).base(
  "appCCf3pM1UCNZ4C7"
);

let allItems = [];
let allFoodItems = [];

base('my-dinner-table').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    allItems.push(item);
  });

  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }

  setTable(allItems);
});

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function setTable(allItems) {
  allItems.forEach(function(item) {
    let imageUrl = item.fields.images[0].url;
    let image = document.createElement('img');
    image.src = imageUrl;
    image.classList.add(item.fields.class_name);
    container.appendChild(image);

    if (item.fields.type === "food") {
      allFoodItems.push(item);
    }
  })
}

let showFoodButton = document.getElementById("show-food");
showFoodButton.addEventListener('click', showAllTheFood);

function showAllTheFood() {
  allFoodItems.forEach(function(foodItem) {
    let food = document.createElement('img');
    food.src = foodItem.fields.images[0].url;
    food.classList.add(foodItem.fields.class_name);
    food.style.display = "block";
    container.appendChild(food);
  })
}