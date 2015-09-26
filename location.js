function initAutocomplete() {
  var autocomplete = new google.maps.places.Autocomplete(document
    .getElementById('autocomplete'));
  google.maps.event.addListener(autocomplete, 'locationField', geolocate());
}

  
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(position.coords
        .latitude,position.coords.longitude);
      autocomplete.setBounds(new google.maps
        .LatLngBounds(geolocation, geolocation));
    });
  }
}
