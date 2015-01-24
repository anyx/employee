'use strict';

angular.module('app')
    .config(function($stateProvider) {

        $stateProvider
            .state('admin.user', {
                url: '/users',
                abstract: true,
                resolve: {
                    users: ['userCollection', function(userCollection) {
                        return userCollection;
                    }]
                }
            })
            .state('admin.user.list', {
                url:'',
                views: {
                    content: {
                        controller: 'UserListCtrl',
                        templateUrl: '/views/user/list.html'
                    }
                },
                data: {
                    title: 'Список пользователей'
                }
            })
            .state('admin.user.create', {
                url: '/create',
                views: {
                    content: {
                        controller: 'UserEditCtrl',
                        templateUrl: '/views/user/edit.html'
                    }
                },
                resolve: {
                    user: [function() {
                        return {};
                    }]
                },
                data: {
                    title: 'Создание пользователя'
                }
            })
            .state('admin.user.edit', {
                url: '/{id}',
                views: {
                    content: {
                        controller: 'UserEditCtrl',
                        templateUrl: '/views/user/edit.html'
                    }
                },
                resolve: {
                    user: ['$stateParams', 'userCollection', function($stateParams, userCollection) {
                        return userCollection.get($stateParams.id);
                    }]
                },
                data: {
                    title: 'Редактирование пользователя'
                }
            })
    });
