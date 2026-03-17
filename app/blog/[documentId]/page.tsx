import { getData } from "@/lib/getData";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import BlocksContentRenderer from "@/components/ui/BlockContentRendered";

type Props = {
  params: Promise<{
    documentId: string;
  }>;
};

async function Page({ params }: Props) {
  const { documentId } = await params;

  const article = await getData(`blogs/${documentId}`);

  const publishedAt = new Date(article.publishedAt).toLocaleString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const content = article?.content?.replace(/\\n/g, "\n");
  const contentBlock = article?.contentBlock;

  return (
    <div className="space-y-8 pb-6">
      <div className="space-y-4">
        <p className="text-preset-1">{article.title}</p>
        <p className="text-preset-8 text-card-foreground italic">{`Published ${publishedAt}`}</p>
        {content && <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>}
        {contentBlock && <BlocksContentRenderer content={contentBlock} />}
      </div>
    </div>
  );
}

export default Page;
