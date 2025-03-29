      maptilersdk.config.apiKey = 'RM3PWgtcZuQZY3UpiQJC';
      const popup = new maptilersdk.Popup({ offset: 25 }).setText(
        'Construction on the Washington Monument began in 1848.'
    );
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: "basic-v2",
        center: [-77.0369, 38.9072] , // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      const marker = new maptilersdk.Marker()
  .setLngLat( [-77.0369, 38.9072]) // longitude, latitude of the marker
  .setPopup(popup) 
  .addTo(map);

