import YouTube from "react-youtube";
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Logo } from "@/svg/Logo";

export default function Page500() {
    return <div className="flex flex-col relative w-full h-screen justify-center items-center overflow-hidden gap-4 bg-[#ed9453]">
    <div className="text-black text-8xl z-10 w-full text-center ">500 </div>
<div className="text-black text-4xl z-10 w-full text-center p-16">โหลดหน้าเว็บไม่ขึ้นสินะ ไม่เป็นไร! เรามาลองใหม่อีกครั้ง แต่ดู <b className='text-[#ae4304] underline'>คัมภีร์บิกินี่</b> ก่อนเพื่อความเป็นสิริมงคล //แปะรูปเคพีบิกินี่ </div>
      <div className="flex flex-row gap-6 justify-left text-white items-center">
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
}