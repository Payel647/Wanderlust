      maptilersdk.config.apiKey = 'RM3PWgtcZuQZY3UpiQJC';
      const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`<h4>${listing.title}</h4><p>Exact location provided after booking !!</p>`);
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: "basic-v2",
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      const marker = new maptilersdk.Marker()
  .setLngLat( listing.geometry.coordinates) // longitude, latitude of the marker
  .setPopup(popup) 
  .addTo(map);
