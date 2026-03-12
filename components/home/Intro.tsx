import Markdown from "react-markdown";
import SocialMedia from "./SocialMedia";

type Props = {
  home: {
    title: string;
    intro: string;
  };
};

function Intro({ home }: Props) {
  return (
    <div className="space-y-6">
      <h1 className="text-preset-2 relative w-fit">
        {home.title}
        <span className="absolute bottom-0 left-0 -z-1 h-3 w-[calc(100%+2px)] bg-blue-500 dark:bg-blue-800" />
      </h1>
      <Markdown
        components={{
          p: ({ children }) => (
            <p className="text-preset-7 text-card-foreground">{children}</p>
          ),
        }}
      >
        {home.intro}
      </Markdown>
      <SocialMedia />
    </div>
  );
}

export default Intro;
