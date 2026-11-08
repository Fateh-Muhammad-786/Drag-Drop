let lists = document.getElementsByClassName("list");

let rightBox = document.getElementById("right");

let leftBox = document.getElementById("left");

let selected = null;

// Har item par dragstart event

for (let list of lists) {

    list.addEventListener("dragstart", function(e) {

        selected = e.target;

    });

}

// Right Box

rightBox.addEventListener("dragover", function(e) {

    e.preventDefault();

});

rightBox.addEventListener("drop", function(e) {

    if (selected) {
        rightBox.appendChild(selected);
        selected = null;
    }

});

// Left Box

leftBox.addEventListener("dragover", function(e) {

    e.preventDefault();

});

leftBox.addEventListener("drop", function(e) {

    if (selected) {
        leftBox.appendChild(selected);
        selected = null;
    }

});



