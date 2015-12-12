var app = angular.module('AddressBookApp', ["ngRoute"]);

app.value("contacts", [
        { id: "1", firstName: "Pankaj", lastName: "Kudale", designation: "SE - I", orgnization: "Synechron", address: "Pimpri", phoneNumber: "9975845080", emailAddress: "pankaj5080@gmail.com" },
        { id: "2", firstName: "Peter", lastName: "Parker", designation: "SE - II", orgnization: "Tavisca", address: "Rahatani", phoneNumber: "9762187142", emailAddress: "shahkalpesh@gmail.com" },
        { id: "3", firstName: "Suraj", lastName: "Kudale", designation: "SE - II", orgnization: "Infosys", address: "Pune", phoneNumber: "9067948865", emailAddress: "skudale@gmail.com" },
        { id: "4", firstName: "Mayur", lastName: "Mali", designation: "SE - I", orgnization: "TCS", address: "Chakan", phoneNumber: "9096984735", emailAddress: "mmali@gmail.com" },
]);

app.config(function ($routeProvider) {
    $routeProvider.when(
        '/home', {
            templateUrl: '../views/templates/HomePage.html',
            controller: 'AddressBookController'
        }).otherwise({
            redirectTo: '/home'
        });
});

app.run(function ($location) {
    $location.path("/home");
});