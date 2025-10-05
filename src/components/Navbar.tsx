import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/data/navlinks";
import { Menu, Search } from "lucide-react";
import Image from "next/image";

export function Navbar() {
    return (
        <>
            <div className="w-full py-[18px] px-6 lg:py-5 xl:pl-32 xl:pr-28 shadow-md lg:shadow-none">
                <div className="flex lg:py-5 justify-between">
                    <div className="lg:w-[164px] lg:h-[44]  w-[96px] h-[25px] relative">
                    <Image src={'/asido.png'} alt="logo" fill  className="object-contain"/>
                    </div>
                    <div className="icon flex items-center gap-6">
                        <div className="lg:outline-project-blue  lg:outline-2 lg:p-2 rounded-full"><Search size={20} color="#0044B5" /></div>





                        
                        <Sheet>
  <SheetTrigger><div className="lg:hidden"><Menu size={20} color="#0044B5"/></div></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
      <SheetDescription>
    <nav>
         <ul className="flex flex-col  gap-10 text-lg font-medium ">
                            {links.map((link,index) => (
                                <li key={index}><a href={link.url} className="text-project-blue font-semibold uppercase hover:text-project-green">{link.name}</a></li>
                            ))}
                          

                        </ul>
    </nav>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
                    </div>
                </div>







                <div className="hidden lg:flex  justify-between items-center">
                    <nav>
                        <ul className="flex gap-10 text-lg font-medium ">
                            {links.map((link,index) => (
                                <li key={index}><a href={link.url} className="text-project-blue font-semibold xl:text-lg md:text-[16px] uppercase hover:text-project-green">{link.name}</a></li>
                            ))}
                          

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4 text-lg font-medium">
                        <p className="uppercase text-project-blue font-semibold hover:text-project-green">Take the Pledge</p>
                        <button className="bg-project-green text-white py-3 px-6 cursor-pointer rounded ring-none hover:bg-white hover:ring-3 hover:ring-project-green  hover:text-project-green">DONATE</button>
                    </div>

                </div>
            </div>
        </>
    )

}