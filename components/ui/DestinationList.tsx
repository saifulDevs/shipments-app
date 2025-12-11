import { Text, View } from "react-native";
import { RadioRow } from "./RadioRow";

const destinations = [
  { id: "anguilla", label: "Anguilla", flag: "🇦🇮" },
  { id: "dominica", label: "Dominica", flag: "🇩🇲" },
  { id: "st-lucia", label: "St. Lucia", flag: "🇱🇨" },
];

type Props = {
  selectedId: string;
  onSelect: (id: string) => void;
};

export function DestinationList({ selectedId, onSelect }: Props) {
  return (
    <View className="gap-2.5">
      {destinations.map((item) => (
        <RadioRow
          key={item.id}
          label={item.label}
          selected={item.id === selectedId}
          onPress={() => onSelect(item.id)}
          rightContent={<Text className="text-2xl">{item.flag}</Text>}
        />
      ))}
    </View>
  );
}
