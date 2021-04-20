var app = angular.module("Painting",[]);

app.controller("PaintingController", function($scope){

  $scope.paintingCount = 0;
  $scope.paintings = [
      'avatar.png',
      'avatar1.png',
      'avatar2.png',
      'avatar3.png',
      'avatar4.png',
      'avatar5.png',
      'avatar6.png',
      'avatar7.jpg',
  ];

  $scope.previous = function () {
      $scope.paintingCount -=1;
      
      if($scope.paintingCount == -1){
        $scope.paintingCount = $scope.paintings.length-1;
      }
  }

  $scope.next = function () {
    $scope.paintingCount +=1;
    if($scope.paintingCount == $scope.paintings.length){
        $scope.paintingCount = 0;
    }
  }


});


