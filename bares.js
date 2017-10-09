var BarIcon = L.icon({
    iconUrl: 'bar.png',
    iconSize:     [38, 50],
});
var bares = L.layerGroup();
	L.marker([37.221887, -3.693409],{icon: BarIcon}).bindPopup('Heladeria Granada').addTo(bares),
	L.marker([37.222229, -3.692545],{icon: BarIcon}).bindPopup('El rincón de Pepe el Güeno').addTo(bares),
	L.marker([37.222852, -3.691115],{icon: BarIcon}).bindPopup('Bar el Paseo').addTo(bares),
	L.marker([37.222981, -3.688257],{icon: BarIcon}).bindPopup('Bar Peña').addTo(bares),
	L.marker([37.223469, -3.683350],{icon: BarIcon}).bindPopup('Bar Leones Atarfe <p><b>Tapa estrella:</b> Patata boquerones fritos+ Tubo de cerveza<p><b>Precio:</b> 1.70€</p></p>').addTo(bares),
	L.marker([37.223598, -3.684000],{icon: BarIcon}).bindPopup('Bar El Caribe <p><b>Tapa estrella:</b> Patata asada casera + Tubo de cerveza<p><b>Precio:</b> 1.80€</p></p>').addTo(bares),
	L.marker([37.217277, -3.691403],{icon: BarIcon}).bindPopup('Bar La Estela <p><b>Tapa estrella:</b> Pinchito + Tubo de cerveza<p><b>Precio:</b> 2€</p></p>').addTo(bares);

	var overlays = {
		"Bares": bares
	};

	L.control.layers(baseLayers, overlays).addTo(map);
	map.dragging.disable();
	}

