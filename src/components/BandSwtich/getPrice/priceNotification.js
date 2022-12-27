import notifee from "@notifee/react-native"

export default async function priceNotification(data) {

    const channelId = await notifee.createChannel({
        id: "Price Notification",
        name: "Price Notification",
        vibration: false,
    });
    await notifee.displayNotification({
        id: "price",
        body:  `${data.symbol}:<br>${data.price}<br>${Math.round(data.percentage*100)/100}%`,
        android: {
            channelId,
            smallIcon: 'notification',
        color: "#000080"
        },
        data:{ type: "price"}
    });
}