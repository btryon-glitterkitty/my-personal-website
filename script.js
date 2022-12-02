
// creates "h2" element and adds some text
const h2 = document.createElement("h2");
h2.textContent = "Javascript added this, beleive it or not.";
// code to add the "h2" to the body element in the DOM
document.querySelector("body").appendChild(h2);

// After adding the "h2" to the DOM, Save this and switch over to index.html. To connect script.js to our HTML, we add a script tag inside body.
