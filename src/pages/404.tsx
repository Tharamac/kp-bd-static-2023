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
    return <div className="flex flex-col relative w-full h-screen justify-center items-center overflow-hidden gap-4 bg-[#ed9453] p-32">
        <div className="flex flex-row">        <img src="img\404\404.png" className="w-[400px]  rounded-full"/>
            <div className="flex flex-col justify-left items-left">        
                <div className="text-black text-8xl font-bold z-10 w-full">404 </div>
                     <div className="text-black text-4xl z-10 w-full pt-4">หาหน้าเว็บไม่เจอสินะ ไม่เป็นไร! เรามาลองใหม่อีกครั้ง แต่ดู <b className='text-[#ae4304] underline'>คัมภีร์บิกินี่</b> ก่อนเพื่อความเป็นสิริมงคล //แปะรูปเคพีบิกินี่ </div>
                     
                               <div className="flex flex-row gap-6 justify-left text-white items-center pt-8">
                <Link className="flex flex-row items-center gap-4" href={"/"}>
                    <HomeIcon className="text-2xl"/>
                    <span className="text-2xl text-black"><b>คุณอยากมาหน้านี้สินะ อวยพรคัมภีร์น่ะ</b></span>
                </Link> 
        
                    <Divider className="bg-black" orientation="vertical" flexItem  />
   

                    <Link className="flex min-[431px]:flex-row flex-col items-center gap-4" href={"https://discord.gg/p2fY7N4Mcb"} target="_blank">
                        <FontAwesomeIcon className="text-2xl aspect-square" icon={faDiscord} />
                        <span className="min-[431px]:text-2xl text-2xl text-black"> <b>ดิสคอร์ดแฟนคลับของคัมภีร์</b></span>
                    </Link>
            </div>
                     
        </div>

        </div>

  
            
    
    </div>
}