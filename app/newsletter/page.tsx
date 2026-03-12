import Form from "@/components/newsletter/Form";
import { getData } from "@/lib/getData";
import Markdown from "react-markdown";

async function Page() {
  const newsletter = await getData("newsletter");

  return (
    <div className="min-h-[calc(100vh-169px)] space-y-6">
      <div className="space-y-4">
        <p className="text-preset-2">Newsletter</p>
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-preset-7 text-card-foreground">{children}</p>
            ),
          }}
        >
          {newsletter.newsletter}
        </Markdown>
      </div>
      <Form />
    </div>
  );
}

export default Page;
