import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

import expoPushTokensApi from "../api/expoPushTokens";
// import logger from "../utility/logger";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } =
          await Notifications.requestForegroundPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        console.log("Failed to get push token for push notification!");
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } else {
      console.log("Error getting a push token", error);
    }
  };
};
