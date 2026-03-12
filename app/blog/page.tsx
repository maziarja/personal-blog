import { Separator } from "@/components/ui/separator";
import { getData } from "@/lib/getData";
import Link from "next/link";
import React from "react";

type Blogs = {
  title: string;
  description: string;
  createdAt: string;
  documentId: string;
}[];

async function Page() {
  const blogs: Blogs = await getData(
    "blogs",
    "fields[0]=title&fields[1]=description&fields[2]=createdAt",
  );

  return (
    <div className="space-y-6 pb-3">
      <div className="space-y-1.5">
        <p className="text-preset-2">My Articles</p>
        <p className="text-preset-7 text-card-foreground">
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </div>
      <div className="space-y-5 divide-y border-t pt-5">
        {blogs.map((blog) => {
          const date = new Date(blog.createdAt).toLocaleString("en-us", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          });

          return (
            <Link
              key={blog.documentId}
              href={`/blog/${blog.documentId}`}
              className="outline-accent inline-block space-y-2 pb-5 outline-offset-4 focus-visible:outline-3"
            >
              <div className="space-y-2">
                <p className="text-preset-5">{blog.title}</p>
                <p className="text-preset-8 text-card-foreground italic">
                  {date}
                </p>
              </div>
              <p className="text-preset-7 text-card-foreground">
                {blog.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
