import { images } from "@/constants/images";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title }: any) => {
  return focused ? (
    <ImageBackground
      className="flex-1 min-h-16 min-w-[112px] justify-center items-center flex-row w-full mt-4 rounded-full overflow-hidden"
      source={images.highlight}
    >
      <Image source={icon} tintColor="#151312" className="size-5" />
      <Text className="text-secondary text-base font-semibold ml-2">
        {title}
      </Text>
    </ImageBackground>
  ) : (
    <View className="size-full justify-center items-center rounded-full mt-4">
      <Image source={icon} tintColor="#A8B5DB" className="size-5"></Image>
    </View>
  );
};

export default TabIcon;
