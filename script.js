window.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.img-fluid');

    function animateElements() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            element.classList.add('visible');
        }
    }

    function isElementInView(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.left >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkElementsInView() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (isElementInView(element)) {
                animateElements();
                return;
            }
        }
    }

    window.addEventListener('scroll', checkElementsInView);
    checkElementsInView();
});
