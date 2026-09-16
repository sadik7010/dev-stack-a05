import { Suspense } from "react";
import Hero from "./components/Hero"
import MainLayout from "./components/MainLayout";
import Navbar from "./components/Navbar"
import type { Itecnologis } from "./types";

const tecnologisPromisFatch = async (): Promise<Itecnologis[]> => {
  const res = await fetch('/public/technologies.json');
  const data = await res.json();
  return data;
}

function App() {
 const tecnologisPromis = tecnologisPromisFatch();

  return (

    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Suspense fallback={<p>Loading.......</p>}>
      <MainLayout tecnologisPromis={tecnologisPromis}></MainLayout>
     </Suspense>
    </>
  )
}

export default App
