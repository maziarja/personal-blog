import SocialMedia from "@/components/home/SocialMedia";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Markdown from "react-markdown";

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
          src={`${process.env.STRAPI_URL}${about.image[0].url}`}
          width={about.image[0].width}
          height={about.image[0].height}
          alt={about.image[0].alternativeText}
          className="rounded-lg md:hidden"
          unoptimized
        />
        <Image
          src={`${process.env.STRAPI_URL}${about.image[1].url}`}
          width={about.image[1].width}
          height={about.image[1].height}
          alt={about.image[1].alternativeText}
          className="hidden rounded-lg md:block"
          unoptimized
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
