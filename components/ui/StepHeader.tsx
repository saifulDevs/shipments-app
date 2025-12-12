
import { Text, View } from "react-native";

type Props = {
  step: number;
  label: string;
};

export function StepHeader({ step, label }: Props) {
  return (
    <View className="flex-row items-center gap-1.5">
      <Text className="text-xl font-semibold leading-6 text-primary">
        {step}
      </Text>
      <Text className="text-base font-semibold leading-5 text-textMain">
        {label}
      </Text>
    </View>
  );
}
