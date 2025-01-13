import { Text, Image, View, Button } from "react-native";

import { api } from "../services/api";
import { useEffect, useState } from "react";

export const Game = () => {
  const [game, setGame] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getGames() {
      try {
        const response = await api.get("next-api/?api=game&id=15");
        setGame({
          title: response.data.title,
          image_url: response.data.image_url,
        });
      } catch (err: any) {
        setError("Error ao buscar dados");
      }
    }
    getGames();
  }, []);

  async function getNewGame() {
    try {
      const response = await api.get("next-api/?api=game&id=4");
      setGame({
        title: response.data.title,
        image_url: response.data.image_url,
      });
    } catch (err: any) {
      setError("Error ao buscar dados");
    }
  }

  return (
    <View>
      {game && (
        <>
          <Image
            source={{ uri: game.image_url }}
            style={{ width: 70, height: 70, borderRadius: 99 }}
            testID="avatar"
          />
          <Text>{game.title}</Text>
        </>
      )}

      <Button title="Trocar" onPress={getNewGame} />
      <View>{error !== "" && <Text>{error}</Text>}</View>
    </View>
  );
};
