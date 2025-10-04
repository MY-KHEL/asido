import { Timeline } from "./Timeline";

export function Main() {
    return(
        <>
        <div className="lg:pt-50 lg:px-32 py-[60px] lg:py-0 px-[18px]">
            <p className="lg:text-[32px] font-medium">Since inception in 2019, Asido Foundation has led bold advocacy for mental health reforms. These range from public awareness campaigns to the passing of the 2021 Mental Health Act.</p>

            <div className="timeline mt-4">

                        <Timeline/>
            </div>
        </div>


        </>
    )
}