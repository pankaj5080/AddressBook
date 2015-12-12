app.controller("AddressBookController", ['$scope', 'AddressProviderService', function ($scope, AddressProviderService) {
    $scope.showWidget = false;
    $scope.edit = false;
    $scope.indexToUpdate = -1;

    $scope.people = AddressProviderService.getAllContactDetails();

    $scope.addOrUpdateContact = function () {
        var contactDetails = {
                id: $scope.newId,
                firstName: $scope.newFName,
                lastName: $scope.newLName,
                designation: $scope.newDesignation,
                orgnization: $scope.newOranization,
                address: $scope.newAddress,
                phoneNumber: $scope.newMobileNo,
                emailAddress: $scope.newEmail
            };

            AddressProviderService.updateContactDetail(contactDetails, $scope.indexToUpdate);
            $scope.clearData();
    };

    $scope.deleteContact = function (person){
        AddressProviderService.deleteContact(person);
    };

    $scope.editContact = function (person, index) {
        $scope.indexToUpdate = index;
        $scope.newId = person.id;
        $scope.newFName = person.firstName;
        $scope.newLName = person.lastName;
        $scope.newDesignation = person.designation;
        $scope.newOranization = person.orgnization;
        $scope.newAddress = person.address;
        $scope.newMobileNo = person.phoneNumber;
        $scope.newEmail = person.emailAddress;
        $scope.edit = true;
        $scope.showWidget = true;
    };

    $scope.clearData = function () {
        $scope.newId = "";
        $scope.newFName = "";
        $scope.newLName = "";
        $scope.newDesignation = "";
        $scope.newOranization = "";
        $scope.newAddress = "";
        $scope.newMobileNo = "";
        $scope.newEmail = "";
        $scope.edit = false;
        $scope.showWidget = false;
    };
}]);
