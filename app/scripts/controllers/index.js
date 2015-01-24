'use strict';

app
    .controller('IndexCtrl', function($scope, users, materials) {
        $scope.users = users.getAll();
        $scope.materials = materials.getAll();
    })
    .controller('ResetCtrl', function($scope, $state, $window, mocksLoader) {
        mocksLoader.load(true);
        $window.location = '/';
    });

