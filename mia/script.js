function toggleDoor() {
  console.log("toggle");
    var myDoor = document.getElementsByClassName('door');
    console.log(myDoor);
    var displaySetting = myDoor[0].style.display;
    var doorButton = document.getElementById('doorButton');

    if (displaySetting == 'block'){
        myDoor[0].style.display = 'none';
        doorButton.innerHTML = 'Show door';
    }
    else{
        myDoor[0].style.display = 'block';
        doorButton.innerHTML = 'Hide door';
    }
}