// this script will assume it's being run from the `/blog` directory

import path from "path";
import fs from "fs";
import matter from "gray-matter";
import markdownit from "markdown-it";
import Handlebars from "handlebars";

const md = markdownit();

interface PostMetadata {
  title: string;
  date: string;
  description: string;
  published: boolean;
}

interface PostmapItem {
  meta: PostMetadata;
  html: string;
  slug: string;
}

interface TemplateOptions {
  description: string;
  title: string;
  date: string;
  html: string;
}

// where md posts are kept
const postsPath = path.resolve(process.cwd(), "posts");

// where html will be ouputted
const outputPath = path.resolve(process.cwd(), "html");

// template path
const templatePath = path.resolve(process.cwd(), "template", "index.hbs");

// main
(async () => {
  // read the template
  const templateFile = fs.readFileSync(templatePath, "utf-8");
  const template = Handlebars.compile(templateFile);

  // get the post filenames in the `posts` directory
  const postList = fs.readdirSync(postsPath);

  // create a 'postmap' for each post in the post list
  // only include published posts and sort the posts by date
  const map: PostmapItem[] = postList
    .map((fileName) => {
      const postPath = path.resolve(postsPath, fileName);
      const slug = fileName.replace(`.md`, "");
      const postFile = fs.readFileSync(postPath, "utf-8");
      const matterRes = matter(postFile);
      const meta: PostMetadata = matterRes.data as PostMetadata;

      const html = md.render(matterRes.content);

      return {
        slug,
        meta,
        html,
      };
    })
    .filter((item) => item.meta.published)
    .sort((postA, postB) => {
      const dateA = -new Date(postA.meta.date);
      const dateB = -new Date(postB.meta.date);

      return dateA - dateB;
    });

  map.forEach((mapItem) => {
    const outputDir = path.resolve(outputPath, mapItem.slug);

    // if the output directory does not exist, create it.
    if (!fs.existsSync(path.resolve(outputPath, mapItem.slug))) {
      fs.mkdirSync(outputDir);
    }

    const templateOptions: TemplateOptions = {
      description: mapItem.meta.description,
      title: mapItem.meta.title,
      date: mapItem.meta.date,
      html: mapItem.html,
    };

    const html = template(templateOptions);

    fs.writeFileSync(path.resolve(outputDir, "index.html"), html);
  });
})();
