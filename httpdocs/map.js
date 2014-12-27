function Map() {
  this.map;
  
  this.init = function(id){
    document.getElementById(id).innerHTML+='<div id="map_canvas" style="width:100%";height:100%"></div>'
    
    var mapOptions = {
      center: new google.maps.LatLng(56.347156,43.931966),
      zoom:13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
    this.map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: this.map,
      title: "Your position"
    });
  };
  
  this.setMyPosition = function(zoom) {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          
          var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
        });
      }
      else
      {
        alert("Please switch on geopositioning...");
      }
  }
};
