import Link from "next/link";

export default function ProjectListItem({
  title,
  icon,
  repository,
  link,
  description,
}) {
  return (
    <div className="w-full px-2 py-3 border-2 border-transparent border-dashed rounded-md active:border-yellow-300 md:py-4 md:px-4 hover:bg-gray-400 hover:bg-opacity-20">
      <div className="flex flex-row items-center gap-3 font-mono">
        <div className="text-xl">
          <ion-icon name={icon} />
        </div>
        <div className="flex flex-col gap-y-0.5">
          <h2 className="text-lg font-bold cursor-pointer">{title}</h2>
          <h3 className="text-sm">{description}</h3>
          <div className="flex items-center text-xs gap-x-2">
            <Link href={link} passHref>
              <a
                target="_blank"
                className="flex items-center px-3 py-1 font-bold text-yellow-800 bg-yellow-300 rounded hover:text-yellow-300 hover:bg-yellow-800 focus:outline-none gap-x-1"
                type="button"
              >
                <ion-icon name="link" /> Demo
              </a>
            </Link>
            <Link href={repository} passHref>
              <a
                target="_blank"
                className="flex items-center px-3 py-1 font-bold text-yellow-800 bg-yellow-300 rounded hover:text-yellow-300 hover:bg-yellow-800 focus:outline-none gap-x-1"
                type="button"
              >
                <ion-icon name="logo-github" /> Source
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
