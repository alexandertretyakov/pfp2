window.addEventListener('load', function() {
    var button = document.querySelector('.open button');
    var body = document.querySelector('.opening');
    button.addEventListener('click', function() {
        if (body.style.display === '') {
            body.style.display = 'block';
        } else {
            body.style.display = '';
        }
    });

    button.addEventListener('click', function() {
        var el = document.querySelectorAll('.footer');
        if (el[0].style.bottom === '') {
            el[0].style.bottom = '129px';
        } else {el[0].style.bottom = ''}
    });
});