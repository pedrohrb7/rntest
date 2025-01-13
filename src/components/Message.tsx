import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Message() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <View>
      <Text testID="message">
        {showMessage ? "Seja bem-vindo" : "loading..."}
      </Text>

      <Button title="Acessar" onPress={() => setShowMessage(!showMessage)} />
    </View>
  );
}
