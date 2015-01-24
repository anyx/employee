'use strict';


app.service('mocksLoader', function(storage) {

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

    var materialData = [
        {
            id: '1',
            title: 'Добро пожаловать в свободный мир!',
            text: 'Итак, вы уволены. Что делать?',
            published: true,
            createdAt: new Date(),
            files: [
                {
                    name: 'image.jpg'
                }
            ]
        },
        {
            id: '2',
            title: '10 рецептов глазуньи',
            text: 'Побалуем себя свежими рецептами',
            published: false,
            createdAt: new Date(),
            files: [
                {
                    name: 'asd.jpg'
                }
            ]
        }
    ];

    return {
        load: function(force) {
            if (force || !storage.get('userCollection')) {
                storage.set('userCollection', userData);
            }

            if (force || !storage.get('materialCollection')) {
                storage.set('materialCollection', materialData);
            }

        }
    }
});
