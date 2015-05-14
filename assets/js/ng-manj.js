/*!
 * joomanji-child v1.0.0
 * Build date: 2015-05-14
 * Copyright 2014.
 */;'use strict'

angular.module('manj',[
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

angular.module('manj')
.constant('MANJ_ASSETS_URL', 'http://joomanjimusic.com/wp-content/themes/portfolio/assets/js/ng');

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

'use strict'

var MP3_BASEPATH = 'http://joomanjimusic.com/wp-content/themes/portfolio/mp3/';

angular.module('manj')
.constant('IMG_BASEPATH', 'http://joomanjimusic.com/wp-content/themes/portfolio/images/')
.constant('MANJ_ALBUMS',  
  [
    //  MANJ ALBUM
    {
      'name' : 'Manj',
      'image' : 'http://joomanjimusic.com/wp-content/themes/portfolio/images/albums/manj-thumb.jpg',
      'year' : '2013',
      'description' : '<p>The creation of Manj took place over a 2 year period, from 2010-2012. The resulting track list is a reflection of the ongoing evolution of Joomanji\'s creative pallets over that period. Manj was recorded at the UC Santa Cruz Electronic Music Studios and CalArts Dizzy Gillespie Studio, then mastered at Waterland Studios in Venice, Italy.</p>',
      'buyUrl' : 'http://joomanji.bandcamp.com/album/manj',
      'tracks' : [
        {
          title : 'Somethin\' Out of Nothin (Feat. Saara Maria)',
          length: '3:03',
          file: MP3_BASEPATH + 'manj/01.mp3',
        },
        {
          title : 'Chasin Rhymes (Feat. Saara Maria)',
          length: '4:11',
          file: MP3_BASEPATH + 'manj/02.mp3'
        },
        {
          'title' : 'Bustin Loose (Feat. Austin & Saara Maria)',
          length: '3:25',
          file: MP3_BASEPATH + 'manj/03.mp3'
        },
        {
          'title' : 'Divided (Feat. Carlita Durand)',
          length: '3:12',
          file: MP3_BASEPATH + 'manj/04.mp3'
        },
        {
          title: 'Chasin (Afterlude) (Feat. Saara Maria)',
          length: '1:00',
          file: MP3_BASEPATH + 'manj/05.mp3'
        },
        {
          title: 'Around The World (Feat. Austin, Chris Young The Rapper, & Arielle Deem)',
          length: '4:14',
          file: MP3_BASEPATH + 'manj/06.mp3'
        },
        {
          title: 'Sweet Music (feat. Saara Maria)',
          length: '3:16',
          file: MP3_BASEPATH + 'manj/07.mp3'
        },
        {
          title: 'Impediment',
          length: '2:27',
          file: MP3_BASEPATH + 'manj/08.mp3'
        },
        {
          title: 'Free (Feat. Aisha Daniel & Te-Diggs)',
          length: '3:18',
          file: MP3_BASEPATH + 'manj/09.mp3'
        },
        {
          title: 'Spread Too Thin (Feat. Lindsay Olsen) (Remastered)',
          length: '4:45',
          file: MP3_BASEPATH + 'manj/10.mp3'
        },
        {
          title: 'Toasted (Feat. Devin The Dude)',
          length: '2:07',
          file: MP3_BASEPATH + 'manj/11.mp3'
        },
        {
          title: 'Where Are You (Love For JL) (Remastered) (Feat. Lindsay Olsen & Copasetic)',
          length: '4:19',
          file: MP3_BASEPATH + 'manj/12.mp3'
        },
        {
          title: 'Around The World (Instrumental)',
          length: '4:12',
          file: MP3_BASEPATH + 'manj/13.mp3'
        },
        {
          title: 'Toasted (Instrumental)',
          length: '2:15',
          file: MP3_BASEPATH + 'manj/14.mp3'
        },
        {
          title: 'Chasin Rhymes (Instrumental) (Feat. Nick Bianchini)',
          length: '2:56',
          file: MP3_BASEPATH + 'manj/15.mp3'
        },
        {
          title: 'Spread Too Thin (Instrumental) (Feat. Nick Bianchini)',
          length: '4:45',
          file: MP3_BASEPATH + 'manj/16.mp3'
        },
        {
          title: 'Divided (Instrumental) (Oz)',
          length: '3:12',
          file: MP3_BASEPATH + 'manj/17.mp3'
        }

      ]
    },
    //  DEMO ALBUM
    {
      'name' : 'Joomanji',
      'image' : 'http://joomanjimusic.com/wp-content/themes/portfolio/images/albums/joomanji-thumb.jpg',
      'year' : '2011',
      'description' : '<p>Leading up to the release of Manj, the Joomanji EP was released quietly in 2011, exclusively on Bandcamp. This diverse amalgamation of tracks is special because each one provides an honest glimpse into the Joomanji sound in its most primal state. As you move through the tracklist, it becomes clear that the young group was in its developmental stages as they worked to seamlessly combine Jonah\'s production-heavy beats with Amir, Rob, and Kevin\'s organically played instruments. Despite the rudimentary nature of this project, it contains interesting and striking melodic ideas that make it a great pick-up, not just for Joomanji fans but for hip-hop, soul, and jazz fans alike.</p>',
      'buyUrl' : 'http://joomanji.bandcamp.com/album/joomanji',
      'tracks' : [
        {
          title : '"Ridin"',
          length: '2:22',
          file: MP3_BASEPATH + 'joomanji/01 Ridin.mp3'
        },
        {
          title : 'Oz',
          length : '3:12',
          file : MP3_BASEPATH + 'joomanji/02 Oz.mp3'
        },
        {
          title: 'Jerk Chicken',
          length : '1:31',
          file: MP3_BASEPATH + 'joomanji/03 Jerk Chicken.mp3'
        },
        {
          title: 'Stereo ft. Austin Antoine',
          length: '3:19',
          file: MP3_BASEPATH + 'joomanji/04 Stereo ft. Austin Antoine.mp3'
        },
        {
          title: 'Livin\' Man (feat. Te-Diggs)',
          length: '3:23',
          file: MP3_BASEPATH + 'joomanji/05 Livin\' Man.mp3'
        },
        {
          title: 'We Get By Revisited',
          length: '3:09',
          file: MP3_BASEPATH + 'joomani/06 We Get By Revisted.mp3'
        }
      ]
    }
  ]
);


angular.module('manj')
.directive('audioPlayer',
    ['$rootScope', 
    function($rootScope) {
    return {
        restrict: 'E',
        scope: {},
        controller: function($scope, $element) {
            console.log('audio player initialized');

            $scope.audio = new Audio();
            $scope.currentNum = 0;

            // tell others to give me my prev/next track (with audio.set message)
            $scope.next = function(){ $rootScope.$broadcast('audio.next'); };
            $scope.prev = function(){ $rootScope.$broadcast('audio.prev'); };

            // tell audio element to play/pause, you can also use $scope.audio.play() or $scope.audio.pause();
            $scope.playpause = function(){ var a = $scope.audio.paused ? $scope.audio.play() : $scope.audio.pause(); };

            // listen for audio-element events, and broadcast stuff
            $scope.audio.addEventListener('play', function(){ $rootScope.$broadcast('audio.play', this); });
            $scope.audio.addEventListener('pause', function(){ $rootScope.$broadcast('audio.pause', this); });
            $scope.audio.addEventListener('timeupdate', function(){ $rootScope.$broadcast('audio.time', this); });
            $scope.audio.addEventListener('ended', function(){ $rootScope.$broadcast('audio.ended', this); $scope.next(); });

            // set track & play it
            $rootScope.$on('audio.set', function(r, file, info, currentNum, totalNum, togglePlaying){

                console.log('rootscope audio.set called');
                console.log('togglePlaying override: ' + togglePlaying);

                var playing = !$scope.audio.paused;
                $scope.audio.src = file;
                var a = togglePlaying ? 
                    $scope.audio.play() : 
                        playing ? $scope.audio.pause() : $scope.audio.play();
                $scope.info = info;
                $scope.currentNum = currentNum;
                $scope.totalNum = totalNum;


                console.log('nowplaying: ' +playing);

                $rootScope.$broadcast('audio.nowPlaying', playing);
            });

            $rootScope.$on('audio.playpause', function(event){
                console.log('audio.playpause heard');
                $scope.playpause();
            });

            // update display of things - makes time-scrub work
            setInterval(function(){ $scope.$apply(); }, 100);
        },

        templateUrl: 'http://joomanjimusic.com/wp-content/themes/portfolio/assets/js/ng/components/player/player-template.html'
        //templateUrl: 'assets/js/ng/components/player/player-template.html'
    };
}])
.directive('audioProgress', [function() {
    return {
        restrict: 'E',
        scope: {
            duration: '@duration',
            current: '@current'
        },
        transclude: true,
        template: '<div class="progress"><span style="width:{{width}}">{{width}}</span></div>',
        link: function($scope, elem, attr, ctrl) {
            
            $scope.duration = attr.duration;
            $scope.current = attr.current;

            $scope.$watch('current',function() {
                $scope.width = ($scope.current / $scope.duration);
            });

        }



    }
}]);

/*;'use strict'

angular.module('manj')
.factory('playerService', []);*/