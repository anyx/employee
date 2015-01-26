'use strict';


app.service('mocksLoader', function(storage) {

    var userData = [
        {
            id: _.uniqueId(),
            login: 'alex',
            email: 'some@mail.com',
            firstName: 'Александр',
            lastName: 'Иванов'
        },
        {
            id: _.uniqueId(),
            login: 'ivan',
            email: 'ivan@mail.com',
            firstName: 'Иван',
            lastName: 'Николаев'
        }
    ];

    var materialData = [
        {
            id: _.uniqueId(),
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
            id: _.uniqueId(),
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
