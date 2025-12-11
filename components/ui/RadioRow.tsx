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
        <View className={`h-5 w-5 items-center justify-center rounded-full ${selected ? "bg-primary border-2 border-primary" : "border-2 border-gray-300 bg-white"}`}>
          {selected && (
            <Text className="text-white text-[10px] font-bold">✓</Text>
          )}
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
