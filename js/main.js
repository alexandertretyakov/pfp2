window.addEventListener('load', function() {
    var $wishlist = document.querySelector('.wishlist');
    var $wishlistToggle = document.querySelector('.wishlist-toggle');
    var $page = document.querySelector('.page');

    $wishlistToggle.addEventListener('click', function() {
        $wishlist.classList.toggle('open');
        $page.classList.toggle('page--wishlist-open');

        // wishlist toggle
        var wishlistToggleInnerText = $wishlistToggle.innerText;
        $wishlistToggle.innerText = $wishlistToggle.dataset.toggleText;
        $wishlistToggle.dataset.toggleText = wishlistToggleInnerText;
    });
});