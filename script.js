document.addEventListener("DOMContentLoaded", function(){

    var chairs = document.getElementsByClassName("chair");

    for (var i=0; i<chairs.length; i++) {
        chairs[i].addEventListener("mouseenter", function() {
            this.style.display = "none";
        });
    }

    // for (var i=0; i<chairs.length; i++) {
    //     chairs[i].addEventListener("mouseleave", function() {
    //         this.style.display = "block";
    //     });
    // }

    var info1 = document.querySelector(".info1");
    var info2 = document.querySelector(".info2");

    info1.addEventListener("mouseleave", function(){
        for (var i=0; i<chairs.length; i++) {
            chairs[i].style.display = "block";
        }
    })

    info2.addEventListener("mouseleave", function(){
        for (var i=0; i<chairs.length; i++) {
            chairs[i].style.display = "block";
        }
    })



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

// CALCULATOR

    var dropdown = document.querySelectorAll('.drop_down_list');
    var liEl = document.querySelectorAll('.list_panel > li');
    var counter = 0;
    var sum = document.querySelector('.sum');

    var title = document.querySelector('.panel_left .title');
    var color = document.querySelector('.panel_left .color');
    var pattern = document.querySelector('.panel_left .pattern');
    var titleValue = document.querySelector('.panel_right .title.value');
    var colorValue = document.querySelector('.panel_right .color.value');
    var patternValue = document.querySelector('.panel_right .pattern.value');

    var transportInput = document.querySelector('.checkbox input');
    var transport = document.querySelector('.panel_left .transport');
    var transportValue = document.querySelector('.panel_right .transport.value');



    dropdown.forEach(function (el) {
        el.addEventListener('click', function () {
            if (this.children) {
                this.lastElementChild.classList.toggle("block");
            }
        });
    });

    liEl.forEach(function (el) {
        function calc(name, value) {
            name.innerText = el.innerText;
            value.innerText = el.dataset.price + "zł";
            counter += parseInt(el.dataset.price);
            sum.innerText = counter + "zł";
        };

        el.addEventListener('click', function () {
            var label = this.parentElement.parentElement.firstElementChild;
            label.innerText = el.innerText;
            label.style.color = "black";
            if (this.parentElement.parentElement === dropdown[0]) {
                calc(title, titleValue);
            } else if (this.parentElement.parentElement === dropdown[1]) {
                calc(color, colorValue);
            } else if (this.parentElement.parentElement === dropdown[2]) {
                calc(pattern, patternValue);
            }
        });
    });

    transportInput.addEventListener("click", function () {
        if (transportInput.checked === true) {
            transport.innerText = "Transport";
            transportValue.innerText = transportInput.dataset.transportPrice + "zł";
            counter += parseInt(transportInput.dataset.transportPrice);
        }
        else {
            transport.innerText = "";
            transportValue.innerText = "";
            counter -= parseInt(transportInput.dataset.transportPrice);
        }
        sum.innerText = counter + "zł";
    });



});