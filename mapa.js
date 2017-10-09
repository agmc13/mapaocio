var BusIcon = L.icon({
    iconUrl: 'bus.png',
    iconSize:     [38, 50],
});
var BarIcon = L.icon({
    iconUrl: 'bar.png',
    iconSize:     [38, 50],
});
var RestauranteIcon = L.icon({
    iconUrl: 'restaurante.png',
    iconSize:     [38, 50],
});
function mapa() {
		var locales = L.layerGroup();
		var bares = L.layerGroup();
		var autobus = L.layerGroup();
		L.marker([37.218915, -3.696368],{icon: RestauranteIcon}).bindPopup('Restaurante Casa Marino').addTo(locales),
		L.marker([37.218013, -3.700221],{icon: RestauranteIcon}).bindPopup('Restaurante Cortijo los Praos').addTo(locales),
		L.marker([37.212593, -3.687610],{icon: RestauranteIcon}).bindPopup('La Pará de Moradama').addTo(locales),
		L.marker([37.220175, -3.688643],{icon: RestauranteIcon}).bindPopup('El fogón de Rubén').addTo(locales),
		L.marker([37.218005, -3.692215],{icon: RestauranteIcon}).bindPopup('Pizzeria Santa Ana').addTo(locales),
		L.marker([37.228623, -3.684637],{icon: RestauranteIcon}).bindPopup('Asador de Pollos Avenida').addTo(locales),
		L.marker([37.223422, -3.683707],{icon: RestauranteIcon}).bindPopup('Mesón El Portón').addTo(locales),
		L.marker([37.221887, -3.693409],{icon: BarIcon}).bindPopup('Heladeria Granada').addTo(bares),
		L.marker([37.222229, -3.692545],{icon: BarIcon}).bindPopup('El rincón de Pepe el Güeno').addTo(bares),
		L.marker([37.222852, -3.691115],{icon: BarIcon}).bindPopup('Bar el Paseo').addTo(bares),
		L.marker([37.222981, -3.688257],{icon: BarIcon}).bindPopup('Bar Peña').addTo(bares),
		L.marker([37.223469, -3.683350],{icon: BarIcon}).bindPopup('Bar Leones Atarfe').addTo(bares),
		L.marker([37.223598, -3.684000],{icon: BarIcon}).bindPopup('Bar El Caribe <p><b>Tapa estrella:</b> Patata asada casera + tubo de cerveza<p><b>Precio:</b> 1.80€</p></p>').addTo(bares),
		L.marker([37.217277, -3.691403],{icon: BarIcon}).bindPopup('Bar La Estela <p><b>Tapa estrella:</b> Pinchito + Tubo de cerveza<p><b>Precio:</b> 2€</p></p>').addTo(bares),
		L.marker([37.224070, -3.681240],{icon: BusIcon}).bindPopup('Parada Autobus 112').addTo(autobus);
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

		var overlays = {
			"Restaurantes": locales,
			"Bares": bares,
			"Paradas de autobus": autobus
		};

		L.control.layers(baseLayers, overlays).addTo(map);
		map.dragging.disable();
	}

