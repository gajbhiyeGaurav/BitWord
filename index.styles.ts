import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    // index.tsx
    titleI: {
        color: "#fff",
        fontSize: 20,
        paddingHorizontal: 10,
    },
    containerI: {
        backgroundColor: "grey",
        height: 700,
        width: 350,
    },
    navigationContainerI: {
        backgroundColor: '#ecf0f1',
    },
    paragraphI: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
    pageI: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.second,
    },
    headerI: {
        height: 50,
        width: 360,
        backgroundColor: COLORS.first,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation: 4,
    },
});