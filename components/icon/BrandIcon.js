import Link from "next/link";

export default function Icon({ link, brand }) {
  return (
    <Link href={link} passHref>
      <a
        target="_blank"
        className="text-2xl cursor-pointer hover:text-yellow-400"
      >
        <ion-icon name={`logo-${brand}`} />
      </a>
    </Link>
  );
}
