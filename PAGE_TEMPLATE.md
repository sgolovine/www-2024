## Page Template

When creating a new page, use the following template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Personal website for Sunny Golovine. Software Engineer based in Denver, CO"
    />

    <!-- CSS -->
    <link rel="stylesheet" href="/reset.css" />
    <link rel="stylesheet" href="/styles.css" />

    <title>PAGE_TITLE</title>
  </head>
  <body>
    <!-- Header Section -->
    <header>
      <a href="/posts">Posts</a>
      <a href="https://www.github.com/sgolovine">Github</a>
      <a href="https://www.linkedin.com/in/SunnyGolovine">Linkedin</a>
      <a href="mailto:sunny@golovinemail.org">Email</a>
    </header>
  </body>
</html>
```

## Page Header

Here is just the page header

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    content="Personal website for Sunny Golovine. Software Engineer based in Denver, CO"
  />

  <!-- CSS -->
  <link rel="stylesheet" href="/reset.css" />
  <link rel="stylesheet" href="/styles.css" />

  <title>PAGE_TITLE</title>
</head>
```

## Page Sections

Within a page, use the following syntax to create sections + sub-sections. A sub-section is optional and not required.

```html
<div class="s2">
  <h2>Section Header</h2>

  <!-- YOUR SECTION CONTENT -->

  <div class="s3">
    <h3>Sub-Section Header</h3>

    <!-- YOUR SECTION CONTENT -->
  </div>
</div>
```
