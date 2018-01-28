window.addEventListener('load', function() {
    var button = document.querySelector('.open button');
    var body = document.querySelector('.opening');

    button.addEventListener('click', function() {
        if (body.style.display === '') {
            body.style.display = 'block';
        } else {
            body.style.display = '';
        }

        var $footer = document.querySelector('.footer');
        if ($footer.style.bottom === '') {
            $footer.style.bottom = '129px';
        } else {
            $footer.style.bottom = '';
        }

    });
});