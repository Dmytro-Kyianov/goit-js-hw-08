import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeStorage, 1000));

function timeStorage (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    
}
function fixationCurrentTime () {
    let currentTime = localStorage.getItem('videoplayer-current-time');

    if (currentTime) {
        player.setCurrentTime(currentTime).then(function(currentTime) {
           return currentTime;
        })
    }
}
fixationCurrentTime ()