var acc = document.getElementsByClassName("img__tile--primary");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

$(function () { // $(document).ready shorthand
    $('.monster').fadeIn('slow');
});

$(document).ready(function () {
    $(window).scroll(function () {
        console.log('moose');
        $('.reveal').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 1500);
            }
        });
    });

    //     const word1 = document.getElementById('introWord1');
    //     const word2 = document.getElementById('introWord2');
    //     const word3 = document.getElementById('introWord3');
    //     const word4 = document.getElementById('introWord4');
    //     const word5 = document.getElementById('introWord5');
    //     const word6 = document.getElementById('introWord6');

    //     var wordList = [word1, word2, word3, word4, word5, word6];

    //  wordList.forEach(function (word) {
    //      setInterval
    //         word.style.opacity = 1;
    //     });


    var count = 0;
    var maxDelay = 5500;
    var minSpeed = 1500;
    var maxSpeed = 1000;
    var fadeTo = 1;

    $('.peepThis').each(function () {
        console.log('weeeeoooo');
        var delay = Math.ceil(Math.random() * maxDelay);
        var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
        count++;
        $(this).delay(delay).fadeTo(speed, fadeTo, function () {
            count--;
            if (count == 0) {
                onFinish();
            }
        });
    });

    function onFinish() {}



});