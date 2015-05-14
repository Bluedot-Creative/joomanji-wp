<?php

// Exit if accessed directly
if ( !defined('ABSPATH')) exit;

/*
**  Music Player Page Template
**
**  Template Name: Music Player
*/
get_header(); ?>
<!-- #wrapper -->
   <!-- #container -->
  <div class="page" id="audio-player">

    <!-- page #content -->
    <section class="bg-opaque padding-1" ng-controller="playerController" ng-cloak>
      <h3>OUR MUSIC</h3>
      <div class="album-container">
        <div class="album-single m-point" ng-repeat="album in albums" ng-click="selectAlbum($index)" ng-class="{'active': currentAlbum == $index}">
          <img ng-src="{{album.image}}" width="250" height="auto"/>
          <span class="album-meta">
              <span class="title">{{album.name}}</span>
              <span class="year">{{album.year}}</span>
          </span>
        </div>
      </div>

      <div class="player-wrapper">

        <div class="player-container">
          <audio-player></audio-player>
          <!-- track listing -->

          <div class="track-container">
            <div class="track-single m-point" ng-repeat="track in currentTracks" ng-click="playTrack($index);">
              <button>
                <i 
                ng-show="$index == currentTrack"
                ng-class="{'icon-play' : !nowPlaying, 
                          'icon-pause' :  nowPlaying}"></i>
                <i ng-show="$index != currentTrack"
                    class="icon-play"></i>
              </button>
              <span >{{$index+1}}. {{track.title}} - {{track.length}}</span>
            </div>
          </div>
        </div>

        <div class="album-description">
          <h3>ABOUT <span class="title">{{albums[currentAlbum].name}}</span></h3>
          <div class="text" ng-bind-html="albums[currentAlbum].description"></div>
          <a class="buy-link" ng-href="{{albums[currentAlbum].buyUrl}}" target="_blank">Purchase {{albums[currentAlbum].name}}</a>
        </div>

      </div>

    </section>
    <!-- end #content -->

  </div>
  <!-- end #container -->

<!-- end #wrapper -->


  
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/bower_components/angular-cookies/angular-cookies.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/bower_components/angular-loader/angular-loader.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/bower_components/angular-resource/angular-resource.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/bower_components/angular-route/angular-route.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/js/ng-manj.js"></script>

<script type="text/javascript">
(function($,angular) {
  $(document).ready(function() {
    var player = document.getElementById('audio-player');
    angular.bootstrap(player,['manj']);
  });
})(jQuery,angular);
</script>
<?php get_footer(); ?>