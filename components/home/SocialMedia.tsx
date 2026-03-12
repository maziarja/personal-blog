import { getData } from "@/lib/getData";
import Image from "next/image";

type SocialMedias = {
  id: number;
  link: string;
  logo: {
    url: string;
    alternativeText: string;
    height: number;
    width: number;
  }[];
}[];

type Props = {
  isFooter?: boolean;
};

async function SocialMedia({ isFooter = false }: Props) {
  const socialMedias: SocialMedias = await getData("social-medias");

  return (
    <div className={`flex items-center ${isFooter ? "gap-4" : "gap-3"}`}>
      {socialMedias.map((sm) => (
        <a
          key={sm.id}
          href={sm.link}
          target="_blank"
          aria-label={sm.logo[0].alternativeText}
          className={`outline-accent outline-offset-4 focus-visible:outline-3 ${!isFooter && "bg-card border-border flex size-10.5 items-center justify-center rounded-[10px] border"}`}
        >
          <Image
            src={`${process.env.STRAPI_URL}${sm.logo[0].url}`}
            alt={sm.logo[0].alternativeText}
            width={sm.logo[0].width}
            height={sm.logo[0].height}
            className="dark:invert"
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
