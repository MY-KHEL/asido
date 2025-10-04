import Image from "next/image";

export function Herosection() {
    return (
        <>
     <div className=" bg-blue-50 h-[180px] lg:h-[540px] w-full relative">
        <Image src={'/asido-hero.png'} alt="Hero Image" fill   className="object-cover"/>

     </div>

        </>
    );
}