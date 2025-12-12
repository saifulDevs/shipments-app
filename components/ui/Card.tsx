
import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

type Props = ViewProps & {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = " bg-white", ...rest }: Props) {
  return (
    <View
      className={`rounded-2xl px-4 py-4 shadow-card ${className}`}
      {...rest}
    >
      {children}
    </View>
  );
}
