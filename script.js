document.addEventListener("DOMContentLoaded", function(){

    var chairs = document.getElementsByClassName("chair");

    for (var i=0; i<chairs.length; i++) {
        chairs[i].addEventListener("mouseenter", function() {
            this.style.display = "none";
        });
    }

    for (var i=0; i<chairs.length; i++) {
        chairs[i].addEventListener("mouseleave", function() {
            this.style.display = "block";
        });
    }



// SLIDER

    var buttonNext = document.querySelector('.buttonNext');
    var buttonPrev = document.querySelector('.buttonPrev');
    var listElements = document.querySelectorAll('section.banner li');
    var current = 0;

    var pictureIndex = [];
    for (var i=0; i<listElements.length; i++) {
        pictureIndex.push(listElements[i]);
    }

// 3

    listElements[current].classList.add("visible");

// 4

    buttonNext.addEventListener('click', function(){
        listElements[current].classList.remove("visible");

        if (current < listElements.length-1) {
            current++;
        } else {
            current = 0;
        }

        listElements[current].classList.add("visible");

    })

    buttonPrev.addEventListener('click', function(){
        listElements[current].classList.remove("visible");

        if (current > 0) {
            current--;
        } else {
            current = listElements.length-1;
        }

        listElements[current].classList.add("visible");

    })



});