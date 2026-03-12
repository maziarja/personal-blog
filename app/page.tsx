import Intro from "@/components/home/Intro";
import LatestArticles from "@/components/home/LatestArticles";
import { Separator } from "@/components/ui/separator";
import { LATEST_ARTICLE_LIMIT } from "@/lib/const";
import { getData } from "@/lib/getData";

async function Page() {
  // const content = data.content.replace(/\\n/g, "\n");

  const [home, latestArticles] = await Promise.all([
    getData("home"),
    getData(
      "blogs",
      "fields[0]=title&fields[1]=createdAt",
      LATEST_ARTICLE_LIMIT,
    ),
  ]);

  return (
    <main>
      <div className="flex flex-col gap-8 pb-8 md:gap-12">
        <Intro home={home} />
        <Separator />
        <LatestArticles latestArticles={latestArticles} />
      </div>
    </main>
  );
}

export default Page;
