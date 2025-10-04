import { Mail, MapPin, Phone } from "lucide-react";

export const footerDetails =[
    {
        heading:"Quick Links",
        links:[
            {
                name:"Programs",
                url:"#"
            },
            {
                name:"Blog",
                url:"#"
            },
            {
                name:"Thursay Tribune",
                url:"#"
            },
            {
                name:"IMCE Sessions",
                url:"#"
            },
        ]
    },
        {
        heading:"Support",
        links:[
            {
                name:"Donate",
                url:"#"
            },
            {
                name:"Volunteer",
                url:"#"
            },
            {
                name:"Book Campaigns",
                url:"#"
            },
            {
                name:"Unashamed Pledges",
                url:"#"
            },
        ]
    }]

    export const contactDetails =[
         {
        heading:"Contact Us",
        links:[
            {
                icon: <MapPin size={20} className="inline mr-2" />,

               detail:"No 4, Awosika Street, Old Bodija, Ibadan.",
               second_detail:" " 
            },
            {
                icon: <Mail size={20} className="inline mr-2" />,
                detail:"asidofoundation@gmail.com",
               second_detail:" "
            },
            {
                icon: <Phone size  ={20} className="inline mr-2" />,
                detail:"+234 818 077 7458 ",
                second_detail:"+234 902 808 0416"

              
            },
        ]
    },
]
    