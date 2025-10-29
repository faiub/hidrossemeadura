var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_HIDROSSEMEADURABM08SEMANA44291025_2 = new ol.format.GeoJSON();
var features_HIDROSSEMEADURABM08SEMANA44291025_2 = format_HIDROSSEMEADURABM08SEMANA44291025_2.readFeatures(json_HIDROSSEMEADURABM08SEMANA44291025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROSSEMEADURABM08SEMANA44291025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROSSEMEADURABM08SEMANA44291025_2.addFeatures(features_HIDROSSEMEADURABM08SEMANA44291025_2);
var lyr_HIDROSSEMEADURABM08SEMANA44291025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIDROSSEMEADURABM08SEMANA44291025_2, 
                style: style_HIDROSSEMEADURABM08SEMANA44291025_2,
                popuplayertitle: 'HIDROSSEMEADURA - BM08 - SEMANA 44 - 29/10/25',
                interactive: true,
    title: 'HIDROSSEMEADURA - BM08 - SEMANA 44 - 29/10/25<br />\
    <img src="styles/legend/HIDROSSEMEADURABM08SEMANA44291025_2_0.png" /> Aplicação convencional - 4.911 Ha<br />\
    <img src="styles/legend/HIDROSSEMEADURABM08SEMANA44291025_2_1.png" /> Leiras - 0.646 Ha<br />' });
var group_HIDRO = new ol.layer.Group({
                                layers: [lyr_HIDROSSEMEADURABM08SEMANA44291025_2,],
                                fold: 'open',
                                title: 'HIDRO'});
var group_BASE = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,],
                                fold: 'open',
                                title: 'BASE'});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_HIDROSSEMEADURABM08SEMANA44291025_2.setVisible(true);
var layersList = [group_BASE,group_HIDRO];
lyr_HIDROSSEMEADURABM08SEMANA44291025_2.set('fieldAliases', {'DATA': 'DATA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'H_ESTIMAD.': 'H_ESTIMAD.', 'N_APLICA': 'N_APLICA', 'CAMINHÃO': 'CAMINHÃO', 'SEMANA': 'SEMANA', 'VALE': 'VALE', 'AREA_PLANA': 'AREA_PLANA', 'AREA_REAL': 'AREA_REAL', });
lyr_HIDROSSEMEADURABM08SEMANA44291025_2.set('fieldImages', {'DATA': 'DateTime', 'TIPO': 'TextEdit', 'LOCAL': 'TextEdit', 'H_ESTIMAD.': 'TextEdit', 'N_APLICA': 'TextEdit', 'CAMINHÃO': 'TextEdit', 'SEMANA': 'TextEdit', 'VALE': 'Range', 'AREA_PLANA': 'TextEdit', 'AREA_REAL': 'TextEdit', });
lyr_HIDROSSEMEADURABM08SEMANA44291025_2.set('fieldLabels', {'DATA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'H_ESTIMAD.': 'no label', 'N_APLICA': 'no label', 'CAMINHÃO': 'no label', 'SEMANA': 'no label', 'VALE': 'no label', 'AREA_PLANA': 'no label', 'AREA_REAL': 'no label', });
lyr_HIDROSSEMEADURABM08SEMANA44291025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});