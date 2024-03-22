# alexwkleung website

My website (blog/portfolio). Created with Astro.

Heavily inspired by [AqingCyan's website](https://github.com/AqingCyan/me) *(repo does not exist anymore)*.

# Setup

Clone the repository 

```bash
git clone <SSH/HTTPS URL>
```

Install npm dependencies 

```bash
npm install
```

Clean up `src/pages/posts` so you can add your own posts in the directory 

```bash
npm run clean
```

If using VS Code, install the Astro extension

This is the template for frontmatter used in blog posts:

```md
---
layout: '../../layouts/MarkdownPostLayout.astro'
title: Post Title
date: MM-DD-YYYY
description: A description
author: My Name
---
```

# License

Source code is MIT license.

Posts are mine. You cannot modify, treat it as your own, or distribute the content in a malicious way.

For clarification, you can submit a [new issue](https://github.com/alexwkleung/alexwkleung-website/issues).

See [LICENSE](https://github.com/alexwkleung/alexwkleung-website/blob/main/LICENSE) for full details.