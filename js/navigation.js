var navigationOpenElement = document.getElementById('openNavigation');

if (navigationOpenElement) {
    var headerElement = document.getElementsByTagName('header')[0];
    var bodyElement = document.getElementsByTagName('body')[0];
    var navigationOpenStatus = false;
    var openNavigationFunction = function () {
        navigationOpenStatus = ! navigationOpenStatus;
        if (navigationOpenStatus) {
            headerElement.style.transform = "translate(0,calc(100vh - 5vmax))";
            bodyElement.style.overflow = "hidden"; // disable scrolling
        } else {
            headerElement.style.transform = "none";
            bodyElement.style.overflow = "initial"; // enable scrolling
        }
    };

    navigationOpenElement.addEventListener('click',openNavigationFunction);
}
