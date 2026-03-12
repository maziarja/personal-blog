import { getAvatar } from "@/lib/getAvatar";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DarkMode from "./DarkMode";
import Link from "next/link";
import NavLinks from "./NavLinks";

async function Navbar() {
  const avatar = await getAvatar();

  return (
    <nav className="bg-card border-border flex items-center justify-between rounded-[10px] border p-1.5 shadow-[0_6px_10px_0_#7b7b7b08]">
      <Image
        src={`${process.env.STRAPI_URL}${avatar.profileImage.url}`}
        alt="avatar"
        width={40}
        height={40}
        loading="eager"
        className="rounded-[10px]"
        // change later on in production
        unoptimized
      />
      <div className="flex items-center gap-1.5 md:gap-4">
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <NavLinks />
        <DarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
