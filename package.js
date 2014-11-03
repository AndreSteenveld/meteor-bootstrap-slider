Package.describe({
    summary: "A bootstrap slider control.",
    version: "1.0.0"
});

Package.onUse(function (api) {

    api.versionsFrom('METEOR@1.0');

    api.use('jquery');
    api.addFiles([
      './slider/css/slider.css',
      './slider/js/bootstrap-slider.js'
    ], 'client');
});
