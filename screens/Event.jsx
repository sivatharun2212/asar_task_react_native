import React, { useState } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Popup from "../components/Popup";

const Event = () => {
	const [openPopup, setOpenPopup] = useState(false);
	const activityData = [
		{
			icon: () => (
				<View className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
					<FontAwesome5
						name="user"
						color="white"
						solid
						size={16}
					/>
				</View>
			),
			name: "prober",
			yes: "₹ 8.6",
			no: "₹ 1.4",
			opponent: "#Rkss",
		},
		{
			icon: () => (
				<View className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
					<FontAwesome5
						name="user"
						color="white"
						solid
						size={16}
					/>
				</View>
			),
			name: "prober",
			yes: "₹ 8.6",
			no: "₹ 1.4",
			opponent: "#Rkss",
		},
		{
			icon: () => (
				<View className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
					<FontAwesome5
						name="user"
						color="white"
						solid
						size={16}
					/>
				</View>
			),
			name: "prober",
			yes: "₹ 8.6",
			no: "₹ 1.4",
			opponent: "#Rkss",
		},
		{
			icon: () => (
				<View className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
					<FontAwesome5
						name="user"
						color="white"
						solid
						size={16}
					/>
				</View>
			),
			name: "prober",
			yes: "₹ 8.5",
			no: "₹ 1.5",
			opponent: "#Rkss",
		},
		{
			icon: () => (
				<View className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
					<FontAwesome5
						name="user"
						color="white"
						solid
						size={16}
					/>
				</View>
			),
			name: "prober",
			yes: "₹ 8.5",
			no: "₹ 1.5",
			opponent: "#Rkss",
		},
	];

	const popupClose = () => {
		setOpenPopup(false);
	};
	return (
		<SafeAreaView className="bg-[#e8e8e8] flex-1">
			<ScrollView>
				<View className="flex flex-col items-center p-10 gap-6">
					<View className="bg-green-100 p-4 rounded-xl">
						<Image
							source={require("../assets/jersey3.png")}
							className="w-12 h-12"
							resizeMode="cover"
						/>
					</View>
					<View className="bg-gray-300 p-2 rounded-full">
						<Text>CS vs KF</Text>
					</View>
					<Text className="text-xl text-center font-semibold">
						Colombo Strickers to win the Eliminator vs kandy Falcons ?
					</Text>
				</View>
				<View className="flex flex-col items-center p-4 gap-4">
					<View className="flex flex-row bg-white w-[90%] border-[1px] border-gray-300 justify-center items-center p-2 rounded-md ">
						<FontAwesome5
							name="lightbulb"
							color="#e6a639"
							solid
							size={15}
						/>
						<Text className="ml-2">
							H2H last 5 T20 : CS 5 , KF 0 , DRAW 0
						</Text>
					</View>
					<View className="flex flex-col gap-2 items-center">
						<Text className="uppercase font-bold text-gray-700 text-[12px] ">
							the market predicts
						</Text>
						<Text className="font-bold text-blue-700 text-[22px]">
							91% propability of No
						</Text>
					</View>
				</View>
				<View className="w-58 h-80 bg-red-400 m-4 rounded-lg overflow-hidden">
					<Image
						className="w-[100%] h-[100%]"
						source={require("../assets/graph.jpg")}
						resizeMode="cover"
					/>
				</View>
				<View className="flex flex-col p-4 gap-4">
					<Text className="font-bold text-lg capitalize">insights</Text>
					<View className="bg-white p-4 rounded-xl flex flex-col">
						<Text className="font-bold text-black">
							How to trade on Match win events
						</Text>
						<Text className="font-bold text-gray-600">
							How to trade on Match win events
						</Text>
						<View className="border-[1px] border-gray-300 mt-2 rounded-md">
							<View className="w-58 h-36 rounded-lg rounded-b-none overflow-hidden">
								<Image
									className="w-[100%] h-[100%]"
									resizeMode="cover"
									source={require("../assets/banner.jpg")}
								/>
							</View>
							<Text className="px-2 capitalize">youtube</Text>
							<Text className="px-2 mb-2 capitalize">
								updated 2 days ago
							</Text>
						</View>
					</View>
				</View>

				<View className="bg-white w-full">
					<View className=" flex- flex-row px-2 gap-4 ">
						<View className="border-b-2 p-2">
							<Text className="text-sm font-bold">Activity</Text>
						</View>
						<View className=" p-2">
							<Text className="text-sm font-bold">Order Book</Text>
						</View>
					</View>
					<View className="w-full bg-[#f2f2f2]">
						{activityData.map((data, index) => {
							return (
								<View
									key={index}
									className="bg-[#f2f2f2] w-full flex flex-row border-y-[1px] border-gray-300 p-4">
									<View className="w-[15%] flex flex-col justify-center items-center gap-2">
										{data.icon()}
										<Text>{data.name}</Text>
									</View>
									<View className="w-[70%] p-4 flex flex-col gap-2 items-center">
										<View className="flex flex-row w-full rounded-md overflow-hidden">
											<View className="w-[74%] bg-blue-100 p-1 flex flex-row justify-start px-2">
												<Text className="text-blue-500">
													{data.yes}
												</Text>
											</View>
											<View className="w-[26%] bg-red-100 p-1 flex flex-row justify-end px-2">
												<Text className="text-red-500">
													{data.no}
												</Text>
											</View>
										</View>
										<Text className="text-xs text-gray-500">
											a few seconds ago
										</Text>
									</View>
									<View className="w-[15%] flex flex-col justify-center items-center gap-2">
										{data.icon()}
										<Text>{data.opponent}</Text>
									</View>
								</View>
							);
						})}
						<View className="mx-6 my-2 border-[1px] border-gray-300 bg-white rounded-md px-4 py-2 flex flex-row justify-center">
							<Text>
								Show More
								<FontAwesome5
									name="chevron-right"
									light
								/>
							</Text>
						</View>
					</View>
				</View>

				<View className="px-4 py-6 bg-white mt-2">
					<Text className="p-4 text-lg font-bold">About the event</Text>
					<View className="border-b-[1px] border-gray-300 flex flex-col">
						<View className="flex flex-row justify-start p-2">
							<View className="flex flex-col w-[50%] gap-2">
								<Text className="text-gray-500 text-xs">
									Traders
								</Text>
								<Text>6.7k</Text>
							</View>
							<View className="flex flex-col w-[50%] gap-2">
								<Text className="text-gray-500 text-xs">
									Volume
								</Text>
								<Text>₹34.3L</Text>
							</View>
						</View>
						<View className="flex flex-row justify-start p-2">
							<View className="flex flex-col w-[50%] gap-2">
								<Text className="text-gray-500 text-xs">
									Started at
								</Text>
								<Text>Jul 18, 2024 7:00 PM</Text>
							</View>
							<View className="flex flex-col w-[50%] gap-2">
								<Text className="text-gray-500 text-xs">
									Ending at
								</Text>
								<Text>Jul 20, 2024 2:00 AM</Text>
							</View>
						</View>
					</View>

					<View className="border-b-[1px] border-gray-300 p-4 flex flex-row items-center justify-between">
						<View className="flex flex-col gap-2">
							<Text className="font-bold text-black">OverView</Text>
							<Text className="text-gray-400">
								information about the event
							</Text>
						</View>
						<FontAwesome5
							name="chevron-right"
							light
						/>
					</View>
					<View className="border-b-[1px] border-gray-300 p-4 flex flex-row items-center justify-between">
						<View className="flex flex-col gap-2">
							<Text className="font-bold text-black">
								Source of truth
							</Text>
							<Text className="text-gray-400">
								information about source of truth
							</Text>
						</View>
						<FontAwesome5
							name="chevron-right"
							light
						/>
					</View>
					<View className=" p-4 flex flex-row items-center justify-between">
						<View className="flex flex-col gap-2">
							<Text className="font-bold text-black">Rules</Text>
							<Text className="text-gray-400">
								Terms and conditions
							</Text>
						</View>
						<FontAwesome5
							name="chevron-right"
							light
						/>
					</View>
					<View className="w-58 h-36 rounded-lg rounded-b-none overflow-hidden">
						<Image
							className="w-[100%] h-[100%]"
							resizeMode="cover"
							source={require("../assets/banner2.jpg")}
						/>
					</View>
				</View>
			</ScrollView>
			<View className="bg-white py-4">
				<View className="flex flex-row justify-evenly">
					<TouchableOpacity
						onPress={() => setOpenPopup(true)}
						className=" w-[45%] flex flex-row ">
						<View className=" bg-blue-100 border-[1px] border-blue-300 w-full p-2 flex justify-center items-center rounded-md">
							<Text className="text-blue-500 font-bold">Yes ₹0.9</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setOpenPopup(true)}
						className=" w-[48%]  flex flex-row justify-between">
						<View className=" w-full bg-red-100 border-[1px] border-red-300 p-2 flex justify-center items-center rounded-md">
							<Text className="text-red-400 font-bold">No ₹9.1</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			{openPopup && <Popup popupClose={popupClose} />}
		</SafeAreaView>
	);
};

export default Event;
