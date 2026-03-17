import SocialMedia from "@/components/home/SocialMedia";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Markdown from "react-markdown";
import workPlaceImageLarge from "@/public/images/image-workspace-large.jpg";
import workPlaceImageSmall from "@/public/images/image-workspace-small.jpg";

async function Page() {
  const about = await getData("about");

  return (
    <div className="pb-6">
      <div className="space-y-6">
        <p className="text-preset-2 relative w-fit">
          About Me
          <span className="absolute bottom-[1.5px] left-0 -z-1 h-2.5 w-[calc(100%+3px)] bg-blue-500" />
        </p>
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-preset-7 text-card-foreground">{children}</p>
            ),
          }}
        >
          {about.text1}
        </Markdown>
        <Image
          src={workPlaceImageSmall}
          alt="work place image"
          className="rounded-lg md:hidden"
        />
        <Image
          src={workPlaceImageLarge}
          alt="work place image"
          className="hidden rounded-lg md:block"
        />
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-preset-7 text-card-foreground">{children}</p>
            ),
          }}
        >
          {about.text2}
        </Markdown>
        <div className="space-y-4">
          <p className="text-preset-4">Follow me</p>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Page;
