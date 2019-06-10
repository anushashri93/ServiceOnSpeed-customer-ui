import { Permissions, Notifications } from 'expo';
import axios from 'axios';
import generatePushToken from "./PushNotification"

export default (async function registerForPushNotificationsAsync() {
  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
  let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  // Stop here if the user did not grant permissions
  if (status !== 'granted') {
    return;
  }
  
  // Get the token that uniquely identifies this device 
  let token = await Notifications.getExpoPushTokenAsync();
  alert(token)

// Notofication Object Creation
const objectNotification = {
    to : "ExponentPushToken[ay70foPll7zjdOtfO8pWPH]",
    title : "Hi",
    body : "Deva",
    data : {
            "status" : 1
           }
}

// To generate the Push Token on Merchant Side
if(token!== null){
    generatePushToken(objectNotification.to, objectNotification.title, objectNotification.body, objectNotification.data);
    
}

});