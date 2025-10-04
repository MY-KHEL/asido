import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { Herosection } from "@/components/Herosection";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { SubNav } from "@/components/Subnav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
         <Herosection />
       <SubNav />
      <Main />
          <Blog />
        <Footer />
      </div>
    </>
  );
}
