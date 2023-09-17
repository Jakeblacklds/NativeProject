import { Home,Products } from "./Screens"
import { useState } from 'react';
import { useFonts } from "expo-font";
import fonts from "./Global/fonts";



export default function App() {
  const [loaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')

  const handleBackToHome = () => {
    setCategorySelected(''); // Cambia categorySelected para volver a la pantalla de inicio
  }

  if (!loaded) {
    return null;
  }

  return categorySelected ? (
    <Products category={categorySelected} onBackToHome={handleBackToHome} />
  ) : (
    <Home setCategorySelected={setCategorySelected} />
  )
}


