var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_hidrossemeadura_BM08_PDEjacare_1 = new ol.format.GeoJSON();
var features_hidrossemeadura_BM08_PDEjacare_1 = format_hidrossemeadura_BM08_PDEjacare_1.readFeatures(json_hidrossemeadura_BM08_PDEjacare_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrossemeadura_BM08_PDEjacare_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrossemeadura_BM08_PDEjacare_1.addFeatures(features_hidrossemeadura_BM08_PDEjacare_1);
var lyr_hidrossemeadura_BM08_PDEjacare_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrossemeadura_BM08_PDEjacare_1, 
                style: style_hidrossemeadura_BM08_PDEjacare_1,
                popuplayertitle: 'hidrossemeadura_BM08_PDEjacare',
                interactive: true,
    title: 'hidrossemeadura_BM08_PDEjacare<br />\
    <img src="styles/legend/hidrossemeadura_BM08_PDEjacare_1_0.png" /> APLICAÇÃO<br />\
    <img src="styles/legend/hidrossemeadura_BM08_PDEjacare_1_1.png" /> LEIRA<br />\
    <img src="styles/legend/hidrossemeadura_BM08_PDEjacare_1_2.png" /> REAPLICAÇÃO<br />\
    <img src="styles/legend/hidrossemeadura_BM08_PDEjacare_1_3.png" /> APLICAÇÃO - F<br />\
    <img src="styles/legend/hidrossemeadura_BM08_PDEjacare_1_4.png" /> LEIRA - F<br />\
    <img src="styles/legend/hidrossemeadura_BM08_PDEjacare_1_5.png" /> REAPLICAÇÃO - F<br />\
    <img src="styles/legend/hidrossemeadura_BM08_PDEjacare_1_6.png" /> <br />' });
var group_HIDRO = new ol.layer.Group({
                                layers: [lyr_hidrossemeadura_BM08_PDEjacare_1,],
                                fold: 'open',
                                title: 'HIDRO'});
var group_BASE = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'open',
                                title: 'BASE'});

lyr_GoogleSatellite_0.setVisible(true);lyr_hidrossemeadura_BM08_PDEjacare_1.setVisible(true);
var layersList = [group_BASE,group_HIDRO];
lyr_hidrossemeadura_BM08_PDEjacare_1.set('fieldAliases', {'DATA': 'DATA', 'AREA': 'AREA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'H_ESTIMAD.': 'H_ESTIMAD.', 'N_APLICA': 'N_APLICA', 'CAMINHÃO': 'CAMINHÃO', 'SEMANA': 'SEMANA', 'VALE': 'VALE', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'AREA_R': 'AREA_R', });
lyr_hidrossemeadura_BM08_PDEjacare_1.set('fieldImages', {'DATA': 'DateTime', 'AREA': 'TextEdit', 'TIPO': 'TextEdit', 'LOCAL': 'TextEdit', 'H_ESTIMAD.': 'TextEdit', 'N_APLICA': 'TextEdit', 'CAMINHÃO': 'TextEdit', 'SEMANA': 'TextEdit', 'VALE': 'Range', '_count': '', '_sum': '', '_mean': '', 'AREA_R': '', });
lyr_hidrossemeadura_BM08_PDEjacare_1.set('fieldLabels', {'DATA': 'no label', 'AREA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'H_ESTIMAD.': 'no label', 'N_APLICA': 'no label', 'CAMINHÃO': 'no label', 'SEMANA': 'no label', 'VALE': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'AREA_R': 'no label', });
lyr_hidrossemeadura_BM08_PDEjacare_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});