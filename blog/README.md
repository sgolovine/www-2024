# My Blog

This sub-repo is the basis for my new blog. The website is currently built as just a single HTML file and I want to do the same for blog posts. Each post will just be an HTML page with an index page that presents links to all blog posts.

## Architecture

The blog will be fully static HTML pages with all pages being generated / updated at build time. The general idea is:

1. Have markdown based blog posts with frontmatter
2. Extract FM (Frontmatter) and MD (Markdown) from post
3. Convert MD to HTML
4. Embed HTML into a template file and combine with FM to generate a final HTML file.
5. Output the HTML file into a folder.
