
import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

type Props = ViewProps & {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "", ...rest }: Props) {
  return (
    <View
      className={`rounded-2xl bg-white px-4 py-5 shadow-card ${className}`}
      {...rest}
    >
      {children}
    </View>
  );
}
