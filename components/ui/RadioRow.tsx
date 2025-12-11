import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  selected?: boolean;
  showFlag?: boolean;
  compact?: boolean;
  onPress?: () => void;
  rightContent?: ReactNode;
};

export function RadioRow({ label, selected, showFlag, compact, onPress, rightContent }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center justify-between rounded-xl px-4 ${compact ? "py-3" : "py-3.5"
        } ${selected ? "bg-primary/5 border border-primary/20" : "bg-inputBg"}`}
    >
      <View className="flex-row items-center gap-3">
        <View className={`h-5 w-5 items-center justify-center rounded-full border-2 ${selected ? "border-primary" : "border-gray-300"} bg-white`}>
          {selected ? (
            <View className="h-2.5 w-2.5 rounded-full bg-primary" />
          ) : null}
        </View>
        <Text className="text-[15px] font-normal text-textMain">{label}</Text>
      </View>

      {rightContent || (showFlag ? (
        <View className="h-5 w-7 flex-row overflow-hidden rounded">
          <View className="flex-1 bg-primary" />
          <View className="flex-1 bg-yellow-400" />
          <View className="flex-1 bg-green-500" />
        </View>
      ) : null)}
    </Pressable>
  );
}
