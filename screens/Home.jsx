import React from "react";
import { Text, View, StatusBar, ScrollView, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PredictionCards from "../components/PredictionCards";
const Home = ({ navigation }) => {
	const screenWidth = Dimensions.get("window").width;
	const images = [
		require("../assets/image1.jpg"),
		require("../assets/image2.jpg"),
		require("../assets/image3.jpg"),
		require("../assets/image4.jpg"),
	];

	const trendingData = [
		{
			image: require("../assets/bitcoin.png"),
			title: "Bitcoin",
			live: true,
		},
		{
			image: require("../assets/youtube.png"),
			title: "Youtube",
			live: false,
		},
		{
			image: require("../assets/csvkf.png"),
			title: "CSvKF",
			live: false,
		},
		{
			image: require("../assets/eth.png"),
			title: "Ethereum",
			live: true,
		},
		{
			image: require("../assets/tesla.png"),
			title: "Stocks - Tesla",
			live: true,
		},
		{
			image: require("../assets/olympics.png"),
			title: "Olympics 2024",
			live: false,
		},
		{
			image: require("../assets/entertainment.png"),
			title: "Entertainment",
			live: false,
		},
		{
			image: require("../assets/expiring.png"),
			title: "Expiring Soon",
			live: true,
		},
		{
			image: require("../assets/budget.png"),
			title: "Budget FY 24-25",
			live: false,
		},
		{
			image: require("../assets/salvche.png"),
			title: "SALvCHE",
			live: false,
		},
		{
			image: require("../assets/tron.png"),
			title: "Stocks - Tron",
			live: false,
		},
		{
			image: require("../assets/sports.png"),
			title: "Sports News",
			live: false,
		},
		{
			image: require("../assets/growth.png"),
			title: "Growth",
			live: false,
		},
	];

	const firstRowData = trendingData.filter((_, index) => index % 2 === 0);
	const secondRowData = trendingData.filter((_, index) => index % 2 !== 0);
	return (
		<SafeAreaView className="bg-[#e8e8e8] flex-1">
			<StatusBar
				barStyle="dark-content"
				backgroundColor="#e8e8e8"
			/>
			<View className="flex-row justify-between px-4 py-2">
				<View className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
					<FontAwesome5
						name="user"
						color="white"
						solid
						size={16}
					/>
				</View>
				<View className="flex flex-row gap-4">
					<View className="w-10 h-10 border-[2px] border-gray-300 rounded-full flex justify-center items-center bg-[#f0f0f0]">
						<FontAwesome5
							name="wallet"
							light
							size={16}
						/>
					</View>
					<View className="w-10 h-10 border-[2px] border-gray-300 rounded-full flex justify-center items-center bg-[#f0f0f0] relative">
						<FontAwesome5
							name="bell"
							light
							size={16}
						/>
						<View className="w-2 h-2 bg-red-500 rounded-full absolute top-0 right-0"></View>
					</View>
				</View>
			</View>

			<ScrollView>
				<View className="w-full h-[100px]  flex flex-row justify-between p-4">
					<View className="bg-white w-[20%] flex flex-col justify-between py-2 items-center rounded-md">
						<Image
							className="w-8 h-8"
							resizeMode="cover"
							source={require("../assets/ball.png")}
						/>
						<Text className="text-[12px]">Cricket</Text>
					</View>
					<View className="bg-white w-[20%] flex flex-col justify-between py-2 items-center rounded-md">
						<Image
							className="w-8 h-8"
							resizeMode="cover"
							source={require("../assets/crypto.png")}
						/>
						<Text className="text-[12px]">Crypto</Text>
					</View>
					<View className="bg-white w-[20%] flex flex-col justify-between py-2 items-center rounded-md">
						<Image
							className="w-8 h-8"
							resizeMode="cover"
							source={require("../assets/economy.png")}
						/>
						<Text className="text-[12px]">Economy</Text>
					</View>
					<View className="bg-white w-[20%] flex flex-col justify-between py-2 items-center rounded-md">
						<Image
							className="w-8 h-8"
							resizeMode="cover"
							source={require("../assets/showmore.png")}
						/>
						<Text className="text-[12px]">Show more</Text>
					</View>
				</View>

				<ScrollView
					className="flex flex-row gap-4 mx-2"
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					decelerationRate="fast"
					snapToInterval={400}
					snapToAlignment="center">
					{images.map((image, index) => (
						<View
							key={index}
							className="w-96 h-32 rounded-lg overflow-hidden">
							<Image
								style={{ backgroundPosition: "center" }}
								className="w-full h-full"
								source={image}
								resizeMode="cover"
							/>
						</View>
					))}
				</ScrollView>
				<View className="my-3">
					<Text className="ml-4 text-sm">Trending Now</Text>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}>
						<View className="flex flex-col gap-2">
							<View className="flex flex-row gap-4">
								{firstRowData.map((data, index) => {
									return (
										<View
											key={index}
											className="flex flex-row items-center gap-2 bg-white p-2 rounded-md relative">
											<Image
												className="w-6 h-6"
												source={data.image}
												resizeMode="cover"
											/>
											<Text>{data.title}</Text>
											{data.live && (
												<View className="absolute bottom-10 right-5 z-20 bg-red-500 rounded-sm">
													<Text className="text-[8px] uppercase font-semibold text-white px-[4px]">
														live
													</Text>
												</View>
											)}
										</View>
									);
								})}
							</View>
							<View className="flex flex-row gap-4">
								{secondRowData.map((data, index) => {
									return (
										<View
											key={index}
											className="flex flex-row items-center gap-2 bg-white p-2 rounded-md">
											<Image
												className="w-6 h-6"
												source={data.image}
												resizeMode="cover"
											/>
											<Text>{data.title}</Text>
											{data.live && (
												<View className="absolute bottom-10 right-5 z-20 bg-red-500 rounded-sm">
													<Text className="text-[8px] uppercase font-semibold text-white px-[4px]">
														live
													</Text>
												</View>
											)}
										</View>
									);
								})}
							</View>
						</View>
					</ScrollView>
				</View>
				<PredictionCards navigation={navigation} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
