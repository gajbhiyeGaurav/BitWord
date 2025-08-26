import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    pageE: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.second,
    },
    headerE: {
        height: 50,
        width: 360,
        backgroundColor: COLORS.first,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation: 4,
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
    scrollViewE: {
        alignContent: "center",
        // height: 'auto',
    },
    containerE: {
        backgroundColor: "grey",
        height: 700,
        width: 350,
    },
    containerVideoE: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    videoE: {
        width: 320,
        height: 180,
    },
    paragraphE: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
        color: '#fff'
    },
    paragraphE1: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
    panelE: {
        height: 60,
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
    panelAccountListE: {
        height: 60,
        width: 330,
        backgroundColor: "green",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 14,
        marginHorizontal: 9,
        elevation: 4,
        marginTop: 5,
    },
    text1: {
        color: COLORS.first,
        fontSize: 15,
        margin: 15
    },
    containerTabView: {
        // marginTop: 40,
        flex: 1,
    },
    searchbarE: {
        height: 45,
        width: 330,
    },
    header: {
        height: 60,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerPoll: { flex: 1, padding: 16, backgroundColor: '#fff' },
    pollContainer: { marginBottom: 24 },
    questionText: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
    optionButton: {
        padding: 12,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        marginBottom: 8,
    },
    optionText: { fontSize: 16 },
    spaceC: {
        flex:1,
        height: 200,
    },
});
