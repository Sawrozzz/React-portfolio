import Image from "next/image";
import Nav from "./components/NavBar/page";
import Header from "./components/Header/page";
export default function Home() {
  return (
   <>
   <Header />
   <h1 className = 'font-sans'>This is Next Js portfolio</h1>
   </>
  );
}
