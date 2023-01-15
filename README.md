# Piensa Sencillo

![blog-banner](/public/static/gallery/socialBanner.webp)

Esta página tiene como base la plantilla de timlrx. Dejo los enlaces para que puedan observarlo:

:point_right: [Repositorio](https://tailwind-nextjs-starter-blog.vercel.app/) :point_left:
[![GitHub Repo stars](https://img.shields.io/github/stars/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/network/)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Ftimlrxx)](https://twitter.com/timlrxx)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/timlrx)](https://github.com/sponsors/timlrx)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

## Licencia

[MIT](https://github.com/iiencinella/blog-piensaSencillo/blob/master/LICENSE) © [Iván Ezequiel Iencinella](https://www.piensasencillo.com.ar)

## Idea

Crear un espacio donde pueda mostrar lo que sé y lo que voy aprendiendo, además de ofrecer distintos servicios (estos servicios sólo los aplicaré, en principio, a mi ciudad natal).

Esta página será mi tarjeta de presentación al mundo.

```text
Seguiré aprendiendo y mejorando mi forma de pensar y programar.
```

## Organización de la página

index
╠═ blog
║ ╚═ post
╠═ services
║ ╚═ post
╠═ portfolio
║ ╚═ post
╚═ about

### Blog

Iré publicando ideas y formas de resolver ciertos problemas y algún contenido que considere importante para todo programador

### Services

Detallaré todos los servicios que ofrezco. Estos servicios, por el momento, solo los haré en la ciudad de Paraná Entre Ríos República Argentina y su zona metropolitana (Oro Verde, San Benito y Colonia Avellaneda).

### Portfolio

Publicaré aplicaciones de escritorio y páginas webs (cada uno tendrá una pequeña documentación de como usarlo y cómo lo desarrollé)

## Features

Además de las features originales, le agregué lo siguiente:

- Facil cambio de modo oscuro/claro (tocando en la imagen del foco o lámpara)
- Enlace a mis distintas redes sociales (correo, github, facebook, linkedin, twitter y whatsapp)
- Datos legales que aparecen solamente en algunas partes de la página
- Animación de iluminación del logo

## Estructura del proyecto

╠ ═ ╚ ║

.components
╠═ Card
║ ╠═ Block
║ ╚═ Inline
╠═ Image
║ ╚═ Logo
╠═ Footer
║ ╚═ Legal Info
╠═ Header
║ ╚═ Mobile Nav
╠═ Section
║ ╚═ [...]
╠═ Client Reload
╠═ Theme Switch
╠═ SEO
╠═ Section Container
╠═ Scroll Top
╠═ Link
╠═ Layout Wrapper
╠═ Tag
╠═ MDX Component
╠═ TOC Inline
╚═ [...]

.css
╠═ prism.css
╠═ tailwind.css
╚═ [...].css

.data
╠═ author
║ ╚═ [...].md
╠═ blog
║ ╚═ [...].md
╠═ services
║ ╚═ [...].md
╠═ projects
║ ╚═ [...].md
╠═ HeaderNav.link.js
╠═ Project.data.js
╠═ Service.data.js
╚═ siteMetadata.js

.layout
╠═ author.layout.js
╠═ list.layout.js
╠═ post.layout.js
╠═ author.layout.js
╚═ [...].layout.js

.lib
╠═ utils
║ ╠═ file.utils.js
║ ╠═ date.utils.js [formatter and comparative]
║ ╠═ htmlEscaper.utils.js
║ ╠═ kebabCase.utils.js
║ ╚═ [...].lib.js
╠═ mdx.lib.js
╠═ remark
║ ╠═ codeTitle.utils.js
║ ╠═ extractFrontMatter.utils.js
║ ╠═ imgToJSX.utils.js
║ ╠═ tocHeading.utils.js
║ ╠═ tags.utils.js
║ ╚═ [...].lib.js
╚═ [...].lib.js

.pages
╠═ api
║ ╚═ [...].js
╠═ blog
║ ╠═ page
║ ║ ╚═ [page].js
║ ╚═ [...slug].js
╠═ service
║ ╠═ page
║ ║ ╚═ [page].js
║ ╚═ [...slug].js
╠═ tag
║ ╠═ page
║ ║ ╚═ [page].js
║ ╚═ [tag].js
╠═ \_app.js
╠═ \_document.js
╠═ 404
║ ╚═ page
║ ╚═ [page].js
╠═ about
║ ╚═ page
║ ╚═ [page].js
╠═ project
║ ╚═ page
║ ╚═ [page].js
╠═ index.js
╚═ [...].js

.public
╠═ static
║ ╠═ favicon
║ ╠═ gallery
║ ╠═ icon
║ ╚═ [...]
╚═ [...]

.scripts
╠═ compose.script.js
╠═ generateSitemap.script.js
╠═ nextRemoteWatch.script.js
╚═ [...]
