
import { Pressable, Text } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
};

export function PrimaryButton({ label, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="h-14 flex-row items-center justify-center rounded-xl bg-primary"
    >
      <Text className="text-[16px] font-semibold text-white">
        {label}
      </Text>
      <Text className="ml-2 text-xl text-white">›</Text>
    </Pressable>
  );
}
