
import type { MDXComponents } from "mdx/types";

const headingClasses = {
  h1: "mb-6 mt-10 text-4xl font-bold tracking-tight text-text first:mt-0",
  h2: "mb-4 mt-10 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-text",
  h3: "mb-3 mt-8 text-xl font-semibold tracking-tight text-text",
  h4: "mb-2 mt-6 text-lg font-semibold text-text",
};

export function useMDXComponents(
    components: MDXComponents
): MDXComponents {
    return {
        h1: ({ children, ...props }) => (
            <h1 className={headingClasses.h1} {...props}>
                {children}
            </h1>
        ),

        h2: ({ children, ...props }) => (
            <h2 className={headingClasses.h2} {...props}>
                {children}
            </h2>
        ),

        h3: ({ children, ...props }) => (
            <h3 className={headingClasses.h3} {...props}>
                {children}
            </h3>
        ),

        h4: ({ children, ...props }) => (
            <h4 className={headingClasses.h4} {...props}>
                {children}
            </h4>
        ),

        p: ({ children, ...props }) => (
            <p
                className="mb-5 leading-7 text-text-muted"
                {...props}
            >
                {children}
            </p>
        ),

        a: ({ children, ...props }) => (
            <a
                className="font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:text-primary-hover"
                {...props}
            >
                {children}
            </a>
        ),

        ul: ({ children, ...props }) => (
            <ul
                className="mb-5 ml-6 list-disc space-y-2 text-text-muted marker:text-text-disabled"
                {...props}
            >
                {children}
            </ul>
        ),

        ol: ({ children, ...props }) => (
            <ol
                className="mb-5 ml-6 list-decimal space-y-2 text-text-muted marker:text-text-disabled"
                {...props}
            >
                {children}
            </ol>
        ),

        li: ({ children, ...props }) => (
            <li className="pl-1 leading-7" {...props}>
                {children}
            </li>
        ),

        blockquote: ({ children, ...props }) => (
            <blockquote
                className="my-6 border-l-2 border-border-focus pl-5 italic text-text-muted"
                {...props}
            >
                {children}
            </blockquote>
        ),

        hr: (props) => (
            <hr className="my-8 border-border" {...props} />
        ),

        table: ({ children, ...props }) => (
            <div className="my-6 overflow-x-auto rounded-lg border border-border">
                <table
                    className="w-full border-collapse text-left text-sm"
                    {...props}
                >
                    {children}
                </table>
            </div>
        ),

        thead: ({ children, ...props }) => (
            <thead className="bg-surface-hover text-text" {...props}>
                {children}
            </thead>
        ),

        th: ({ children, ...props }) => (
            <th
                className="border-b border-border px-4 py-3 font-semibold"
                {...props}
            >
                {children}
            </th>
        ),

        td: ({ children, ...props }) => (
            <td
                className="border-b border-border px-4 py-3 text-text-muted"
                {...props}
            >
                {children}
            </td>
        ),

        pre: ({ children, ...props }) => (
            <pre
                className="my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm leading-6 text-text"
                {...props}
            >
                {children}
            </pre>
        ),

        code: ({ children, ...props }) => (
            <code
                className="rounded bg-surface-hover px-1.5 py-0.5 font-mono text-[0.875em] text-text"
                {...props}
            >
                {children}
            </code>
        ),

        strong: ({ children, ...props }) => (
            <strong className="font-semibold text-text" {...props}>
                {children}
            </strong>
        ),

        img: ({ alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
            alt={alt ?? ""}
            className="my-6 h-auto max-w-full rounded-lg border border-border"
            loading="lazy"
            {...props}
            />
        ),

        // CUSTOM SETTINGS OVERRIDE
        ...components,
    };
};
