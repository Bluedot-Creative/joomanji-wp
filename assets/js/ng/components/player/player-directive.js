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