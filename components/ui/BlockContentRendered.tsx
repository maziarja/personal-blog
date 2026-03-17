"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlocksContentRenderer({ content }: any) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        code: ({ children, plainText }) => {
          if (plainText === "---") {
            return <hr className="border-border my-6" />;
          }
          if (plainText?.startsWith("💡")) {
            return (
              <div className="w-full rounded-xl border border-green-500 bg-green-200 p-3 dark:border-green-700 dark:bg-green-900">
                {children}
              </div>
            );
          }
          if (plainText?.startsWith("⚠️")) {
            return (
              <div className="w-full rounded-xl border border-yellow-500 bg-yellow-200 p-3 dark:border-yellow-700 dark:bg-yellow-900">
                {children}
              </div>
            );
          }
          if (plainText?.startsWith("ℹ️")) {
            return (
              <div className="w-full rounded-xl border border-blue-500 bg-blue-200 p-3 dark:border-blue-700 dark:bg-blue-900">
                {children}
              </div>
            );
          }

          return <pre>{children}</pre>;
        },

        paragraph: ({ children }) => {
          return <p className="text-preset-7">{children}</p>;
        },
        link: ({ children, url }) => {
          return (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer underline decoration-blue-500 decoration-4 underline-offset-2"
            >
              {children}
            </a>
          );
        },
      }}
      modifiers={{
        code: ({ children }) => {
          return (
            <span className="bg-muted rounded-lg px-1 py-1.5 text-[#1975fb]">
              {children}
            </span>
          );
        },
      }}
    />
  );
}
