import Image from "next/image";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Getstart from "./components/Getstart";
import Testimonials from "./components/Testimonials";
import Addyourown from "./components/Addyourown";





export default function Home() {
  return (
    <>
      <Hero/>
     <Cards/>
     <Addyourown/>
     <Testimonials/>
     <Getstart/>
   
     
    </>
  );
}
