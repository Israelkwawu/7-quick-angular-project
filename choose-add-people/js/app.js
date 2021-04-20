let app = angular.module("TossThemApp", []);
app.controller("MovePeopleController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"img":"img/avatar1.png", "name":"Alexander"},
        {"img":"img/avatar2.png", "name":"Amanitore"},
        {"img":"img/avatar3.png", "name":"Barbarossa"},
        {"img":"img/avatar4.png", "name":"Chandragupta"},
        {"img":"img/avatar5.png", "name":"Cleoptra"},
        {"img":"img/avatar6.png", "name":"Cyrus"},
        {"img":"img/avatar7.png", "name":"Dido"},
        {"img":"img/avatar3.png", "name":"Gandhi"},
    ];  
   
}); 