var button = document.querySelector('.open button');
var body = document.querySelector('.opening');
button.addEventListener('click', function() {
    if (body.style.display === '') {
        body.style.display = 'block';
    } else {
        body.style.display = '';
    }
});
