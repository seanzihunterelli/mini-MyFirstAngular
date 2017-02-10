angular.module('friendsList')

.controller('mainCtrl', function($scope, mainService) {
  $scope.myName = 'Sean';
  $scope.friends = [
    'Kayla',
    'Kenny',
    'Austin',
    'Afton'
  ];

  // $scope.data = mainService.getData();

  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = '';
  };
});
