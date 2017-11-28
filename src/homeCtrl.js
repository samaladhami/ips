angular.module('ips')
.controller('homeCtrl' , function($scope, mainService, $location){
    // $scope.highlightLinks = function(e){
    //     console.dir(e)
    //     var headerLinks = document.querySelectorAll('.header-links a');
    //     for(var i = 0; i < headerLinks.length; i++){
    //         headerLinks[i].classList.remove('router-active')
    //     }
    //     angular.element(e.target).addClass('router-active')
    // }
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
})