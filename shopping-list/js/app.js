var app = angular.module("ShoppingListApp",[]);

app.controller("ListController", function($scope){
    $scope.list = ['milk','cheese','eggs'];
    $scope.delList = [];

    $scope.addItem = function(item){
        $scope.list.push(item);
        $scope.newItem = "";
    }

    $scope.remove = function (item) {
        var removeItem = $scope.list.indexOf(item);
        var deletedItem = $scope.list.splice(removeItem,1);
      
        $scope.delList.push(deletedItem[0]);
        
    }

    $scope.addDeletedItem = function(item){
        $scope.list.push(item);
        var removeItem = $scope.delList.indexOf(item);
         $scope.delList.splice(removeItem,1);
    }
});