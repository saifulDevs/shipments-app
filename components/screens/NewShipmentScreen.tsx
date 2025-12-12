import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { AddressSection } from "../ui/AddressSection";
import { Card } from "../ui/Card";
import { DestinationList } from "../ui/DestinationList";
import { HeaderBar } from "../ui/HeaderBar";
import { LabeledInput } from "../ui/LabeledInput";
import { PrimaryButton } from "../ui/PrimaryButton";
import { ShipIcon } from "../ui/ShipIcon";
import { ShippingMethodList } from "../ui/ShippingMethodList";
import { StepHeader } from "../ui/StepHeader";

export function NewShipmentScreen() {
  const [shipmentName, setShipmentName] = useState("Black Friday Electronics");
  const [description, setDescription] = useState("Laptop, Headphones, Smart Watch");
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
    <View className="gap-6">
      <HeaderBar title="New shipment" />

      {/* Step 1 */}
      <View className="">
        <StepHeader step={1} label="Enter shipment details" />
        <Card className="gap-3">
          <LabeledInput
            label="NAME YOUR SHIPMENT"
            value={shipmentName}
            onChangeText={setShipmentName}
            placeholder="e.g. Holiday Shopping Package"
          />
          <LabeledInput
            label="SHIPMENT DESCRIPTION"
            value={description}
            onChangeText={setDescription}
            placeholder="e.g. Clothes, Electronics, Gifts"
          />
        </Card>
      </View>

      {/* Step 2 */}
      <View className="gap-4">
        <StepHeader step={2} label="Where is this shipment going?" />
        <Card className="bg-[#EFF7FF] gap-y-2 ">
          {/* shipsmart header */}
          <View className="flex-row items-center gap-3 border-b border-border pb-2">
            <View className="h-10 w-10 items-center justify-center rounded-xl ">
              {/* simple logo square */}
              <ShipIcon size={20} />
            </View>
            <View className="flex-1">
              <Text className="text-[15px] font-semibold leading-5 text-textMain">
                Ship with Shipsmart
              </Text>
              <Text className="text-[11px] leading-4 text-textSubtle">
                SHIP DIRECTLY TO YOUR ISLAND
              </Text>
            </View>
          </View>

          {/* destinations */}
          <View className="gap-2.5 border-b border-gray-200">
            <Text className="text-base font-medium text-textMain">
              Select a destination
            </Text>
            <DestinationList
              selectedId={selectedDestination}
              onSelect={setSelectedDestination}
            />
          </View>

          {/* ship method */}
          <View className="gap-2.5 ">
            <Text className="text-base font-medium text-textMain">
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
      <View className="">
        <StepHeader step={3} label="Select delivery address" />
        <AddressSection />
      </View>

      <View className="mt-8">
        <PrimaryButton label="Save shipment" onPress={handleSave} />
      </View>
    </View>
  );
}
