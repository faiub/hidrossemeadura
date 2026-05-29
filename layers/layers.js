ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([591956.030939, 9323695.581307, 595899.145080, 9328557.091654]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MinaCarajs_2 = new ol.format.GeoJSON();
var features_MinaCarajs_2 = format_MinaCarajs_2.readFeatures(json_MinaCarajs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_MinaCarajs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MinaCarajs_2.addFeatures(features_MinaCarajs_2);
var lyr_MinaCarajs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MinaCarajs_2, 
                style: style_MinaCarajs_2,
                popuplayertitle: 'Mina - Carajás',
                interactive: true,
    title: 'Mina - Carajás<br />\
    <img src="styles/legend/MinaCarajs_2_0.png" /> Mina<br />\
    <img src="styles/legend/MinaCarajs_2_1.png" /> Morro<br />\
    <img src="styles/legend/MinaCarajs_2_2.png" /> PDE<br />' });
var format_BM14semfornecimentodeinsumos13700Ha_3 = new ol.format.GeoJSON();
var features_BM14semfornecimentodeinsumos13700Ha_3 = format_BM14semfornecimentodeinsumos13700Ha_3.readFeatures(json_BM14semfornecimentodeinsumos13700Ha_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BM14semfornecimentodeinsumos13700Ha_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM14semfornecimentodeinsumos13700Ha_3.addFeatures(features_BM14semfornecimentodeinsumos13700Ha_3);
var lyr_BM14semfornecimentodeinsumos13700Ha_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM14semfornecimentodeinsumos13700Ha_3, 
                style: style_BM14semfornecimentodeinsumos13700Ha_3,
                popuplayertitle: 'BM14 - sem fornecimento de insumos - 13,700 Ha',
                interactive: true,
    title: 'BM14 - sem fornecimento de insumos - 13,700 Ha<br />\
    <img src="styles/legend/BM14semfornecimentodeinsumos13700Ha_3_0.png" /> Aplicação convencional - 10,82 Ha<br />\
    <img src="styles/legend/BM14semfornecimentodeinsumos13700Ha_3_1.png" /> Camada dupla - 1,114 Ha<br />\
    <img src="styles/legend/BM14semfornecimentodeinsumos13700Ha_3_2.png" /> Leiras - 1,766 Ha<br />' });
var format_BM14comfornecimentodeinsumos6981Ha_4 = new ol.format.GeoJSON();
var features_BM14comfornecimentodeinsumos6981Ha_4 = format_BM14comfornecimentodeinsumos6981Ha_4.readFeatures(json_BM14comfornecimentodeinsumos6981Ha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BM14comfornecimentodeinsumos6981Ha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM14comfornecimentodeinsumos6981Ha_4.addFeatures(features_BM14comfornecimentodeinsumos6981Ha_4);
var lyr_BM14comfornecimentodeinsumos6981Ha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM14comfornecimentodeinsumos6981Ha_4, 
                style: style_BM14comfornecimentodeinsumos6981Ha_4,
                popuplayertitle: 'BM14 - com fornecimento de insumos - 6,981 Ha',
                interactive: true,
    title: 'BM14 - com fornecimento de insumos - 6,981 Ha<br />\
    <img src="styles/legend/BM14comfornecimentodeinsumos6981Ha_4_0.png" /> Aplicação convencional - 6,039 Ha<br />\
    <img src="styles/legend/BM14comfornecimentodeinsumos6981Ha_4_1.png" /> Leiras - 0,942 Ha<br />' });
var format_BM13comfornecimentodeinsumos10895Ha_5 = new ol.format.GeoJSON();
var features_BM13comfornecimentodeinsumos10895Ha_5 = format_BM13comfornecimentodeinsumos10895Ha_5.readFeatures(json_BM13comfornecimentodeinsumos10895Ha_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BM13comfornecimentodeinsumos10895Ha_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM13comfornecimentodeinsumos10895Ha_5.addFeatures(features_BM13comfornecimentodeinsumos10895Ha_5);
var lyr_BM13comfornecimentodeinsumos10895Ha_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM13comfornecimentodeinsumos10895Ha_5, 
                style: style_BM13comfornecimentodeinsumos10895Ha_5,
                popuplayertitle: 'BM13 - com fornecimento de insumos - 10,895 Ha',
                interactive: true,
    title: 'BM13 - com fornecimento de insumos - 10,895 Ha<br />\
    <img src="styles/legend/BM13comfornecimentodeinsumos10895Ha_5_0.png" /> Aplicação convencional - 9,893 Ha<br />\
    <img src="styles/legend/BM13comfornecimentodeinsumos10895Ha_5_1.png" /> Leiras - 1,002 Ha<br />' });
var format_BM12comfornecimentodeinsumos14603Ha_6 = new ol.format.GeoJSON();
var features_BM12comfornecimentodeinsumos14603Ha_6 = format_BM12comfornecimentodeinsumos14603Ha_6.readFeatures(json_BM12comfornecimentodeinsumos14603Ha_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BM12comfornecimentodeinsumos14603Ha_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM12comfornecimentodeinsumos14603Ha_6.addFeatures(features_BM12comfornecimentodeinsumos14603Ha_6);
var lyr_BM12comfornecimentodeinsumos14603Ha_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM12comfornecimentodeinsumos14603Ha_6, 
                style: style_BM12comfornecimentodeinsumos14603Ha_6,
                popuplayertitle: 'BM12 - com fornecimento de insumos - 14,603 Ha',
                interactive: true,
    title: 'BM12 - com fornecimento de insumos - 14,603 Ha<br />\
    <img src="styles/legend/BM12comfornecimentodeinsumos14603Ha_6_0.png" /> Aplicação convencional - 13,387 Ha<br />\
    <img src="styles/legend/BM12comfornecimentodeinsumos14603Ha_6_1.png" /> Leiras - 1,216 Ha<br />' });
var format_BM11comfornecimentodeinsumos11912Ha_7 = new ol.format.GeoJSON();
var features_BM11comfornecimentodeinsumos11912Ha_7 = format_BM11comfornecimentodeinsumos11912Ha_7.readFeatures(json_BM11comfornecimentodeinsumos11912Ha_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BM11comfornecimentodeinsumos11912Ha_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM11comfornecimentodeinsumos11912Ha_7.addFeatures(features_BM11comfornecimentodeinsumos11912Ha_7);
var lyr_BM11comfornecimentodeinsumos11912Ha_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM11comfornecimentodeinsumos11912Ha_7, 
                style: style_BM11comfornecimentodeinsumos11912Ha_7,
                popuplayertitle: 'BM11 - com fornecimento de insumos - 11,912 Ha',
                interactive: true,
    title: 'BM11 - com fornecimento de insumos - 11,912 Ha<br />\
    <img src="styles/legend/BM11comfornecimentodeinsumos11912Ha_7_0.png" /> Aplicação convencional - 9,809 Ha<br />\
    <img src="styles/legend/BM11comfornecimentodeinsumos11912Ha_7_1.png" /> Camada dupla - 0,865 Ha<br />\
    <img src="styles/legend/BM11comfornecimentodeinsumos11912Ha_7_2.png" /> Leiras - 1,238 Ha<br />' });
var format_BM10comfornecimentodeinsumos8224Ha_8 = new ol.format.GeoJSON();
var features_BM10comfornecimentodeinsumos8224Ha_8 = format_BM10comfornecimentodeinsumos8224Ha_8.readFeatures(json_BM10comfornecimentodeinsumos8224Ha_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BM10comfornecimentodeinsumos8224Ha_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BM10comfornecimentodeinsumos8224Ha_8.addFeatures(features_BM10comfornecimentodeinsumos8224Ha_8);
var lyr_BM10comfornecimentodeinsumos8224Ha_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BM10comfornecimentodeinsumos8224Ha_8, 
                style: style_BM10comfornecimentodeinsumos8224Ha_8,
                popuplayertitle: 'BM10 - com fornecimento de insumos - 8,224 Ha',
                interactive: true,
    title: 'BM10 - com fornecimento de insumos - 8,224 Ha<br />\
    <img src="styles/legend/BM10comfornecimentodeinsumos8224Ha_8_0.png" /> Aplicação convencional - 6,708 Ha<br />\
    <img src="styles/legend/BM10comfornecimentodeinsumos8224Ha_8_1.png" /> Leiras - 1,516 Ha<br />' });
var group_HIDROSSEMEADURA202666315Ha = new ol.layer.Group({
                                layers: [lyr_BM14semfornecimentodeinsumos13700Ha_3,lyr_BM14comfornecimentodeinsumos6981Ha_4,lyr_BM13comfornecimentodeinsumos10895Ha_5,lyr_BM12comfornecimentodeinsumos14603Ha_6,lyr_BM11comfornecimentodeinsumos11912Ha_7,lyr_BM10comfornecimentodeinsumos8224Ha_8,],
                                fold: 'open',
                                title: 'HIDROSSEMEADURA - 2026 - 66,315 Ha'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_MinaCarajs_2,],
                                fold: 'open',
                                title: 'BASEMAP'});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_MinaCarajs_2.setVisible(false);lyr_BM14semfornecimentodeinsumos13700Ha_3.setVisible(true);lyr_BM14comfornecimentodeinsumos6981Ha_4.setVisible(true);lyr_BM13comfornecimentodeinsumos10895Ha_5.setVisible(true);lyr_BM12comfornecimentodeinsumos14603Ha_6.setVisible(true);lyr_BM11comfornecimentodeinsumos11912Ha_7.setVisible(true);lyr_BM10comfornecimentodeinsumos8224Ha_8.setVisible(true);
var layersList = [group_BASEMAP,group_HIDROSSEMEADURA202666315Ha];
lyr_MinaCarajs_2.set('fieldAliases', {'type': 'type', 'nome': 'nome', 'area_ha': 'area_ha', });
lyr_BM14semfornecimentodeinsumos13700Ha_3.set('fieldAliases', {'DATA': 'DATA', 'AREA': 'AREA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'AREA_R': 'AREA_R', 'INSUMOS': 'INSUMOS', 'BM': 'BM', 'KML': 'KML', });
lyr_BM14comfornecimentodeinsumos6981Ha_4.set('fieldAliases', {'DATA': 'DATA', 'AREA': 'AREA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'AREA_R': 'AREA_R', 'INSUMOS': 'INSUMOS', 'BM': 'BM', 'KML': 'KML', });
lyr_BM13comfornecimentodeinsumos10895Ha_5.set('fieldAliases', {'DATA': 'DATA', 'AREA': 'AREA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'AREA_R': 'AREA_R', 'INSUMOS': 'INSUMOS', 'BM': 'BM', 'KML': 'KML', });
lyr_BM12comfornecimentodeinsumos14603Ha_6.set('fieldAliases', {'DATA': 'DATA', 'AREA': 'AREA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'AREA_R': 'AREA_R', 'INSUMOS': 'INSUMOS', 'BM': 'BM', 'KML': 'KML', });
lyr_BM11comfornecimentodeinsumos11912Ha_7.set('fieldAliases', {'DATA': 'DATA', 'AREA': 'AREA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'AREA_R': 'AREA_R', 'INSUMOS': 'INSUMOS', 'BM': 'BM', 'KML': 'KML', });
lyr_BM10comfornecimentodeinsumos8224Ha_8.set('fieldAliases', {'DATA': 'DATA', 'AREA': 'AREA', 'TIPO': 'TIPO', 'LOCAL': 'LOCAL', 'AREA_R': 'AREA_R', 'INSUMOS': 'INSUMOS', 'BM': 'BM', 'KML': 'KML', });
lyr_MinaCarajs_2.set('fieldImages', {'type': 'TextEdit', 'nome': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_BM14semfornecimentodeinsumos13700Ha_3.set('fieldImages', {'DATA': '', 'AREA': '', 'TIPO': '', 'LOCAL': '', 'AREA_R': '', 'INSUMOS': '', 'BM': '', 'KML': '', });
lyr_BM14comfornecimentodeinsumos6981Ha_4.set('fieldImages', {'DATA': '', 'AREA': '', 'TIPO': '', 'LOCAL': '', 'AREA_R': '', 'INSUMOS': '', 'BM': '', 'KML': '', });
lyr_BM13comfornecimentodeinsumos10895Ha_5.set('fieldImages', {'DATA': '', 'AREA': '', 'TIPO': '', 'LOCAL': '', 'AREA_R': '', 'INSUMOS': '', 'BM': '', 'KML': '', });
lyr_BM12comfornecimentodeinsumos14603Ha_6.set('fieldImages', {'DATA': '', 'AREA': '', 'TIPO': '', 'LOCAL': '', 'AREA_R': '', 'INSUMOS': '', 'BM': '', 'KML': '', });
lyr_BM11comfornecimentodeinsumos11912Ha_7.set('fieldImages', {'DATA': '', 'AREA': '', 'TIPO': '', 'LOCAL': '', 'AREA_R': '', 'INSUMOS': '', 'BM': '', 'KML': '', });
lyr_BM10comfornecimentodeinsumos8224Ha_8.set('fieldImages', {'DATA': 'DateTime', 'AREA': 'TextEdit', 'TIPO': 'TextEdit', 'LOCAL': 'TextEdit', 'AREA_R': 'TextEdit', 'INSUMOS': 'TextEdit', 'BM': 'TextEdit', 'KML': 'TextEdit', });
lyr_MinaCarajs_2.set('fieldLabels', {'type': 'no label', 'nome': 'inline label - always visible', 'area_ha': 'no label', });
lyr_BM14semfornecimentodeinsumos13700Ha_3.set('fieldLabels', {'DATA': 'no label', 'AREA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'AREA_R': 'no label', 'INSUMOS': 'no label', 'BM': 'no label', 'KML': 'no label', });
lyr_BM14comfornecimentodeinsumos6981Ha_4.set('fieldLabels', {'DATA': 'no label', 'AREA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'AREA_R': 'no label', 'INSUMOS': 'no label', 'BM': 'no label', 'KML': 'no label', });
lyr_BM13comfornecimentodeinsumos10895Ha_5.set('fieldLabels', {'DATA': 'no label', 'AREA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'AREA_R': 'no label', 'INSUMOS': 'no label', 'BM': 'no label', 'KML': 'no label', });
lyr_BM12comfornecimentodeinsumos14603Ha_6.set('fieldLabels', {'DATA': 'no label', 'AREA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'AREA_R': 'no label', 'INSUMOS': 'no label', 'BM': 'no label', 'KML': 'no label', });
lyr_BM11comfornecimentodeinsumos11912Ha_7.set('fieldLabels', {'DATA': 'no label', 'AREA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'AREA_R': 'no label', 'INSUMOS': 'no label', 'BM': 'no label', 'KML': 'no label', });
lyr_BM10comfornecimentodeinsumos8224Ha_8.set('fieldLabels', {'DATA': 'no label', 'AREA': 'no label', 'TIPO': 'no label', 'LOCAL': 'no label', 'AREA_R': 'header label - always visible', 'INSUMOS': 'no label', 'BM': 'no label', 'KML': 'no label', });
lyr_BM10comfornecimentodeinsumos8224Ha_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});