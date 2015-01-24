'use strict';

app.factory('Collection', function(storage) {
    var Collection = function(name, data) {

        this.save = function() {
            storage.set(name, this.getAll());
        };

        this.get =  function(id) {
            return _.find(data, function(item) {
                return item.id === id;
            });
        };

        this.getAll = function() {
            return data;
        };

        this.set = function(item) {
            console.log('data', data);
            var foundItem = this.get(item.id);
            if (foundItem) {
                _.extend(foundItem, item);
            } else {
                item.id = _.uniqueId();
                data.push(item);
            }

            this.save();
        };

        this.remove = function(item) {
            data = _.filter(this.getAll(), function(anotherItem) {
                return anotherItem.id !== item.id;
            });

            this.save();
        };
    };

    return Collection;
});
