let app = angular.module("RankingLeadersApp", []);
app.controller("RankController",function($scope){

    $scope.showGold = false;
    $scope.showSilver = false;
    $scope.showBronze = false;

    $scope.toggleGold = function(){
        $scope.showGold = !$scope.showGold;
    }
    $scope.toggleSilver = function(){
        $scope.showSilver = !$scope.showSilver;
    }
    $scope.toggleBronze = function(){
        $scope.showBronze = !$scope.showBronze;
    }
    

    $scope.Leaders = [
        {"img":"img/avatar1.png", "rank":1},
        {"img":"img/avatar2.png", "rank":1},
        {"img":"img/avatar3.png", "rank":1},
        {"img":"img/avatar4.png", "rank":2},
        {"img":"img/avatar5.png", "rank":2},
        {"img":"img/avatar6.png", "rank":2},
        {"img":"img/avatar3.png", "rank":3},
        {"img":"img/avatar2.png", "rank":3},
        {"img":"img/avatar1.png", "rank":3},

    ]
   
});