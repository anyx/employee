'use strict';

app.config(function(mocksLoaderProvider) {

    var mocksLoader = mocksLoaderProvider.$get();

    mocksLoader.load();
});
