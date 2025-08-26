import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    videoContainerR: {
        height: height,
        width: '100%',
        backgroundColor: 'black',
    },
    buttonContainer1R: {
        position: 'absolute',
        right: 20,
        bottom: 80,
        alignItems: 'center',
        gap: 4,
    },
    button1R: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
});
