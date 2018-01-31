window.addEventListener('load', function() {
    var $button = document.querySelector('.open button');
    var $opening = document.querySelector('.opening');
    var $footer = document.querySelector('.footer');
    var $open = document.querySelector('.open');
    var $content = document.querySelector('.content');

    $button.addEventListener('click', function() {
        if ($opening.style.display === '') {
            $opening.style.display = 'block';
        } else {
            $opening.style.display = '';
        }

        if ($footer.style.bottom === '') {
            $footer.style.bottom = '129px';
        } else {
            $footer.style.bottom = '';
        }

        if ($button.innerText === 'Maximize') {
            $button.innerText = 'Minimize';
        } else {
            $button.innerText = 'Maximize';
        }

        if ($open.style.background === 'url("images/23.gif") 64px 0 no-repeat') {
            $open.style.background = 'url("images/36.gif") 64px 0 no-repeat';
        } else {
            $open.style.background = 'url("images/23.gif") 64px 0 no-repeat';
        }

        if ($content.style.marginBottom === '') {
            $content.style.marginBottom = '170px'
        } else {
            $content.style.marginBottom = "";
        }
    });
});