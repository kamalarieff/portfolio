import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro({ title = "Blog" }) {
  return (
    <section className="max-w-2xl mx-auto flex-col md:flex-row flex items-center md:justify-between mt-0 mb-8 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}.
      </h1>
    </section>
  );
}
