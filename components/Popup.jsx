import React from "react";
import { Text, View, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Popup = ({ popupClose }) => {
	return (
		<View
			onPress={popupClose}
			className="absolute w-screen bg-[#00000050] h-screen flex flex-col justify-end">
			<View className="bg-[#e8e8e8] w-full h-[70%] rounded-t-3xl  flex">
				<View className="flex w-full flex-row p-6 justify-between">
					<View className="w-[75%]">
						<Text className="text-black font-bold text-base">
							Colombo Strickers to win the Eliminator vs kandy Falcons ?
						</Text>
					</View>
					<View className="bg-green-100 w-[16%] p-4 rounded-xl">
						<Image
							source={require("../assets/jersey3.png")}
							className="w-8 h-8"
							resizeMode="cover"
						/>
					</View>
				</View>
				<View className="bg-white flex flex-row rounded-full m-6 overflow-hidden my-4">
					<View className="w-[50%] p-2 flex flex-row justify-center items-center bg-blue-600 rounded-full">
						<Text className="text-white font-bold text-lg">Yes ₹0.9</Text>
					</View>
					<View className="w-[50%] p-2  flex flex-row justify-center items-center">
						<Text className="text-black font-bold text-lg">No ₹9.1</Text>
					</View>
				</View>
				<View className="bg-white flex flex-col rounded-xl m-6 border-[1px] border-gray-300 my-4">
					<View className="flex flex-row justify-center items-center p-2 rounded-md ">
						<FontAwesome5
							name="lightbulb"
							color="#e6a639"
							solid
							size={12}
						/>
						<Text className="ml-2">86% chance that you will win</Text>
					</View>
					<View className="flex flex-row">
						<View className="w-[50%] p-10 flex flex-col items-center">
							<Text className="text-xl font-bold">₹8.6</Text>
							<Text className="text-gray-600">you put</Text>
						</View>
						<View className="w-[50%] p-10 flex flex-col items-center">
							<Text className="text-xl font-bold text-green-800">
								₹10.0
							</Text>
							<Text className="text-gray-600">you get</Text>
						</View>
					</View>
					<View className="p-2 border-t border-t-gray-300 border-dashed ">
						<Text className="text-center text-green-700">
							{" "}
							<FontAwesome5 name="thumbs-up" /> High chances of win
						</Text>
					</View>
				</View>
				<View className="bg-white p-4">
					<View className="bg-gray-400 flex flex-row rounded-full p-2">
						<View className="w-12 h-12 rounded-full bg-white flex flex-row justify-center items-center">
							<FontAwesome5
								name="angle-double-right"
								size={20}
							/>
						</View>
						<View className=" w-[70%] flex flex-row justify-center items-center">
							<Text className="text-base text-white font-bold">
								Swipe for yes
							</Text>
						</View>
					</View>
				</View>
				<View className="p-4">
					<Text className="text-center">
						Available Balance : ₹1500.00 <FontAwesome5 name="info-circle" />
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Popup;
