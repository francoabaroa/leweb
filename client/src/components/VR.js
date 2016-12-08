<Scene antialias="true">
            <Camera>
              <a-cursor
                animation__click="property: scale; easing: easeOutQuad; startEvents: click; from: 2 2 2; to: 1 1 1; dur: 200"
                geometry="radiusInner:0.02; radiusOuter:0.03; segmentsTheta:64"
                material={"color:" + (self.state.recording ? '#FF3D00' : '#61ffff') + "; shader: flat"}
                >
              </a-cursor>
            </Camera>


            <a-assets>
              {images}
              {bigPic}
              {commentPics}
              <img id="profilePic" crossOrigin="anonymous" src={self.state.profilePic} />
              <img id="lobby-_1" crossOrigin="anonymous" src="https://s3.amazonaws.com/vrpics/lr2.jpg" />

              <img id="close" crossOrigin="anonymous" src="https://s3.amazonaws.com/vrpics/ui-icons/icon-home_512x512.png" />
              <img id="like" crossOrigin="anonymous" src="https://s3.amazonaws.com/vrpics/ui-icons/icon-favorite_512x512.png" />
              <img id="mic" crossOrigin="anonymous" src="https://s3.amazonaws.com/vrpics/ui-icons/icon-mic_512x512.png" />
              <img id="micActivated" crossOrigin="anonymous" src="https://s3.amazonaws.com/vrpics/ui-icons/icon-mic-activated_512x512.png" />


              <img id="bookmark" crossOrigin="anonymous" src="https://s3.amazonaws.com/vrpics/plus-hi.png" />
              <img id="exit" crossOrigin="anonymous" src="https://s3.amazonaws.com/vrpics/ui-icons/icon-dashboard_512x512.png" />

            </a-assets>

</Scene>