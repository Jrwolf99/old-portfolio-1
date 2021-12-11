


//provide functionality for the collapsible content

console.log("TEST!");
var Collapsible = document.getElementsByClassName("collapsible");
var i;

for (i=0; i<Collapsible.length; i++) {
    Collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.maxHeight) {
            content.style.maxHeight = null;
            return;
        }
        content.style.maxHeight = content.scrollHeight + "px";
    });
}