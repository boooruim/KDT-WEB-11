$('.main').css({
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center'

})
$('.img').css({
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'border-radius': '20%',
    'border-color': 'orange',
    'border-style': 'solid',
    'background-size': 'contain',
    'width': '300px',
    'height': '300px',
    'font-weight': 'bold',
    'font-size': '60px'

});
$('.highlight').css({
    'display': 'flex',
    'flex-direction': 'row',
    'background-color': 'yellow'
})
$('button').css({

    'background-color': 'black',
    'color': 'white'
});


function apple() {
    $('.img').empty();
    $('.img').css('background-image', "url('https://www.collinsdictionary.com/images/full/apple_158989157.jpg')");
}
function banana() {
    $('.img').empty();
    $('.img').css('background-image', "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg')");
}
function grape() {
    $('.img').empty();
    $('.img').css('background-image', "url('https://www.collinsdictionary.com/images/full/grape_229112122.jpg')")
}
function peach() {
    $('.img').empty();
    $('.img').css('background-image', "url('https://familytreefarms.com/wp-content/uploads/2021/03/PeachWhite.jpg')")
}