angular.module('ips')
.controller('homeCtrl' , function($scope, mainService, $location){
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
})