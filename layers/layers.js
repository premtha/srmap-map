var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_srmapcollege_1 = new ol.format.GeoJSON();
var features_srmapcollege_1 = format_srmapcollege_1.readFeatures(json_srmapcollege_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmapcollege_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmapcollege_1.addFeatures(features_srmapcollege_1);
var lyr_srmapcollege_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_srmapcollege_1, 
                style: style_srmapcollege_1,
                popuplayertitle: "srmap college",
                interactive: true,
                title: '<img src="styles/legend/srmapcollege_1.png" /> srmap college'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_srmapcollege_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_srmapcollege_1];
lyr_srmapcollege_1.set('fieldAliases', {'id': 'id', });
lyr_srmapcollege_1.set('fieldImages', {'id': '', });
lyr_srmapcollege_1.set('fieldLabels', {'id': 'no label', });
lyr_srmapcollege_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});