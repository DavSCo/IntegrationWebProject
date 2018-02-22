
document.querySelectorAll('.pad').forEach(image => {
    image.addEventListener('mouseover', function() {
    this.src = this.src.replace('Normal.png', 'Rouge.png');
});
image.addEventListener('mouseleave', function() {
    this.src = this.src.replace( 'Rouge.png','Normal.png');
});
});