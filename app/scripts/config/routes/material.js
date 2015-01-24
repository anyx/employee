'use strict';

angular.module('app')
    .config(function($stateProvider) {

        $stateProvider
            .state('admin.material', {
                url: '/material',
                abstract: true,
                resolve: {
                    materials: ['materialCollection', function(materialCollection) {
                        return materialCollection;
                    }]
                }
            })
            .state('admin.material.list', {
                url:'',
                views: {
                    content: {
                        controller: 'MaterialListCtrl',
                        templateUrl: '/views/material/list.html'
                    }
                },
                data: {
                    title: 'Список материалов'
                }
            })
            .state('admin.material.create', {
                url: '/create',
                views: {
                    content: {
                        controller: 'MaterialEditCtrl',
                        templateUrl: '/views/material/edit.html'
                    }
                },
                resolve: {
                    material: [function() {
                        return {};
                    }]
                },
                data: {
                    title: 'Создание материала'
                }
            })
            .state('admin.material.edit', {
                url: '/{id}',
                views: {
                    content: {
                        controller: 'MaterialEditCtrl',
                        templateUrl: '/views/material/edit.html'
                    }
                },
                resolve: {
                    material: ['$stateParams', 'materialCollection', function($stateParams, materialCollection) {
                        return materialCollection.get($stateParams.id);
                    }]
                },
                data: {
                    title: 'Редактирование материала'
                }
            })
    });
