import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      className={cn("w-full shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      src={imageBuilder(imageObject)
        .width(400)
        .height(174)
        .format("webp")
        .url()}
      srcSet={`${imageBuilder(imageObject)
        .width(400)
        .height(174)
        .format("webp")
        .url()} 440w, ${imageBuilder(imageObject)
        .width(1024)
        .height(445)
        .format("webp")
        .url()} 1024w`}
      sizes="(min-width: 768px) 768px, 100vw"
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
