import { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";

const Form = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");

  const handleLogin = (email: string, pass: string) => {
    if (email === "test@test.com" && pass === "1231") {
      setUser("Login autorizado!");
    } else {
      setUser("Login/Senha incorretos!");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Informe o email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Informe a senha"
        value={email}
        onChangeText={(text) => setPass(text)}
        secureTextEntry
      />
      <Button title="Entrar" onPress={() => handleLogin(email, pass)} />

      {user !== "" && <Text>{user}</Text>}
    </View>
  );
};

export default Form;
