import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { AddressSection } from "../ui/AddressSection";
import { Card } from "../ui/Card";
import { DestinationList } from "../ui/DestinationList";
import { HeaderBar } from "../ui/HeaderBar";
import { LabeledInput } from "../ui/LabeledInput";
import { PrimaryButton } from "../ui/PrimaryButton";
import { ShippingMethodList } from "../ui/ShippingMethodList";
import { StepHeader } from "../ui/StepHeader";

export function NewShipmentScreen() {
  const [shipmentName, setShipmentName] = useState("Cyber Monday Items");
  const [description, setDescription] = useState("Electronics");
  const [selectedDestination, setSelectedDestination] = useState("anguilla");
  const [selectedMethod, setSelectedMethod] = useState("ocean");

  const handleSave = () => {
    // Logic to save the shipment would go here
    console.log({
      shipmentName,
      description,
      selectedDestination,
      selectedMethod,
    });
    router.dismiss();
  };

  return (
    <View className="gap-7">
      <HeaderBar title="New shipment" />

      {/* Step 1 */}
      <View className="gap-4">
        <StepHeader step={1} label="Enter shipment details" />
        <Card className="gap-4">
          <LabeledInput
            label="NAME YOUR SHIPMENT"
            value={shipmentName}
            onChangeText={setShipmentName}
            placeholder="e.g. Summer Clothes"
          />
          <LabeledInput
            label="SHIPMENT DESCRIPTION"
            value={description}
            onChangeText={setDescription}
            placeholder="e.g. T-shirts, Shorts"
          />
        </Card>
      </View>

      {/* Step 2 */}
      <View className="gap-4">
        <StepHeader step={2} label="Where is this shipment going?" />
        <Card className="gap-5">
          {/* shipsmart header */}
          <View className="flex-row items-center gap-3">
            <View className="h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              {/* simple logo square */}
              <View className="h-6 w-6 rounded-md bg-primary" />
            </View>
            <View className="flex-1">
              <Text className="text-[15px] font-semibold text-textMain">
                Ship with Shipsmart
              </Text>
              <Text className="text-[11px] text-textSecondary">
                SHIP DIRECTLY TO YOUR ISLAND
              </Text>
            </View>
          </View>

          {/* destinations */}
          <View className="gap-2">
            <Text className="text-[13px] font-medium text-textSecondary">
              Select a destination
            </Text>
            <DestinationList
              selectedId={selectedDestination}
              onSelect={setSelectedDestination}
            />
          </View>

          {/* ship method */}
          <View className="gap-2">
            <Text className="text-[13px] font-medium text-textSecondary">
              How do you want to ship?
            </Text>
            <ShippingMethodList
              selectedMethod={selectedMethod}
              onSelect={setSelectedMethod}
            />
          </View>
        </Card>
      </View>

      {/* Step 3 */}
      <View className="gap-4">
        <StepHeader step={3} label="Select delivery address" />
        <AddressSection />
      </View>

      <View className="mt-2">
        <PrimaryButton label="Save shipment" onPress={handleSave} />
      </View>
    </View>
  );
}
