import FrontendMentorLogo from "../ui/logo-frontend-mentor";
import GithubLogo from "../ui/logo-github";
import XLogo from "../ui/logo-x";
import LinkedinLogo from "../ui/logo-linkedin";

type Props = {
  isFooter?: boolean;
};

const socialMedias = [
  {
    id: 1,
    title: "frontend mentor",
    logo: FrontendMentorLogo,
    link: "https://www.frontendmentor.io/profile/maziarja",
  },
  {
    id: 2,
    title: "github",
    logo: GithubLogo,
    link: "https://github.com/maziarja",
  },
  {
    id: 3,
    title: "X",
    logo: XLogo,
    link: "https://x.com/maz_alem",
  },
  {
    id: 4,
    title: "linkedin",
    logo: LinkedinLogo,
    link: "https://www.linkedin.com/in/maziar-jamalialem-677030345",
  },
];

async function SocialMedia({ isFooter = false }: Props) {
  return (
    <div className={`flex items-center ${isFooter ? "gap-4" : "gap-3"}`}>
      {socialMedias.map((sm) => (
        <a
          key={sm.id}
          href={sm.link}
          target="_blank"
          aria-label={sm.title}
          className={`outline-accent outline-offset-4 focus-visible:outline-3 ${!isFooter && "bg-card border-border flex size-10.5 items-center justify-center rounded-[10px] border"}`}
        >
          {<sm.logo />}
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
