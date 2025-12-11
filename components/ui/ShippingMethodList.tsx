import { Text, View } from "react-native";
import { RadioRow } from "./RadioRow";

type Props = {
  selectedMethod: string;
  onSelect: (id: string) => void;
};

export function ShippingMethodList({ selectedMethod, onSelect }: Props) {
  return (
    <View className="gap-2.5">
      <RadioRow
        label="Via Ocean"
        selected={selectedMethod === 'ocean'}
        compact
        onPress={() => onSelect('ocean')}
        rightContent={<Text className="text-xl">🚢</Text>}
      />
      <RadioRow
        label="Via Air"
        selected={selectedMethod === 'air'}
        compact
        onPress={() => onSelect('air')}
        rightContent={<Text className="text-xl">✈️</Text>}
      />
    </View>
  );
}
