import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
    {
        name: "Melvin C. Botavara",
        position: "President & CEO",
        image: "/team/melvin.png",
        fbLink: "https://www.facebook.com/mentormelvin.botavara"
    },
    {
        name: "Melchor S. Legaspi",
        position: "Co-Founder & COO ",
        image: "/team/melchor.png",
        fbLink: "https://www.facebook.com/melchor.legaspi.7"
    },
    {
        name: "Maria Jade Catalan-Opulencia, PHD",
        position: "Senior Advisor",
        image: "/team/mj.png",
        fbLink: "https://www.linkedin.com/in/maria-jade-c-opulencia-phd-72061145/"
    },
    {
        name: "Kimberly Charmaine Ganzon-Mahinay, MD",
        position: "Medical Director",
        image: "/team/doccharm.png",
        fbLink: "https://www.linkedin.com/in/maria-jade-c-opulencia-phd-72061145/"
    },
    {
        name: "Blessed C. Bagor",
        position: "Head of Information Technology",
        image: "/team/sidong.png",
        fbLink: "https://www.linkedin.com/in/blessed-bagor/"
    },
    {
        name: "Marita M. Dugang",
        position: "International Marketing Director",
        image: "/team/marita.png",
        fbLink: "https://www.facebook.com/unstoppablemarita"
    },
    {
        name: "Edgardo L. Colmenares",
        position: "Operations Manager",
        image: "/team/edgar.png",
        fbLink: "https://www.facebook.com/edgardo.colmenares.507"
    },
    {
        name: "Carl Drake Gallego, RPh",
        position: "Product Training Speaker",
        image: "/team/carl.png",
        fbLink: "https://www.facebook.com/carldrake.gallego"
    }
];

const MeetTheTeam = () => {
    return (
        <div className="rounded-md md:px-8 max-w-6xl px-2 flex flex-col antialiased bg-white dark:bg-black items-center justify-center relative overflow-hidden">
            <h2 className='mb-4 mt-20 text-2xl lg:text-4xl text-center text-gray-300'>
                The Team Behind It
            </h2>
            <p className='mb-20 text-lg text-center text-gray-300 max-w-2xl'>
                We are iGift, a lifestyle-driven business helping people live healthier, earn smarter, and move forward.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4 px-10">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="w-full max-w-sm border">
                        <CardHeader className="p-0 items-center">
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                height={200} 
                                width={200} 
                                priority={true}
                                className="rounded-t-xl w-full h-auto object-cover shadow-gray-700" 
                            />
                        </CardHeader>
                        <CardContent className="p-4 grid gap-4 text-center">
                            <Link href={member.fbLink} target="_blank" rel="noopener noreferrer">
                                <h2 className="text-md font-bold font-sans uppercase hover:text-gold">
                                    {member.name}
                                </h2>
                            </Link>
                            <p className='text-sm'>{member.position}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <p className='mb-20 mt-8 text-3xl text-center text-gray-300 max-w-2xl pt-8'>
            iGift is on a mission to help more people simplify life—better health, smarter choices, and real opportunities, all in one place.
            </p>
        </div>
    );
};

export default MeetTheTeam;
