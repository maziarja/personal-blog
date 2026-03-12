import { getData } from "@/lib/getData";
import Link from "next/link";
import { Separator } from "../ui/separator";

type Props = {
  latestArticles: {
    title: string;
    createdAt: string;
    documentId: string;
  }[];
};

async function LatestArticles({ latestArticles }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-preset-2">Latest Articles</p>
      <div className="flex flex-col gap-6">
        {latestArticles.map((article) => {
          const date = new Date(article.createdAt).toLocaleString("en-us", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          });

          return (
            <Link
              href={`/blog/${article.documentId}`}
              key={article.documentId}
              className="outline-accent space-y-2 outline-offset-4 focus-visible:outline-3"
            >
              <p className="text-preset-5">{article.title}</p>
              <p className="text-preset-8 text-card-foreground italic">
                {date}
              </p>
            </Link>
          );
        })}
      </div>
      <Link
        href={"/blog"}
        className="text-preset-6 decoration-accent outline-accent w-fit underline decoration-3 underline-offset-4 outline-offset-4 focus-visible:outline-3"
      >
        View all articles
      </Link>
    </div>
  );
}

export default LatestArticles;
