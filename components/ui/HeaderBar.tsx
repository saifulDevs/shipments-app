
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
};

export function HeaderBar({ title }: Props) {
  return (
    <View className="mb-4 flex-row items-center justify-between">
      <Text className="text-[28px] font-bold text-textMain">
        {title}
      </Text>

      <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-dangerBg">
        <Text className="text-[22px] font-light text-danger">×</Text>
      </Pressable>
    </View>
  );
}
