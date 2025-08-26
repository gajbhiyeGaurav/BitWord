import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    titleU: {
        color: "#fff",
        fontSize: 20,
        paddingHorizontal: 10,
    },
    pageU: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.second,
    },
    headerU: {
        height: 50,
        width: 360,
        backgroundColor: COLORS.first,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation: 4,
    },
    containerU: {
        backgroundColor: "grey",
        height: 700,
        width: 350,
    },
    scrollViewE: {
        alignContent: "center",
        // height: 'auto',
    },
    panel1: {
        height: 'auto',
        width: 332,
        backgroundColor: "gray",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        // padding: 10,
        borderRadius: 14,
        marginHorizontal: 9,
        elevation: 4,
        marginTop: 10,
    },
    panelAccountE: {
        height: 50,
        width: 330,
        backgroundColor: "green",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 14,
        marginHorizontal: 9,
        elevation: 4,
    },
    paragraphE: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
        color: '#fff'
    },
    text1: {
        color: COLORS.first,
        fontSize: 15,
        margin: 15
    },
    subPostE: {
        height: 40,
        width: 330,
        backgroundColor: "green",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        borderRadius: 14,
        marginHorizontal: 9,
        elevation: 4,
    },
    spaceC: {
        flex: 1,
        height: 200,
    },
    container: { flex: 1, padding: 16, justifyContent: 'center' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    image: { width: 200, height: 200, alignSelf: 'center', marginVertical: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10, borderRadius: 8 },
    error: { color: 'red', marginTop: 10 },
    video: {
        width: '100%',
        height: 300,
        marginVertical: 20,
    },
    question: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
    option: {
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#eee',
        marginBottom: 10,
    },
    optionText: { fontSize: 16 },
    thankYou: { marginTop: 20, color: 'green', fontSize: 16 },
});