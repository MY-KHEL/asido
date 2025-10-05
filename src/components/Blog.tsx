import { blogDetails } from "@/data/blogDetails";
import { ChevronRight } from "lucide-react";
import { MobileBlog } from "./mobileBlog";

export function Blog() {
    return (
        <>
            <section className="lg:pt-[60px] lg:pb-[120px] lg:px-[80px] py-[60px] lg:py-0 px-[18px]">
                <h2 className=" text-[14px] lg:text-[24px] text-project-green">Stay Informed</h2>
                <p className=" text-[18px] lg:text-[31px] font-medium">Through advocacy, education, and support, were building a stigma-free future for mental health in Nigeria.</p>

                <MobileBlog/>

                <div className=" rounded-lg px-10 mt-[60px]">
                    <div className="px-[50px] lg:grid grid-cols-3 gap-[20px] hidden " >
                        {blogDetails.map((blog, index) => (
                            <div className=""  key={index} >
                            <section  className="[570px]">
                                <div className="w-full " >
                                    <img src={blog.url} alt={blog.title} className="h-auto object-contain " />

                                </div>
                                <div className="blog-text">
                                    <h3 className="text-[16px] xl:text-[25px] font-semibold mt-5">{blog.title}</h3>
                                </div>
                            </section>
                            <p className="text-project-blue font-semibold"> READ MORE <ChevronRight className="inline"/></p>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}