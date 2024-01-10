window.addEventListener('scroll', function () {
    var elements = document.querySelectorAll('.avatar1');
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var spinningEarthContainer = document.getElementById("spinningEarthContainer");
        var bounding = spinningEarthContainer.getBoundingClientRect();

        if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
            spinningEarthContainer.classList.add("rotate");
        } else {
            spinningEarthContainer.classList.remove("rotate");
        }
    });
});
