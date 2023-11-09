import YouTube from "react-youtube";
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Logo } from "@/svg/Logo";

export default function Page404() {
    return <div className="flex flex-col relative w-full h-screen justify-center items-center overflow-hidden gap-4 bg-[#ed9453]">
        <div className="text-black text-4xl z-10 w-full text-center">หาหน้าเว็บไม่เจอสินะ ไม่เป็นไร! เรามาลองใหม่อีกครั้ง แต่ดู <b className='text-[#ffd3b3] underline'>คัมภีร์บิกินี่</b>ก่อนเพื่อความเป็นสิริมงคล //แปะรูปเคพีบิกินี่ </div>
            <div className="flex gap-8 grid grid-col justify-left text-white z-10 items-center">
                <Link className="flex flex-row items-center gap-1" href={"/"}>
                    <HomeIcon className="text-2xl"/>
                    <span className="text-xl text-black"> <b>คุณอยากมาหน้านี้สินะ อวยพรคัมภีร์น่ะ</b></span>
                </Link> 
                
                <div className='min-[341px]:flex grid min-[341px]:gap-2'>
                    <span className="sm:text-base text-xl text-center text-black">ติดตาม <b className='underline'>Kamphee SoAlone</b> ได้แล้วที่</span>
                    <Link className='flex items-center' href={"https://t.co/nCV3vocXPv"} target="_blank">
                        <YouTubeIcon className="text-3xl"/>
                    </Link>
                    <Link className='flex items-center' href={"https://twitter.com/KampheeA"} target="_blank">
                        <TwitterIcon className="text-3xl"/>
                    </Link>
                    {/* <Link className='flex items-center' href={"https://www.facebook.com/Baku.ARP"} target="_blank">
                        <FontAwesomeIcon className="text-[24px] aspect-square" icon={faFacebook} />
                    </Link>
                    <Link className='flex items-center' href={"https://www.tiktok.com/@baku_arp"} target="_blank">
                        <FontAwesomeIcon className="text-[24px] aspect-square" icon={faTiktok} />
                    </Link> */}
                    <Link className='flex items-center p-1' href={"https://vtuberthaiinfo.com/talent/kamphee"} target="_blank">
                        <Logo className="w-[26px] h-[26px]"/>
                    </Link>
                    <Divider className="bg-white" orientation="vertical" flexItem />
                    
                 </div>
                 <div className="flex gap-2">
                   
                    <Link className='flex min-[431px]:flex-row flex-col items-center gap-1' href={"https://twitter.com/Autumnia888"} target="_blank">
                        <img src="img\autumniaent.jpg" className="w-[36px] rounded-full"/>
                        <span className="sm:text-base text-xl text-center text-black"> <b>ติดตามค่าย Autumnia</b></span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    {/* <Divider className="bg-white" orientation="vertical" flexItem /> */}
                    <Link className="flex min-[431px]:flex-row flex-col items-center gap-1" href={"https://discord.gg/p2fY7N4Mcb"} target="_blank">
                        <FontAwesomeIcon className="text-[24px] aspect-square" icon={faDiscord} />
                        <span className="min-[431px]:text-xl text-xl text-black"> <b>ดิสคอร์ดแฟนคลับของคัมภีร์</b></span>
                    </Link> 
                
                </div>
            </div>
            
    
    </div>
}