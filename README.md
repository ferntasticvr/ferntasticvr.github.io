# ferntastic site

a really bad personal site!

this project was made with [astro](https://astro.build) and [deno](https://deno.com)

see it running on [github pages](https://ferntasticvr.github.io)!

## running it

prerequisites:
- deno installed

1. git clone this repository
2. `cd` into it (`cd site` for example)
3. `deno install` to install all packages
4. `deno run dev` to run the dev preview on port `4321`
5. to build, run `deno run build` and then `deno run .\dist\server\entry.mjs -A`!<br>
note: you can exclude the `-A` to have Deno check on all permissions, but this is easier, so :)
6. enjoy!

## other astro commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `deno install`             | installs dependencies                            |
| `deno run dev`             | start dev server at `localhost:4321`      |
| `deno run build`           | build production site to `./dist/`          |
| `deno run .\dist\server\entry.mjs -A`         | preview build locally, before deploying     |
| `deno run astro ...`       | run CLI commands like `astro add`, `astro check` |
| `deno run astro -- --help` | get help using the Astro CLI                     |
