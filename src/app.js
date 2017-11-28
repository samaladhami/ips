angular.module('ips', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('about-us', {
                url: '/',
                templateUrl: 'templates/about-us.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact.html',
            })
            .state('mission-statement', {
                url: '/mission-statement',
                templateUrl: 'templates/mission-statement.html',
            })
            .state('services', {
                url: '/services',
                templateUrl: 'templates/services.html',
            })
            .state('vision', {
                url: '/vision',
                templateUrl: 'templates/vision.html',
            })
            

    })
    