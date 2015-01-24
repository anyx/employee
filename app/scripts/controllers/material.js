'use strict';

app
    .controller('MaterialListCtrl', function ($scope, $state, materials) {
        $scope.materials = materials.getAll();

        $scope.remove = function(material) {
            var message = 'Вы уверены что хотите удалить материал "' + material.title + '"?';
            if (confirm(message)) {
                materials.remove(material);
                $state.go('admin.material.list', null, {reload: true});
            };
        };
    })
    .controller('MaterialEditCtrl', function($scope, $state, FileUploader, materials, material) {
        $scope.material = material;
        if (!_.isArray(material.files)) {
            material.files = [];
        }
        $scope.save = function(material) {
            materials.set(material);
            if (!material.createdAt) {
                material.createdAt = new Date();
            }
            $state.go('admin.material.list');
        };

        $scope.uploader = new FileUploader();

        var uploader = $scope.uploader = new FileUploader({
            url: '/upload.php'
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            $scope.material.files.push(fileItem.file);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };
    });
