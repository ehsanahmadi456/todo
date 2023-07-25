import { Detail, Title } from "@/mui/customize"
import Image from "next/image"

import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function AboutPage() {
    return (
        <div>
            <p className="!text-dark-500 !text-4xl font-bold dark:!text-dark-400">About Us</p>
            <div className="h-[2px] w-2/5 bg-tertiary my-4"></div>
            <div className="flex items-center justify-start my-3 gap-4">
                <Image
                    className="rounded-full overflow-hidden p-1 border-2 border-tertiary"
                    src='/images/ehsan.jpg'
                    alt='profile'
                    height={100}
                    width={100}
                />
                <div>
                    <Detail className="inline dark:!text-dark-300">Front End </Detail>
                    <Detail className="text-tertiary inline">Developer</Detail>
                </div>
            </div>
            <p className="font-dancing text-justify !text-dark-500 dark:!text-dark-300">
                As a front-end developer with two years of experience, I am a dedicated and hardworking member of the web development industry. I have the ability to work with JavaScript, NextJs, TypeScript, Redux, and more.
                Furthermore, I am passionate about delivering high-quality code and creating exceptional user experiences. I have a keen eye for design and am capable of translating complex ideas into sleek and user-friendly interfaces. With my expertise and dedication, I can be an invaluable asset to any front-end development team, creating value for what I am passionate about.
            </p>
            <div>
                <Title className="!text-dark-500 !mt-6 !mb-3 dark:!text-dark-400">Contact Us:</Title>
                <div className="flex flex-col items-start justify-center gap-4">
                    <a href="tel:+989961177886" target="_blank">
                        <div className="flex flex-wrap items-center justify-start gap-2" >
                            <PhoneIcon className="mr-2" />
                            <p>+98 996 117 7886</p>
                        </div>
                    </a>
                    <a href="mailto:ehsanahmadi8338@gmail.com?subject=Subject&body=" target="_blank">
                        <div className="flex flex-wrap items-center justify-start gap-2">
                            <EmailOutlinedIcon className="mr-2" />
                            <p>Ehsanahmadi8338@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ehsan-ahmadi-62219023b/" target="_blank">
                        <div className="flex flex-wrap items-center justify-start gap-2">
                            <LinkedInIcon className="mr-2" />
                            <p>My Linkedin</p>
                        </div>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default AboutPage