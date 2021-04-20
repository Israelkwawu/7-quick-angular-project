var app = angular.module("TopSingers",[]);

app.controller("TopSingersController", function($scope){

  $scope.singers = [
    {'img':'img/beyonc.jpeg',        'name':'Beyonce',      'gender':'female','quality':'img/like.png'},
    {'img':'img/billie-eilish.jpeg', 'name':'Billie Eilish','gender':'female','quality':'img/dislike.png'},
    {'img':'img/bruno-mars.jpeg',    'name':'Bruno Mars',   'gender':'male',  'quality':'img/like.png'},
    {'img':'img/ed-sheeran.jpeg',    'name':'Ed Sheeran',   'gender':'male',  'quality':'img/like.png'},
    {'img':'img/grande.jpeg',        'name':'Ariana Grande','gender':'female','quality':'img/dislike.png'},
    {'img':'img/selena.jpeg',        'name':'Selena Gomez', 'gender':'female','quality':'img/dislike.png'},   
    {'img':'img/shawn-mende.jpeg',   'name':'Shawn Mendez', 'gender':'male',  'quality':'img/dislike.png'},
    {'img':'img/taylor.jpeg',        'name':'Taylor Swift', 'gender':'female','quality':'img/like.png'},
    {'img':'img/weekend.jpeg',       'name':'Weekend',      'gender':'male',  'quality':'img/dislike.png'},
  ];

});