# My Personal Website

This is the codebase for my personal website. The site is internally simple as I work primarily on projects and just don't have the time to maintain a fancy personal website.

## Running Locally

To run locally, serve the `app` directory using an HTML document server of some kind. I personally use [serve](https://www.npmjs.com/package/serve)

```shell
npx http-server -s app
```

**NOTE**: I highly suggest using `http-handler` over something like `serve`, for some reason `serve` will not properly serve sub-pages and will auto-redirect to the landing page. This could probably be fixed with a custom serve handler but adding that sort of logic breaks the principles of this website.

## Building for Production

There is no build process for this site. Simply upload the `app` directory to a file host and the site should be avaliable.

## TODO

- Meta + SEO for posts: Right now we just have the standard page header.

## Previous Versions

[2018](https://github.com/sgolovine/www-2018)

[2019](https://github.com/sgolovine/www-2019)

[2020](https://github.com/sgolovine/www-2020)

[2021](https://github.com/sgolovine/www-2021)

[2022](https://github.com/sgolovine/www-2022)

## Why is this site so simple?

Previous versions of my website have been far more sophisticated and complex, complete with blogs, snippets, contact sections and more. This version is intentionally simple because truth be told, I have other priorities now. Between all the other projects I currently maintain, I hardly have time to update my personal site. Keeping this site in pure HTML with a low overhead keeps the maintainence required to a minimum.
