
    let myMap;
    let canvas;
    const mappa = new Mappa('Leaflet');
    const options = {
      lat: 49.263463,
      lng: -123.251137,
      zoom: 2.5,
      style: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
}


    // p5.js setup
    function setup(){
      // Create a canvas 640x640
      canvas = createCanvas(640,640);
      // Add a grey background
      //background(100);

      myMap = mappa.tileMap(options);
      // Overlay the canvas over the tile map
      myMap.overlay(canvas);

      //Load the data
      meteorites = loadTable('Meteor-Landings.csv', 'csv', 'header');

      // add color to the ellipse
      fill(117, 73, 41)

      myMap.onChange(drawMeteorites);

    }

    // p5.js draw
function draw(){
}

function drawMeteorites() {
  // Clear the canvas
  clear();

  for (let i = 0; i < meteorites.getRowCount(); i++) {
    // Get the lat/lng of each meteorite
    const latitude = Number(meteorites.getString(i, 'reclat'));
    const longitude = Number(meteorites.getString(i, 'reclong'));

    // Only draw them if the position is inside the current map bounds. We use a
    // Leaflet method to check if the lat and lng are contain inside the current
    // map. This way we draw just what we are going to see and not everything. See
    // getBounds() in http://leafletjs.com/reference-1.1.0.html
    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      // Transform lat/lng to pixel position
      const pos = myMap.latLngToPixel(latitude, longitude);
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
      let size = meteorites.getString(i, 'mass (g)');
      size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
      fill(117, 73, 41);
      ellipse(pos.x, pos.y, size, size);
    }
  }

}

