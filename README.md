# hugo-mysterium ![](https://img.shields.io/badge/version-2.00.00-333333.svg?colorA=333333&colorB=169BD7)
Hugo theme for personal gaming blog by seraphinush

[Demo](https://seraphinush.github.io/hugo-mysterium/)

## Prerequisite
Hugo Static Site Generator v0.64.0+

## Setup
```
git submodule add https://github.com/seraphinush/hugo-mysterium.git themes/hugo-mysterium
```

## Custom javascript
- Add `custom.js` file in `/content` folder
- Set `customJs` to `true` in `config.toml`

## config.toml example
```toml
title = "Title"
baseURL = "https://<my-account-id>.github.io/<repository-name>/"
publishDir = "docs"
languageCode = "en-us"
theme = "hugo-mysterium"

[params]
description = "Description"
dateFormat = "Monday, January 2, 2006"
customJs = true || false

# Favicon link
  #faviconUrl = "https://url-to-favicon.png"

# Donation link
  #donateUrl = "https://url-to-a-donation-page"

# Google Analytics, Adsense
  #trackingId = "UA-12345678-9"
  #adsenseId = "xx-yyy-1234567891234567"

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