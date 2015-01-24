'use strict';

app.factory('materialCollection', function(storage, Collection) {
    return new Collection('materialCollection', storage.get('materialCollection'))
});
