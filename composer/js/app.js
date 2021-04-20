var app = angular.module("Composer",[]);

app.controller("ComposerController", function($scope){

  $scope.pieces = [
    {'img':'avatar.png',"composer":'Bach',"title":'Goldberg Variations'},
    {'img':'avatar.png',"composer":'Bach',"title":'Harpsichord Concerto'},
    {'img':'avatar.png',"composer":'Bach',"title":'Brandenburg Concerto'},
    {'img':'avatar.png',"composer":'Bach',"title":'Air On G'},
    {'img':'avatar.png',"composer":'Bach',"title":"Cantata "},
    {'img':'avatar1.png',"composer":'Beethoven',"title":"Symphony #9"},
    {'img':'avatar1.png',"composer":'Beethoven',"title":'Fur Elise'},
    {'img':'avatar1.png',"composer":'Beethoven',"title":'Moonlight Sonata'},
    {'img':'avatar1.png',"composer":'Beethoven',"title":'Violin Concerto'},
    {'img':'avatar1.png',"composer":'Beethoven',"title":'Egmont Overture'},
    {'img':'avatar2.png',"composer":'Mozart',"title":'Nachtmusic'},
    {'img':'avatar2.png',"composer":'Mozart',"title":'Piano Concerto'},
    {'img':'avatar2.png',"composer":'Mozart',"title":'Don Giovanni'},
    {'img':'avatar2.png',"composer":'Mozart',"title":'Jupiter Symphony'},
    {'img':'avatar2.png',"composer":'Mozart',"title":'Clarinet Concerto'},
  ];

});