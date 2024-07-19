import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PredictionCards = ({ navigation }) => {
	const cardsData = [
		{
			tradersCount: 19173,
			predictionQuestion: "Colombo Strickers to win the Eliminator vs kandy Falcons ?",
			description: "H2H last 5 T20 : CS 5 , KF 0 , DRAW 0",
			predictedYes: 0.9,
			predictedNo: 9.1,
			image: require("../assets/jersey1.png"),
		},
		{
			tradersCount: 311,
			predictionQuestion: "Bitcoin to be priced at 63649.99 USDT or more at 11:00 PM ?",
			description: "Bitcoin open price at 10:00 PM was 63649.99 USDT",
			predictedYes: 7.5,
			predictedNo: 2.5,
			image: require("../assets/bitcoin.png"),
		},
		{
			tradersCount: 5829,
			predictionQuestion: "India to win the next T20 match against Australia?",
			description: "H2H last 5 T20: IND 3, AUS 2, DRAW 0",
			predictedYes: 6.0,
			predictedNo: 4.0,
			image: require("../assets/jersey2.png"),
		},
		{
			tradersCount: 421,
			predictionQuestion:
				"Ethereum to be priced at 2000 USDT or more by the end of the day?",
			description: "Ethereum open price was 1950 USDT",
			predictedYes: 5.3,
			predictedNo: 4.7,
			image: require("../assets/eth.png"),
		},
		{
			tradersCount: 8293,
			predictionQuestion: "England to win the ODI series against Pakistan?",
			description: "H2H last 5 ODI: ENG 4, PAK 1, DRAW 0",
			predictedYes: 7.0,
			predictedNo: 3.0,
			image: require("../assets/jersey3.png"),
		},
		{
			tradersCount: 1123,
			predictionQuestion:
				"Ripple (XRP) to hit 1.50 USDT or more by the end of the week?",
			description: "Ripple open price was 1.45 USDT",
			predictedYes: 4.9,
			predictedNo: 5.1,
			image: require("../assets/ripple.png"),
		},
		{
			tradersCount: 3478,
			predictionQuestion: "South Africa to win the Test series against New Zealand?",
			description: "H2H last 5 Tests: SA 3, NZ 2, DRAW 0",
			predictedYes: 6.7,
			predictedNo: 3.3,
			image: require("../assets/jersey4.png"),
		},
		{
			tradersCount: 654,
			predictionQuestion: "Ton to reach 8 USDT or more by midnight?",
			description: "Ton open price was 7.8 USDT",
			predictedYes: 3.2,
			predictedNo: 6.8,
			image: require("../assets/ton.png"),
		},
		{
			tradersCount: 2947,
			predictionQuestion: "West Indies to win the T20 series against Bangladesh?",
			description: "H2H last 5 T20: WI 3, BAN 2, DRAW 0",
			predictedYes: 5.5,
			predictedNo: 4.5,
			image: require("../assets/jersey5.png"),
		},
		{
			tradersCount: 834,
			predictionQuestion:
				"Dogecoin to be priced at 0.30 USDT or more by the end of the day?",
			description: "Dogecoin open price was 0.28 USDT",
			predictedYes: 2.6,
			predictedNo: 7.4,
			image: require("../assets/doge.png"),
		},
	];
	const handleEventCardPress = (index) => {
		if (index === 0) {
			navigation.navigate("Event");
		}
	};
	return (
		<View className="flex flex-col items-center gap-4 my-1">
			{cardsData.map((card, index) => {
				return (
					<TouchableOpacity
						key={index}
						onPress={() => handleEventCardPress(index)}>
						<View className="bg-white w-[90%] flex flex-col p-4 rounded-xl border-[1px] border-[#d6d5d5] gap-2">
							<View className=" flex flex-row items-center justify-between">
								<View className="w-[80%] flex flex-col gap-3">
									<View className="flex flex-row items-center gap-1">
										<FontAwesome5
											name="user-friends"
											light
											color="gray"
											size={10}
										/>
										<Text className="text-[12px]">{`${card.tradersCount} traders`}</Text>
										<FontAwesome5
											name="angle-right"
											light
											color="gray"
											size={10}
										/>
									</View>
									<Text className="text-[14px]">
										{card.predictionQuestion}
									</Text>
									<Text className="text-[10px]">
										{card.description}{" "}
										<Text className="text-red-800">
											Read More
										</Text>{" "}
									</Text>
								</View>
								<View className="w-[20%] flex justify-center items-center ">
									<View className="bg-[#e8e8e8] p-2 rounded-lg">
										<Image
											source={card.image}
											className="w-10 h-10"
											resizeMode="cover"
										/>
									</View>
								</View>
							</View>
							<View className="flex flex-row justify-between">
								<View className="w-[48%] bg-blue-100 p-2 flex justify-center items-center rounded-md">
									<Text className="text-blue-500 font-bold">{`Yes ₹ ${card.predictedYes}`}</Text>
								</View>
								<View className="w-[48%] bg-red-100 p-2 flex justify-center items-center rounded-md">
									<Text className="text-red-400 font-bold">{`No ₹ ${card.predictedNo}`}</Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default PredictionCards;
