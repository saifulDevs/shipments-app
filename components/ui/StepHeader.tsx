
import { Text, View } from "react-native";

type Props = {
  step: number;
  label: string;
};

export function StepHeader({ step, label }: Props) {
  return (
    <View className="flex-row items-center gap-3">
      <Text className="text-[20px] font-bold text-primary">
        {step}
      </Text>
      <Text className="text-[17px] font-semibold text-textMain">
        {label}
      </Text>
    </View>
  );
}
