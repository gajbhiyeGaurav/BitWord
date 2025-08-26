import { Stack } from 'expo-router';

export default function _Layout() {
  return (
    <Stack>
      <Stack.Screen name="makeGroups" options={{ headerShown: false }} />
      <Stack.Screen name="uploadPolls" options={{ headerShown: false }} />
      <Stack.Screen name="uploadPostors" options={{ headerShown: false }} />
      <Stack.Screen name="uploadPosts" options={{ headerShown: false }} />
      <Stack.Screen name="uploadReels" options={{ headerShown: false }} />
      <Stack.Screen name="uploadVideos" options={{ headerShown: false }} />
    </Stack>
  );
}