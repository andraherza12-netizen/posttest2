var wms_layers = [];

var format_kecamatan_genteng_ar_0 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_0 = format_kecamatan_genteng_ar_0.readFeatures(json_kecamatan_genteng_ar_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_0.addFeatures(features_kecamatan_genteng_ar_0);
var lyr_kecamatan_genteng_ar_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_0, 
                style: style_kecamatan_genteng_ar_0,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
    title: 'kecamatan_genteng_ar<br />\
    <img src="styles/legend/kecamatan_genteng_ar_0_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/kecamatan_genteng_ar_0_1.png" /> Genteng<br />\
    <img src="styles/legend/kecamatan_genteng_ar_0_2.png" /> Kapasari<br />\
    <img src="styles/legend/kecamatan_genteng_ar_0_3.png" /> Ketabang<br />\
    <img src="styles/legend/kecamatan_genteng_ar_0_4.png" /> Peneleh<br />' });
var format_akesebilitashaltegenteng_1 = new ol.format.GeoJSON();
var features_akesebilitashaltegenteng_1 = format_akesebilitashaltegenteng_1.readFeatures(json_akesebilitashaltegenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_akesebilitashaltegenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_akesebilitashaltegenteng_1.addFeatures(features_akesebilitashaltegenteng_1);
var lyr_akesebilitashaltegenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_akesebilitashaltegenteng_1, 
                style: style_akesebilitashaltegenteng_1,
                popuplayertitle: 'akesebilitas halte genteng',
                interactive: true,
                title: '<img src="styles/legend/akesebilitashaltegenteng_1.png" /> akesebilitas halte genteng'
            });
var format_kelurahanterjangkau_2 = new ol.format.GeoJSON();
var features_kelurahanterjangkau_2 = format_kelurahanterjangkau_2.readFeatures(json_kelurahanterjangkau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahanterjangkau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelurahanterjangkau_2.addFeatures(features_kelurahanterjangkau_2);
var lyr_kelurahanterjangkau_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelurahanterjangkau_2, 
                style: style_kelurahanterjangkau_2,
                popuplayertitle: 'kelurahan terjangkau',
                interactive: true,
                title: '<img src="styles/legend/kelurahanterjangkau_2.png" /> kelurahan terjangkau'
            });
var format_jalan_clean_3 = new ol.format.GeoJSON();
var features_jalan_clean_3 = format_jalan_clean_3.readFeatures(json_jalan_clean_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_3.addFeatures(features_jalan_clean_3);
var lyr_jalan_clean_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_3, 
                style: style_jalan_clean_3,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_3.png" /> jalan_clean'
            });
var format_gentegareaterjangkau_4 = new ol.format.GeoJSON();
var features_gentegareaterjangkau_4 = format_gentegareaterjangkau_4.readFeatures(json_gentegareaterjangkau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gentegareaterjangkau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gentegareaterjangkau_4.addFeatures(features_gentegareaterjangkau_4);
var lyr_gentegareaterjangkau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gentegareaterjangkau_4, 
                style: style_gentegareaterjangkau_4,
                popuplayertitle: 'genteg area terjangkau',
                interactive: true,
                title: '<img src="styles/legend/gentegareaterjangkau_4.png" /> genteg area terjangkau'
            });
var format_Buffer60m_5 = new ol.format.GeoJSON();
var features_Buffer60m_5 = format_Buffer60m_5.readFeatures(json_Buffer60m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer60m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer60m_5.addFeatures(features_Buffer60m_5);
var lyr_Buffer60m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer60m_5, 
                style: style_Buffer60m_5,
                popuplayertitle: 'Buffer 60 m',
                interactive: true,
                title: '<img src="styles/legend/Buffer60m_5.png" /> Buffer 60 m'
            });
var format_servicearea400meter_6 = new ol.format.GeoJSON();
var features_servicearea400meter_6 = format_servicearea400meter_6.readFeatures(json_servicearea400meter_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_servicearea400meter_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_servicearea400meter_6.addFeatures(features_servicearea400meter_6);
var lyr_servicearea400meter_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_servicearea400meter_6, 
                style: style_servicearea400meter_6,
                popuplayertitle: 'service area 400 meter',
                interactive: true,
                title: '<img src="styles/legend/servicearea400meter_6.png" /> service area 400 meter'
            });
var format_halte_pt_7 = new ol.format.GeoJSON();
var features_halte_pt_7 = format_halte_pt_7.readFeatures(json_halte_pt_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_7.addFeatures(features_halte_pt_7);
var lyr_halte_pt_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_7, 
                style: style_halte_pt_7,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_7.png" /> halte_pt'
            });

lyr_kecamatan_genteng_ar_0.setVisible(true);lyr_akesebilitashaltegenteng_1.setVisible(true);lyr_kelurahanterjangkau_2.setVisible(true);lyr_jalan_clean_3.setVisible(true);lyr_gentegareaterjangkau_4.setVisible(true);lyr_Buffer60m_5.setVisible(true);lyr_servicearea400meter_6.setVisible(true);lyr_halte_pt_7.setVisible(true);
var layersList = [lyr_kecamatan_genteng_ar_0,lyr_akesebilitashaltegenteng_1,lyr_kelurahanterjangkau_2,lyr_jalan_clean_3,lyr_gentegareaterjangkau_4,lyr_Buffer60m_5,lyr_servicearea400meter_6,lyr_halte_pt_7];
lyr_kecamatan_genteng_ar_0.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas area': 'luas area', });
lyr_akesebilitashaltegenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas area': 'luas area', 'luas area_': 'luas area_', 'persen jan': 'persen jan', 'tdk terjan': 'tdk terjan', });
lyr_kelurahanterjangkau_2.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas area': 'luas area', });
lyr_jalan_clean_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_gentegareaterjangkau_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_Buffer60m_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_servicearea400meter_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_halte_pt_7.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'foto': 'foto', 'Informasi Halte__Nama_Halte': 'Informasi Halte__Nama_Halte', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_kecamatan_genteng_ar_0.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'luas area': 'TextEdit', });
lyr_akesebilitashaltegenteng_1.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'luas area': '', 'luas area_': '', 'persen jan': '', 'tdk terjan': '', });
lyr_kelurahanterjangkau_2.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'luas area': '', });
lyr_jalan_clean_3.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_gentegareaterjangkau_4.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', });
lyr_Buffer60m_5.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_servicearea400meter_6.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_halte_pt_7.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'foto': 'ExternalResource', 'Informasi Halte__Nama_Halte': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_kecamatan_genteng_ar_0.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'luas area': 'no label', });
lyr_akesebilitashaltegenteng_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'luas area': 'no label', 'luas area_': 'no label', 'persen jan': 'no label', 'tdk terjan': 'no label', });
lyr_kelurahanterjangkau_2.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'luas area': 'no label', });
lyr_jalan_clean_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_gentegareaterjangkau_4.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_Buffer60m_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_servicearea400meter_6.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_halte_pt_7.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'foto': 'no label', 'Informasi Halte__Nama_Halte': 'inline label - always visible', 'Informasi Halte__RUTE': 'no label', 'Informasi Halte__Destinasi': 'no label', });
lyr_halte_pt_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});