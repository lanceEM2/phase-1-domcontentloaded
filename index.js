// Your code goes here

document.addEventListener("DOMContentLoaded", function (e) {
    console.log("The DOM has loaded");
    const text = document.getElementById('text');
    text.textContent = "This is really cool!";
    console.log(text);
});
