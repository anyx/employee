'use strict';

app
    .controller('UserListCtrl', function ($scope, $state, users) {
        $scope.users = users.getAll();

        $scope.remove = function(user) {
            var message = 'Вы уверены что хотите удалить пользователя "' + user.firstName + ' ' + user.lastName  + '"?';
            if (confirm(message)) {
                users.remove(user);
                $state.go('admin.user.list', null, {reload: true});
            };
        };
    })
    .controller('UserEditCtrl', function($scope, $state, users, user) {
        $scope.user = user;
        $scope.save = function(user) {
            users.set(user);
            $state.go('admin.user.list');
        }
    });
