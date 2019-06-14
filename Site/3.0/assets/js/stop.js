var stopIcon = L.icon({
    iconUrl: 'assets/img/stops/stoppoint.png',
    iconAnchor:   [14, 17]
});

function add_marker(id, lat, lng, map, name) {
    var id = L.marker([lat, lng], {icon: stopIcon}).addTo(map);
    id.bindPopup(name);
  }

function set_stops(map){
  var stopMarkers = [
  {lat: -1.464255, lng: -48.444712, fullname: "Espaço Inovação"},
  {lat: -1.469727, lng: -48.446557, fullname: "Betina"},
  {lat: -1.472745, lng: -48.451378, fullname: "Portão 03 (Volta)"},
  {lat: -1.472965, lng: -48.451668, fullname: "Portão 03 (Ida)"},
  {lat: -1.476600, lng: -48.454826, fullname: "Vadião"},
  {lat: -1.474466, lng: -48.455782, fullname: "ICEN"},
  {lat: -1.473141, lng: -48.455911, fullname: "Ginasio"},
  {lat: -1.475790, lng: -48.455654, fullname: "Reitoria e Biblioteca"},
  {lat: -1.476433, lng: -48.454813, fullname: "Reitoria"},
  {lat: -1.475053, lng: -48.458483, fullname: "RU e Instituto de Geociência"},
  {lat: -1.473459, lng: -48.458701, fullname: ""},
  {lat: -1.472336, lng: -48.457703, fullname: ""}, 
  {lat: -1.474918, lng: -48.454406, fullname: "PGITEC"},
  {lat: -1.474969, lng: -48.454264, fullname: "PGITEC"},
  {lat: -1.477671, lng: -48.456557, fullname: ""},
  {lat: -1.477092, lng: -48.458086, fullname: ""},
  {lat: -1.473297, lng: -48.453620, fullname: "Dona Gina"},
  {lat: -1.472667, lng: -48.448853, fullname: ""},
  {lat: -1.471116, lng: -48.448037, fullname: "Odontologia e Laboratorio de Analises Clinicas"},
  {lat: -1.470950, lng: -48.447908, fullname: "Odontologia e Laboratorio de Analises Clinicas"},
  {lat: -1.470126, lng: -48.446759, fullname: "Nutricao e Betina"},
  {lat: -1.467505, lng: -48.447569, fullname: "Portão 04"},
  {lat: -1.467192, lng: -48.446933, fullname: "Portão 04"},
  {lat: -1.468420, lng: -48.448159, fullname: "Biomedicina"},
  {lat: -1.468937, lng: -48.448218, fullname: ""},
  {lat: -1.463631, lng: -48.444562, fullname: "PCT"},
  {lat: -1.463215, lng: -48.444622, fullname: "PCT"},
  {lat: -1.461523, lng: -48.442213, fullname: "Instituto de Pesquisas Espaciais"}
  ];

  var len = stopMarkers.length;
  for(var i = 0; i < len; i++) {
    add_marker(i, stopMarkers[i].lat, stopMarkers[i].lng, map, stopMarkers[i].fullname); 
  }
}