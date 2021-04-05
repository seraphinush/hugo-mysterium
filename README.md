# hugo-mysterium ![](https://img.shields.io/badge/version-3.00.00-333333.svg?colorA=333333&colorB=169BD7)
Hugo theme for personal gaming blog by seraphinush

[Demo](https://seraphinush.github.io/hugo-mysterium/)

## Prerequisite
Hugo Static Site Generator v0.64.0+

## Setup
```
git submodule add https://github.com/seraphinush/hugo-mysterium.git themes/hugo-mysterium
```

## Config

### Custom logo
- Add `logo.png` image file in `/static` folder
- Set `logo` to `true` in `config.toml`

### Custom Favicon
- Add `favicon.png` image file in `/static` folder
- Set `favicon` to `true` in `config.toml`

### Custom Javascript
- Add `custom.js` Javascript file in `/static` folder
- Set `customJs` to `true` in `config.toml`
#
## config.toml example
```toml
title = "Title"
baseURL = "https://<my-account-id>.github.io/<repository-name>/"
publishDir = "docs"
languageCode = "en-us"
theme = "hugo-mysterium"

# If multilingual support
defaultContentLanguage = "en"
DefaultContentLanguageInSubdir = true

# Miscellaneous
pluralizelisttitles = false

[params]
description = "Description"
dateFormat = "Monday, January 2, 2006"

# Logo
logo = true | false

# Favicon
favicon = true | false

# Custom JS
customJs = true | false

# Google Analytics, Adsense
analyticsId = "UA-12345678-9"
adsenseId = "xx-yyy-1234567891234567"

# Custom navigation items
[[params.nav]]
  title = "link_1"
  url = ""
[[params.nav]]
  title = "link_2"
  url = ""
[[params.nav]]
  title = "link_3"
  url = ""
```

## License
Copyright 2020 - present Seraphinus Hong

Released under the [MIT License](LICENSE)