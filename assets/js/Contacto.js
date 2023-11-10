function initMap() {
    var geocoder = new google.maps.Geocoder();
    var address = "713 Cl. 20A Sur";
  
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === 'OK') {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
  
        var myLatLng = { lat: latitude, lng: longitude };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: myLatLng
        });
  
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: address
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  