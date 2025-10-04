import { contactDetails, footerDetails } from "@/data/footerDetails";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <>
            <div className="bg-project-blue lg:pt-[87px] lg:pb-[60px] py-[60px] text-white relative">
                <div className="lg:grid lg:grid-cols-6 gap-[20px] ">

                    <div className=" lg:col-span-2 lg:px-[80px] px-[16px]">
                        <Image src="/white_logo.png" alt="White Logo" width={100} height={100} className="mx-auto"/>
                        <p className="text-white mt-[20px] lg:text-[16px] text-[12px] text-center">
                            Making mental health support accessible through advocacy and action
                        </p>

                        <div className="mt-[100px] lg:flex gap-4 items-center hidden ">
                            <Facebook size={24} color="white" fill="white" strokeWidth={1} />
                            <Twitter size={24} color="white" fill="white" strokeWidth={1} />
                            <Linkedin size={24} color="white" fill="white" strokeWidth={1} />
                            <Instagram size={24} color="white" strokeWidth={2} />


                        </div>
                    </div>
                    <div className="col-span-4  lg:mr-[80px] grid grid-cols-2 lg:grid-cols-3  gap-4 px-[20px] my-[20px]" >
                        {footerDetails.map((detail, index) => (
                            <div className=" border-t-1 lg:border-none" key={index}>
                                <h3 className="text-[14px] lg:text-[20px] font-semibold"> {detail.heading}</h3>
                                <ul>
                                    {detail.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="my-3">

                                            <a href={link.url} className="text-[12px] lg:text-[16px]">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {contactDetails.map((contact, index) => (
                            <div className=" col-span-2 lg:col-span-1 border-y-1 lg:border-none lg:py-0  z-30 py-[8px]" key={index}>
                                <h3 className="text-[14px] lg:text-[20px] font-semibold text-center "> {contact.heading}</h3>

                                {contact.links.map((detail, index) => (
                                    <div className="flex flex-row items-center  my-3 align-items" key={index}>
                                        {detail.icon}
                                        <div className="text-[14px] lg:text-[16px]">
                                            <div className="lg:hidden text-[14px]"> <p>{detail.detail} , {detail.second_detail}</p></div>
                                            <div className="hidden lg:block">
                                            <p>{detail.detail}</p>
                                            <p>{detail.second_detail}</p>
                                            </div>
                                            
                                            </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                </div>

                
                <div className="lg:px-[80px] px-[18px]">
                    <hr className="hidden lg:block my-4"/>
                  
                    <p className="text-[12px] lg:text-[16px] ">© 2025 Asido Foundation. All Rights Reserved.</p>
                </div>
<div className="hidden lg:block">
                <div className="absolute top-0 right-55"> 
                    <Image src={'/path58.png'} alt="path-image" width={360} height={360}/>
                </div>
                <div className="absolute top-0 right-0"> 
                    <Image src={'/path59.png'} alt="path-image" width={178} height={278}/>
                </div>
                <div className="absolute bottom-0 right-20"> 
                    <Image src={'/path60.png'} alt="path-image" width={182} height={253}/>
                </div>
                <div className="absolute bottom-0 right-120"> 
                    <Image src={'/path61.png'} alt="path-image" width={180} height={250}/>
                </div>
                <div className="absolute top-0 right-120"> 
                    <Image src={'/path62.png'} alt="path-image" width={178} height={253}/>
                </div>
                </div>
            </div>
        </>
    )
}
