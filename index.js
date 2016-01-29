angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('tabs.spinners', {
      url: "/spinners",
      views: {
        'home-tab': {
          templateUrl: "templates/spinners.html"
        }
      }
    })
    .state('tabs.ui', {
      url: "/ui",
      views: {
        'home-tab': {
          templateUrl: "templates/ui.html"
        }
      }
    })
    .state('tabs.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html",
          controller: 'DataTabCtrl'
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope, $ionicModal) {
  console.log('HomeTabCtrl');
  $ionicModal.fromTemplateUrl('templates/mylongform.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function(){
      $scope.modal.show();
    }
    $scope.closeModal = function(){
      $scope.modal.hide();
    }
})


.controller('DataTabCtrl', function($scope, $ionicModal, $http,$ionicLoading, $timeout) {
      // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 150,
    showDelay: 0
  });
  

$scope.noMoreItemsAvailable = false;
  $scope.items = [];
  $scope.itemsDisplayed = 7;
  $scope.originalItems = [];

  $scope.loadMore = function() {
    
    if ($scope.originalItems.length) {
      $scope.itemsDisplayed +=7;
      
      $timeout(function(){
        $scope.items = $scope.items.concat($scope.originalItems.splice(0, 7));
      }, 2000)
      
      
      if ( $scope.items.length > $scope.itemsDisplayed ) {
        $scope.noMoreItemsAvailable = true;
      }
      
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
    
  };
  
  

  $.ajax({
    type: "get",
    dataType: "json",
    url: "http://restcountries.eu/rest/v1/name/a"
  }).done(function(response) {
    $scope.originalItems = response;
    $scope.items = $scope.originalItems.splice(0,7);
      $ionicLoading.hide();
  });


});