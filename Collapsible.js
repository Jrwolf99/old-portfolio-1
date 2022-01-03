
/**
 * provide functionality for the collapsible content.
 */

//select the collapsible div.
var Collapsible = document.getElementsByClassName("collapsible");


//make a for loop that iterates as many times as there
//are divs with the .collapsible class. This way, all drop downs
//are accounted for and have functionality.

//make toggle value for the dropdown icon.
var toggle = false;
for (var i = 0; i < Collapsible.length; i++) {
    //listen for a click on the div, and on click,
    // change maxHeight to fit the content div that
    //is the .collapsible div's neighbor. 
    Collapsible[i].addEventListener("click", function () {

        var iconDiv = this.children[0];
        iconDiv.classList.toggle("toggle");

        //grab the ".content" div next to the ".collapsible" div.
        var content = this.nextElementSibling;
        //if the maxHeight is set, then make it not set on click.

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            return;
        }

        //set the max height to fit all of the content.
        content.style.maxHeight = content.scrollHeight + "px";


    });
}
