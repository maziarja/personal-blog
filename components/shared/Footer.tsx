import { getData } from "@/lib/getData";
import Image from "next/image";
import SocialMedia from "../home/SocialMedia";

async function Footer() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-preset-8">Made with ♥️ and ☕️</p>
      <SocialMedia isFooter={true} />
    </div>
  );
}

export default Footer;
