
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
};

export function HeaderBar({ title }: Props) {
  return (
    <View className="mb-4 flex-row items-center justify-between border-b border-gray-200 pb-4">
      <Text className="text-[28px] font-bold text-textMain">
        {title}
      </Text>

      <Pressable
        onPress={() => router.back()}
        className="h-[22px] w-[22px] items-center justify-center"
      >
        <Ionicons name="close" size={22} color="#6B7280" />
      </Pressable>
    </View>
  );
}
