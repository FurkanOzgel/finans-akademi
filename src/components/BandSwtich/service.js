import TrackPlayer from 'react-native-track-player';
import { Event } from 'react-native-track-player';
import getPrice from './getPrice/GetPrice';
import BackgroundTimer from 'react-native-background-timer';



module.exports = async function () {

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemotePause, () => {
        getPrice(["BIST:ODAS","BIST:THYAO","BIST:ASELS"])
        TrackPlayer.pause()
        BackgroundTimer.setTimeout(() => {
            TrackPlayer.play()
        }, 300);
    })

    
}