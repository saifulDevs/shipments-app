import { Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
};

export function LabeledInput({ label, value, onChangeText, placeholder }: Props) {
  return (
    <View className="gap-1.5">
      <Text className="text-[11px] font-medium uppercase tracking-[0.5px] text-textSecondary">
        {label}
      </Text>
      <View className="h-12 flex-row items-center rounded-xl bg-inputBg px-4">
        <TextInput
          className="flex-1 h-full text-[15px] text-textMain rounded-xl"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8E8E93"
        />
      </View>
    </View>
  );
}
