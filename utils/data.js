import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "_contents/posts");

export function getAllPosts() {
  const allPosts = fs.readdirSync(postsDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "").replace(/\s+/g, "-").toLowerCase();
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, fileName),
      "utf8",
    );
    const { data, content } = matter(fileContents);
    const tags = data.tags;
    return { data, content, tags, slug };
  });
}

export function getAbout() {
  const about = fs.readFileSync("_contents/about.md", "utf8");
  return matter(about);
}

export function getContact() {
  const contact = fs.readFileSync("_contents/contact.md", "utf8");
  return matter(contact);
}
