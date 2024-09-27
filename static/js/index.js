window.HELP_IMPROVE_VIDEOJS = false;

// var SHAPE_INTERP_BASE = "static/data/shape_interpolation";
// var POSE_INTERP_BASE = "static/data/pose_interpolation";
// var NUM_SHAPE_INTERP_FRAMES_SHAE_TO_REGINA = 61;
// var NUM_SHAPE_INTERP_FRAMES_SUZIE_TO_RACER = 61;
// var NUM_POSE_INTERP_FRAMES_ADAM = 121;
// var NUM_POSE_INTERP_FRAMES_SWATGUY = 121;

// var interp_shape_images_shae_to_regina = [];
// var interp_shape_images_suzie_to_racer = [];
// var interp_pose_images_adam = [];
// var interp_pose_images_swatguy = [];

var INTERP_BASE = "static/images/interpolate";
var NUM_INTERP = 20;
var interp_nerf_lego = [];
var interp_nerf_chair = [];

function preloadInterpolationImages() {
    // refdirs
    for (var i = 0; i < NUM_INTERP; i++) {
        var path = INTERP_BASE + '/refdirs/' + String(i).padStart(2, '0') + '.png';
        interp_nerf_lego[i] = new Image();
        interp_nerf_lego[i].src = path;
    }

}



// SHAPE - shape to regina
function setInterpolationRefdirs(i) {
    var image = interp_nerf_lego[i];
    image.ondragstart = function() { return false; };
    image.oncontextmenu = function() { return false; };
    $('#interpolation-image-wrapper-refdirs').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for (var i = 0; i < carousels.length; i++) {
        // Add listener to  event
        carousels[i].on('before:show', state => {
            console.log(state);
        });
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
        // bulmaCarousel instance is available as element.bulmaCarousel
        element.bulmaCarousel.on('before-show', function(state) {
            console.log(state);
        });
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    // SHAPE - shape to regina
    $('#interpolation-slider-refdirs').on('input', function(event) {
        setInterpolationRefdirs(this.value);
    });
    setInterpolationRefdirs(0);
    $('#interpolation-slider-refdirs').prop('max', NUM_INTERP - 1);

    bulmaSlider.attach();

})