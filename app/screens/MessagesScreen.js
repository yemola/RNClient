import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
// import logger from "../utility/logger";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea assumenda iure, veniam ratione officiis sed fugiat nesciunt ab nisi? Fugit, expedita illo quam laborum incidunt voluptatibus, neque perferendis doloribus, labore rem molestiae necessitatibus a facere animi reiciendis reprehenderit similique explicabo possimus. Blanditiis laborum consequuntur omnis ratione deleniti possimus eum adipisci velit dolores cumque inventore, accusantium quidem! Maxime iure eius dignissimos pariatur, voluptas aliquam at ex corporis veniam ut voluptate libero voluptatum nesciunt molestias voluptatem rerum excepturi mollitia? Possimus, eveniet ullam laborum adipisci alias, velit nisi sit, nobis est eaque odit. Odio ipsa earum facere ut in porro nostrum ipsum minima.",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea assumenda iure, veniam ratione officiis sed fugiat nesciunt ab nisi? Fugit, expedita illo quam laborum incidunt voluptatibus, neque perferendis doloribus, labore rem molestiae necessitatibus a facere animi reiciendis reprehenderit similique explicabo possimus. Blanditiis laborum consequuntur omnis ratione deleniti possimus eum adipisci velit dolores cumque inventore, accusantium quidem! Maxime iure eius dignissimos pariatur, voluptas aliquam at ex corporis veniam ut voluptate libero voluptatum nesciunt molestias voluptatem rerum excepturi mollitia? Possimus, eveniet ullam laborum adipisci alias, velit nisi sit, nobis est eaque odit. Odio ipsa earum facere ut in porro nostrum ipsum minima.",
    image: require("../assets/yemi.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setrefreshing] = useState(false);
  const handleDelete = (message) => {
    // Delete the message
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/yemi.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
