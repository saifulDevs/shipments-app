import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import { Card } from "./Card";
import { LabeledInput } from "./LabeledInput";

type Address = {
  id: string;
  label: string;
  street: string;
  city: string;
  zipCode: string;
};

export function AddressSection() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      label: "Home",
      street: "123 Main St",
      city: "New York, NY",
      zipCode: "10001"
    },
    {
      id: "2",
      label: "Work",
      street: "456 Office Ave",
      city: "New York, NY",
      zipCode: "10002"
    },
  ]);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // New address form state
  const [newLabel, setNewLabel] = useState("");
  const [newStreet, setNewStreet] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newZipCode, setNewZipCode] = useState("");

  const handleAddNewAddress = () => {
    setShowModal(true);
  };

  const handleSaveAddress = () => {
    if (newLabel && newStreet && newCity && newZipCode) {
      const newAddress: Address = {
        id: Date.now().toString(),
        label: newLabel,
        street: newStreet,
        city: newCity,
        zipCode: newZipCode,
      };
      setAddresses([...addresses, newAddress]);
      setSelectedAddressId(newAddress.id);

      // Reset form
      setNewLabel("");
      setNewStreet("");
      setNewCity("");
      setNewZipCode("");
      setShowModal(false);
      setShowDropdown(false);
    }
  };

  const handleCancelModal = () => {
    setNewLabel("");
    setNewStreet("");
    setNewCity("");
    setNewZipCode("");
    setShowModal(false);
  };

  const selectedAddress = addresses.find((addr) => addr.id === selectedAddressId);

  return (
    <>
      <Card className="gap-4">
        <View className="gap-2.5 rounded-lg border border-border bg-inputBg ">


          <Pressable
            onPress={() => setShowDropdown(!showDropdown)}
            className=" flex-row items-center justify-between px-4 py-2"
          >
            <View>
              <Text className="text-[12px] font-medium text-textSecondary">
                My addresses
              </Text>
              <Text className={`text-[15px] ${selectedAddress ? "text-textMain" : "text-textSubtle"}`}>
                {selectedAddress
                  ? `${selectedAddress.label} - ${selectedAddress.street}, ${selectedAddress.city}`
                  : "Tap to select an address"}
              </Text>
            </View>
            <Ionicons
              name={showDropdown ? "chevron-up" : "chevron-down"}
              size={18}
              color="#6B7280"
            />
          </Pressable>

          {/* Dropdown list */}
          {showDropdown && addresses.length > 0 && (
            <View className="rounded-lg border border-border bg-white">
              {addresses.map((address, index) => (
                <Pressable
                  key={address.id}
                  onPress={() => {
                    setSelectedAddressId(address.id);
                    setShowDropdown(false);
                  }}
                  className={`px-4 py-3 ${index < addresses.length - 1 ? "border-b border-border" : ""
                    } ${selectedAddressId === address.id ? "bg-primaryLight" : ""}`}
                >
                  <Text className="text-[14px] font-medium text-textMain">{address.label}</Text>
                  <Text className="text-[13px] text-textSecondary">
                    {address.street}, {address.city} {address.zipCode}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        <Pressable onPress={handleAddNewAddress} className="flex-row items-center gap-2 pt-1">
          <View className="h-5 w-5 items-center justify-center rounded-full border-2 border-primary">
            <Ionicons name="add" size={14} color="#2563EB" />
          </View>
          <Text className="text-[13px] font-medium uppercase tracking-wide text-primary">
            ADD NEW ADDRESS
          </Text>
        </Pressable>
      </Card>

      {/* Add Address Modal */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancelModal}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-3xl p-6 pb-8">
            <View className="mb-6 flex-row items-center justify-between">
              <Text className="text-[20px] font-bold text-textMain">Add New Address</Text>
              <Pressable onPress={handleCancelModal}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="gap-4">
                <LabeledInput
                  label="LABEL (e.g., Home, Work)"
                  value={newLabel}
                  onChangeText={setNewLabel}
                  placeholder="Home"
                />

                <LabeledInput
                  label="STREET ADDRESS"
                  value={newStreet}
                  onChangeText={setNewStreet}
                  placeholder="123 Main St"
                />

                <LabeledInput
                  label="CITY, STATE"
                  value={newCity}
                  onChangeText={setNewCity}
                  placeholder="New York, NY"
                />

                <LabeledInput
                  label="ZIP CODE"
                  value={newZipCode}
                  onChangeText={setNewZipCode}
                  placeholder="10001"
                  keyboardType="numeric"
                />

                {/* Save Button */}
                <Pressable
                  onPress={handleSaveAddress}
                  className="mt-4 h-14 flex-row items-center justify-center rounded-xl bg-primary"
                >
                  <Text className="text-[16px] font-semibold text-white">
                    Save Address
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}
