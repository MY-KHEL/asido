import { sublinks } from "@/data/subnavlinks";
import { Menu } from "lucide-react";

export function SubNav() {
    return(
        <>
        <div className=" lg:mt-7 lg:px-20 ">
            <nav className=" mx-auto w-full bg-project-grey lg:bg-white p-4 lg:p-0 lg:w-[60%]">
                <ul className="hidden lg:flex gap-10 justify-between items-center text-lg font-medium py-[15px] px-[24px]">
                    {sublinks.map((link,index) => (
                        <li key={index}><a href={link.url} className="text-project-blue   font-semibold uppercase hover:text-project-green">{link.name}</a></li>
                    ))}
                </ul>

                <ul className="flex justify-between lg:hidden">
                    {/* Meant to be the active tag gooten from the active from the path name */}
                    <li><a  href=" "className=" text-project-blue   font-semibold uppercase hover:text-project-green">MILESTONE</a></li>
                    <div className=""><Menu size={20} color="#0044B5"/></div>
                </ul>
                
            </nav>
            <hr className="hidden lg:block" />
                         

            
        </div>
        </>
    )
}