# Design

603.nz and jch254.com share one design system, taken from Namaste. The direction, the token table and the audit of both sites live in the jch254.com repo:

- [Design direction](https://github.com/jch254/jch254.com/blob/master/docs/design/direction.md)
- [Audit of both sites](https://github.com/jch254/jch254.com/blob/master/docs/design/audit.md)
- [Notes](https://github.com/jch254/jch254.com/blob/master/docs/design/notes.md)

The links point at `master` and resolve once the `redesign` branch of jch254.com is merged. Until then, read the files on that branch.

## What this repo carries

jch254.com is the source of truth for the system. This repo holds a copy of these, unchanged:

- `src/styles/tokens.css`, `fonts.css`, `base.css`, `primitives.css` and `index.css`
- `src/components/site/Header.astro`, `Footer.astro` and `ThemeScript.astro`
- `public/fonts/`, `public/licenses/`, `public/theme.js`, `public/avatar.webp` and `public/avatar-dark.webp`

`src/site.ts` is the one file that differs. To change the system, change it in jch254.com and copy the files across. To check the two are in step:

```bash
diff -r ../jch254dotcom/src/styles src/styles | grep -v "Only in ../jch254dotcom"
diff -r ../jch254dotcom/src/components/site src/components/site
diff ../jch254dotcom/public/theme.js public/theme.js
```

Nothing printed means they match. `post.css` and `resume.css` exist only in jch254.com.

The screenshot script is `docs/design/tools/shoot.mjs` in the jch254.com repo. It takes a built `dist/` from either site.
