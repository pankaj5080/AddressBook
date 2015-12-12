app.service('AddressProviderService', ['contacts', function (contacts) {
    var self = this;

    self.getAllContactDetails = function () {
        return contacts
    };

    self.getContactDetail = function (person) {
        angular.forEach(contacts, function (item) {
            if (item.id == person.Id) {
                return item;
            }
        });
    };

    self.updateContactDetail = function (person, indexToUpdate) {
        if (indexToUpdate === -1) {
            contacts.push(person);
        }
        else {
            contacts[indexToUpdate] = person;
        }
    };

    self.deleteContact = function (person) {
        angular.forEach(contacts, function (item, index) {
            if (item.id == person.id) {
                contacts.splice(index, 1);
            }
        });
    };
}]);