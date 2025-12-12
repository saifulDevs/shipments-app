import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
};

export function LabeledInput({ label, value, onChangeText, placeholder, keyboardType }: Props) {
  return (
    <View className=" border bg-inputBg px-3 pb-2 border-gray-200 rounded">
      <Text className="text-[10px] font-medium uppercase pt-1 tracking-[0.5px] text-textSecondary">
        {label}
      </Text>

      <TextInput
        className="h-11  text-base font-medium text-textMain"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        keyboardType={keyboardType}
      />

    </View>
  );
}
