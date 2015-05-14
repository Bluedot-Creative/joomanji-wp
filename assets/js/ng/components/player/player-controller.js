;'use strict'

angular.module('manj')
.controller('playerController', 
  ['$rootScope', 'MANJ_ALBUMS', '$scope', '$log', 
  function($rootScope, MANJ_ALBUMS, $scope, $log) {
  
  $scope.albums = MANJ_ALBUMS;
  $scope.currentTrack = 0;
  $scope.currentAlbum = 0;
  $scope.currentTracks = $scope.albums[$scope.currentAlbum].tracks;
  $scope.loaded = true;
  $scope.nowPlaying = false;

  var updateTrack = function(toggleNowPlaying){
      var nowPlaying = toggleNowPlaying || false;
      console.log('update track broadcast set');
      $rootScope.$broadcast('audio.set', 
        $scope.albums[$scope.currentAlbum].tracks[$scope.currentTrack].file, 
        $scope.albums[$scope.currentAlbum].tracks[$scope.currentTrack], 
        $scope.currentTrack, 
        $scope.albums[$scope.currentAlbum].tracks.length,
        nowPlaying
        );
  };  

  $rootScope.$on('audio.next', function(){
      $scope.currentTrack++;
      if ($scope.currentTrack < $scope.albums[$scope.currentAlbum].tracks.length){
          updateTrack(true);
      }else{
          $scope.currentTrack=$scope.albums[$scope.currentAlbum].tracks.length-1;
      }
  });

  $rootScope.$on('audio.prev', function(){
      $scope.currentTrack--;
      if ($scope.currentTrack >= 0){
          updateTrack(true);
      }else{
          $scope.currentTrack = 0;
      }
  });

  $rootScope.$on('audio.play', function() {
    $scope.nowPlaying = true;
  });

  $rootScope.$on('audio.pause', function() {
    $scope.nowPlaying = false;
  });

  $rootScope.$on('audio.nowPlaying', function(event, resp) {
    $scope.nowPlaying = resp;
  });

  $scope.updateTrack = function() {
    updateTrack();
  }

  $scope.playTrack = function(index) {
    console.log('playing from player controller');
    console.log(index !== $scope.currentTrack);

    if ($scope.currentTrack !== index) {
      $scope.currentTrack = index;
      updateTrack(true);
    } 
    else 
    {
      console.log('audio.playpause broadcast');
      $rootScope.$broadcast('audio.playpause', this);
    }
  }


  $scope.selectAlbum = function(index) {
      $scope.currentAlbum = index;
      $scope.currentTrack = 0;
      $scope.currentTracks = $scope.albums[$scope.currentAlbum].tracks;

    updateTrack(true);
  }


  $scope.init = function() {
    setTimeout(function() {
      updateTrack();
    }, 1000);
  }


  $scope.init();

  console.log($scope.albums);

}]);