/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';
import TrackPlayer, {Event}  from 'react-native-track-player';
import setupPlayer from './src/components/ActivateBand/setupPlayer';
import notifee from "@notifee/react-native"

TrackPlayer.addEventListener(Event.RemoteDuck, async (data) => {

    if(data.permanent) {
        TrackPlayer.reset()
        notifee.cancelAllNotifications()
        const channelId = await notifee.createChannel({
            id: "Reload Notification",
            name: "Reload Notification",
            vibration: false,
          });
        await notifee.displayNotification({
            body:  "Fiyat bildirimi sistem devre dışı. Tekrar çalışması için bu bildirimi silin.",
            android: {
              channelId,
              smallIcon: 'notification',
              color: "#000080",
              showChronometer: true,
              autoCancel: false,
            },
            data:{ type: "reloader"}
          });
    }
    if(!(data.paused)){
        TrackPlayer.play()
    }
});

notifee.onBackgroundEvent(async ({ type, detail }) => {
    if(type == 0 && detail.notification.data.type == "reloader" ) {
        setupPlayer()
    }});

notifee.onForegroundEvent(async ({ type, detail }) => {
    if(type == 0 && detail.notification.data.type == "reloader" ) {
        setupPlayer()
    }});


AppRegistry.registerComponent(appName, () => Router);
TrackPlayer.registerPlaybackService(() => require('./src/components/ActivateBand/service'));