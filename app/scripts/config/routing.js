'use strict';

angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('admin', {
                abstract: true,
                templateUrl: '/layouts/admin.html'
            })
            .state('admin.index', {
                url: '/',
                views: {
                    content: {
                        controller: 'IndexCtrl',
                        templateUrl: '/views/dashboard.html'
                    }
                },
                resolve: {
                    users: ['userCollection', function(userCollection) {
                        return userCollection;
                    }],
                    materials: ['materialCollection', function(materialCollection) {
                        return materialCollection;
                    }]
                },
                data: {
                    title: 'Управление материалами для сотрудников'
                }
            })
            .state('admin.reset', {
                url: '/reset',
                controller: 'ResetCtrl'
            })
    })
    .run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log('on');
            console.error('State change error', error);
            event.preventDefault();
            //$state.go('public.500', {}, {location: false});
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            if (_.isObject(toState.data)) {
                $rootScope.title = toState.data.title;
            }
        });
    });
