import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialIcons";

import Home from "./screens/Home";
import Event from "./screens/Event";
const stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<stack.Navigator
				initialRouteName="home"
				screenOptions={{ headerShown: false }}>
				<stack.Screen
					name="Home"
					component={Home}
				/>
				<stack.Screen
					name="Event"
					component={Event}
					options={{
						headerShown: true,
						title: "Event 2777710",
						headerStyle: {
							backgroundColor: "#e8e8e8",
						},
						headerRight: () => (
							<Icon
								name="ios-share"
								size={20}
							/>
						),
					}}
				/>
			</stack.Navigator>
		</NavigationContainer>
	);
}
