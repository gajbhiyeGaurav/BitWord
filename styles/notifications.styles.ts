import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  titleN: {
    color: "#fff",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  containerN: {
    backgroundColor: "grey",
    height: 700,
    width: 350,
  },
  navigationContainerN: {
    backgroundColor: '#ecf0f1',
  },
  paragraphN: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  pageN: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.second,
  },
  headerN: {
    height: 50,
    width: 360,
    backgroundColor: COLORS.first,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
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
  paragraphE: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
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
  spaceC: {
    flex:1,
    height: 200,
  },
  scrollViewC: {
    alignContent: "center",
  },
});
