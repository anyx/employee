'use strict';

app.factory('userCollection', function(storage, Collection) {
    return new Collection('userCollection', storage.get('userCollection'))
});
