import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    titleC: {
    color: "#fff",
    fontSize: 20,
    paddingHorizontal:10,
  },
  containerC:{
    backgroundColor: "grey",
    height: 700,
    width: 350,
  },
   navigationContainerC: {
    backgroundColor: '#ecf0f1',
  },
  paragraphC: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  pageC: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.second,
  },
  headerC: {
    height: 50,
    width: 360,
    backgroundColor: COLORS.first,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    elevation: 4,
  },
  scrollViewC: {
    alignContent: "center",
  },
  panelC: {
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
  spaceC: {
    flex:1,
    height: 200,
  },
});