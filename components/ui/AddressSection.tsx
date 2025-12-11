
import { Pressable, Text, View } from "react-native";
import { Card } from "./Card";

export function AddressSection() {
  return (
    <Card className="gap-4">
      <View className="gap-1.5">
        <Text className="text-xs font-medium text-textSecondary">
          My addresses
        </Text>
        <View className="h-12 flex-row items-center justify-between rounded-xl bg-inputBg px-4">
          <Text className="text-[15px] text-textSecondary">
            Tap to select an address
          </Text>
          <Text className="text-lg text-textSecondary">⌄</Text>
        </View>
      </View>

      <Pressable className="flex-row items-center gap-2 pt-1">
        <View className="h-5 w-5 items-center justify-center rounded-full border-2 border-primary">
          <Text className="text-[14px] font-light text-primary">＋</Text>
        </View>
        <Text className="text-[13px] font-semibold uppercase tracking-wide text-primary">
          ADD NEW ADDRESS
        </Text>
      </Pressable>
    </Card>
  );
}
