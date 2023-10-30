const fs = require("fs");
const path = require("path");
const minify = require("html-minifier").minify;
const clean_css = require("clean-css");

const appPath = path.resolve(__dirname, "app");
const outPath = path.resolve(__dirname, "dist");

// paths here should be relative to app_path
const static_assets = [
  "profile_picture.jpeg",
  "robots.txt",
  // add any other assets here
];

(function () {
  console.log("Building site for production");
  try {
    // Get all paths
    const appHtmlPath = path.resolve(appPath, "index.html");
    const cssResetPath = path.resolve(appPath, "reset.css");
    const cssStylesPath = path.resolve(appPath, "styles.css");

    // Read the files
    const html = fs.readFileSync(appHtmlPath, "utf-8");
    const cssReset = fs.readFileSync(cssResetPath, "utf-8");
    const cssStyles = fs.readFileSync(cssStylesPath, "utf-8");

    // minify html
    const minifiedHtml = minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      useShortDoctype: true,
    });

    // minify css reset
    const minifiedCssReset = new clean_css().minify(cssReset).styles;

    // minify css styles
    const minifiedCssStyles = new clean_css().minify(cssStyles).styles;

    // check if we already have a `dist` directory
    // remove and re-create if we have one
    if (!fs.existsSync(outPath)) {
      fs.mkdirSync(outPath);
    } else {
      fs.rmSync(outPath, { recursive: true, force: true });
      fs.mkdirSync(outPath);
    }

    // copy static assets
    static_assets.forEach((asset) => {
      console.log("Copying: ", asset);
      const srcPath = path.resolve(appPath, asset);
      const destPath = path.resolve(outPath, asset);
      fs.copyFileSync(srcPath, destPath);
    });

    // write outputs
    fs.writeFileSync(path.resolve(outPath, "index.html"), minifiedHtml);
    fs.writeFileSync(path.resolve(outPath, "reset.css"), minifiedCssReset);
    fs.writeFileSync(path.resolve(outPath, "styles.css"), minifiedCssStyles);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  console.log("Successfully built site for production");
  process.exit(0);
})();
