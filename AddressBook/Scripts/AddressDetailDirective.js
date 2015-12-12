app.directive('personDetail', function () {
    return {
        restrict: 'E',
        scope: {
            person: "=",
            edit: "=",
            index: "=",
            editContact: "&",
            deleteContact: "&"
        },
        templateUrl: '../Views/Templates/PersonDetail.html',
        replace: true
    }
});