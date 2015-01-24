'use strict';

app.service('storage', function($window) {

    var localStorage = $window.localStorage;

    return {
        get: function(name) {
            var data = localStorage.getItem(name);

            try {
                data = JSON.parse(data);
            } catch (e) {

            }

            return data;
        },

        set: function(name, data) {
            localStorage.setItem(name, JSON.stringify(data));
        },
        remove: function(name) {
            localStorage.removeItem(name);
        }
    }

});
