// Initialize and add the map
function initMap() {
  // The location of Cairo
  var cairo = {lat: 30.044420, lng: 31.235712};
  // The map, centered at Cairo
  var map = new google.maps.Map(
      document.querySelector(".map"), {zoom: 4, center: cairo});
  // The marker, positioned at Cairo
  var marker = new google.maps.Marker({position: cairo, map: map});
}



// navbar Opacity

window.addEventListener("scroll", function() {
  if(window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});


