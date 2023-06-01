function removeButton() {
    var button = document.getElementById("growButton");
    button.parentNode.removeChild(button);

    var textElement = document.getElementById("explanationText");
    textElement.textContent = "";

    var button = document.getElementById("shrinkButton");
    button.style.display = "block";

    infinitegrow();
}

/* This is a function which removes the text which explains the site and also the button to start the function to grow the text. It does this by removing the
button to start the function, then also removing the text before displaying the button to shrink the text before finally beginning the function to grow
the text. */

function infinitegrow(){
    var textElement = document.getElementById("growid");
    textElement.style.transition = "50s";
    textElement.style.fontSize = "1000px";
}

/* This function grows the text on the site 'infinitly'. To do this, it first gets the text in the site with the id of 'growid'. then it sets the transition
of this id to 50 seconds before then changing the text size to 1000px. this creates the effect of the text growing to a very large size of a very long time. */

function shrinkButtonClicked() {
    button.style.transition = "1s"
    button.style.fontSize = "25px"
            
    let randomNumber = Math.random();
  
    if(randomNumber > 0.3){
        shrinkText();
    } else if(randomNumber > 0.15){
        shrinkButtonSize();
    } else if(randomNumber > 0.05){
        moveButton();
    } else {
        growTitle();
    }
}

/* This function plays when the shrink button is clicked. it first resets the size of the shrink button so it is not small from a future function. Afterwards
the function generates a random number between 0 and 1 called randomNumber. the function then choses what function to run next determined off the number which
was generated. If the number is above 0.3 (70%) it runs the 'shrinkText' function. If it is between 0.3 and 0.15, (15%) it runs the 'shrinkButtonSize' function.
If it is between 0.15 and 0.05 (10%) it runs the 'moveButton' function. otherwise, it runs the 'growTitle' function being a 5% chance. */

function shrinkText(){
    var textElement = document.getElementById("growid");
    textElement.style.transition = "all 1s";
    textElement.style.fontSize = "20px";
    setTimeout(infinitegrow, 1000);

    moveButton();
}

/* This function reduces the text size with a transition to create the effect of it shrinking. It first gets the text on the site with the id of 'growid'. 
Then it sets the transition time to 1 second before changing the size to 20px. Afterwards, the function creates a 1 second timeout for the infintegrow function
before allowing it to restart. */

function shrinkButtonSize() {
    var button = document.getElementById("shrinkButton");
    button.style.transition = "1s"
    button.style.fontSize = "10px"
}

/* This function shrinks the size of the button which users click to shrink the text, rather than shrinking the text. First is locates the button with the id
'shrinkButton'. Then it sets the transition time to 1 second before changing the text size to 10 px, which shrinks the size of the buton. */

function moveButton() {
    var button = document.getElementById("shrinkButton");
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
  
    var maxLeft = pageWidth - buttonWidth;
    var maxTop = pageHeight - buttonHeight;
  
    var randomLeft = Math.floor(Math.random() * maxLeft);
    var randomTop = Math.floor(Math.random() * maxTop);
  
    button.style.left = randomLeft + "px";
    button.style.top = randomTop + "px";
}

/* This function is what randomly choses what position on the page the shrink button moves to. It first locates the button with the id 'shrinkButton'. It then
gathers information about the size of the webpage/window. Then it creates two variables being the max height and width of the window so that the button can
make sure it doesn't move outside the window. Afterwards, it sets the buttons position to a random position in both the x and y position on the page. */
  
var button = document.getElementById("shrinkButton");
button.addEventListener("click", moveButton);

/* This code here creates an acitive listener, listening to when the button is clicked to make sure that the 'movebutton' function runs when clicked. */


function growTitle() {
    var textElement = document.getElementById("title");
    textElement.style.transition = "1s";
    textElement.style.fontSize = "100px";
}

/* This is the last function being the function which enlarges the title's size. To do this, it locates the text element with the id of 'title'. Then it
sets the transisiton time to 1 second before setting the text-size to 100px. */