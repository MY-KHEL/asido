import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { blogDetails } from "@/data/blogDetails"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export function MobileBlog() {
  return (
    <div className="w-full lg:hidden">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="gap-2 w-fit ">
          {blogDetails.map((blog, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="mx-auto mt-3  w-[20] "> 
                <Card className="shadow-none bg-transparent">
                  <CardContent className="flex flex-col w-[90%]  ">
                    
                    <div className="relative  h-[270px] sm:h-48">
                      <Image
                        src={blog.url}
                        alt={blog.title}
                        fill
                        className="object-cover  "
                      />
                    </div>

                    {/* Text */}
                    <div className="mt-2 px-4">
                      <h3 className="text-[16px] font-semibold">{blog.title}</h3>
                      <p className="text-[12px] text-project-blue font-semibold mt-1 flex items-center">
                        READ MORE <ChevronRight className="inline ml-1" />
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
