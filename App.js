

import { useFonts } from "expo-font";
import fonts from "./Global/fonts";
import StackNavigator from "./navigation/StackNavigator";



export default function App() {
  const [loaded] = useFonts(fonts)



  if (!loaded) {
    return null;
  }

  return (
    <StackNavigator />
  )



}


