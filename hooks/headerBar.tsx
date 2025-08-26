// HeaderBar.tsx
import React from 'react';
import { COLORS } from '@/constants/theme';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";


interface HeaderBarProps { 
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}


export function useHeaderBar(props: HeaderBarProps) {
  const { left, center, right } = props;

  return { left, center, right };
}
