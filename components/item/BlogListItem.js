import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function BlogListItem({ slug, title, icon, summary, date }) {
  return (
    <div className="w-full px-2 py-3 rounded cursor-pointer md:py-4 md:px-4 hover:bg-gray-400 hover:bg-opacity-20">
      <Link href={`/p/${slug}`} passHref>
        <a className="flex flex-row items-center gap-3 font-mono">
          <div className="text-xl">
            <ion-icon name={icon} />
          </div>
          <div className="flex flex-col gap-y-0.5">
            <h2 className="font-bold text-md md:text-xl">{title}</h2>
            <h3 className="text-sm">{summary}</h3>
            <h4 className="text-xs text-abu">
              {format(parseISO(date), "MMMM do, uuu")}
            </h4>
          </div>
        </a>
      </Link>
    </div>
  );
}
