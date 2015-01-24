'use strict';

app.config(function(storageProvider) {

    var storage = storageProvider.$get();

    var userData = [
        {
            id: '1',
            login: 'alex',
            firstName: 'Александр',
            lastName: 'Иванов'
        },
        {
            id: '2',
            login: 'ivan',
            firstName: 'Иван',
            lastName: 'Николаев'
        }
    ];

    var materialData = [];

    if (!storage.get('userCollection')) {
        storage.set('userCollection', userData);
    }

    if (!storage.get('materialCollection')) {
        storage.set('materialCollection', materialData);
    }


});
