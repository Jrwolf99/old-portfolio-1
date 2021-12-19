
/**
 * provide functionality for the collapsible content.
 */

//select the collapsible div.
var Collapsible = document.getElementsByClassName("collapsible");
//make a for loop that iterates as many times as there
//are divs with the .collapsible class. This way, all drop downs
//are accounted for and have functionality.
for (var i = 0; i < Collapsible.length; i++) {



    //listen for a click on the div, and on click,
    // change maxHeight to fit the content div that
    //is the .collapsible div's neighbor. 
    Collapsible[i].addEventListener("click", function () {

        var iconDiv = this.children[0];

        //grab the ".content" div next to the ".collapsible" div.
        var content = this.nextElementSibling;
        //if the maxHeight is set, then make it not set on click.
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            rotateElement(iconDiv);
            console.log(iconDiv.style.transform)

            return;
        }
        //set the max height to fit all of the content.
        content.style.maxHeight = content.scrollHeight + "px";
        iconDiv.style.transform = 'rotate(0deg)';


        rotateElement(iconDiv);



    });
}


const rotateElement = function (iconDiv) {
    if (iconDiv.style.transform == 'rotate(180deg)')
        iconDiv.style.transform = 'rotate(0deg)';

    console.log(iconDiv.style.transform)
    // iconDiv.style.transform = 'rotate(0deg)';
    // var currState = getTransformValue(iconDiv.style.transform.toString());
    iconDiv.style.transform = 'rotate(180deg)';


};

// const getTransformValue = function (myString) {
//     console.log(myString);
//     let startIndex;
//     let endIndex;

//     startIndex = myString.indexOf("(", startIndex);
//     endIndex = myString.indexOf("d", endIndex);
//     myString = myString.substr
//     return myString;
// };
