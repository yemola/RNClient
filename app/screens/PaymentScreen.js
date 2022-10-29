import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function PaymentScreen(props) {
  return (
    <View style={styles.wrapper}>
      <AppButton title="Pay" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: "70%",
    justifyContent: "center",
  },
});

export default PaymentScreen;
