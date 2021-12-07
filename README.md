# GB Studio Site

Static promo and documentation site for GB Studio.

## Deployed Sites

The GB Studio site is powered by [Netlify](https://www.netlify.com/) and automatically deploys from merges to the following branches:

https://www.gbstudio.dev/ reflects the latest content in `master`

https://develop.gbstudio.dev/ reflects the latest content in `develop`

## Run Locally

Install [Hugo](https://gohugo.io/getting-started/quick-start/) static site generator.

Run dev server using:

```bash
hugo -D server
```

then open http://localhost:1313/

To preview with Beta theme: 

```bash
env BUILD_CONTEXT=develop hugo -D server
```

