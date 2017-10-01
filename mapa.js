function mapa() {

		var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

		var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr, maxZoom: 17, minZoom: 14.0}),
			darkscale   = L.tileLayer(mbUrl, {id: 'mapbox.dark', attribution: mbAttr, maxZoom: 17, minZoom: 14.0}),
			streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr, maxZoom: 17, minZoom: 14.0});

		var map = L.map('map', {
			center: [37.222563, -3.691218],
			zoom: 14.2,
			layers: [streets]
		});

		var baseLayers = {
			"Mapa gris": grayscale,
			"Mapa negro": darkscale,
			"Mapa callejero": streets
		};

		L.control.layers(baseLayers).addTo(map);
		map.dragging.disable();
	}

