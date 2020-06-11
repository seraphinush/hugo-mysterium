# hugo-seraph
Hugo theme for personal gaming blog by seraphinush

## Prerequisite
```
Hugo Static Site Generator v0.64.0-241DB8F7 windows/amd64 BuildDate: 2020-02-04T09:09:27Z
```

## Setup
```
git submodule add https://github.com/seraphinush/hugo-mysterium.git themes/hugo-mysterium
```

## config.toml example
```toml
title = "Title"
baseURL = "https://my-account-id.github.io/repository-name/"
publishDir = "docs"
languageCode = "en-us"
theme = "hugo-mysterium-theme"

[params]
description = "Description"
dateFormat = "Monday, January 2, 2006"

#faviconUrl = "https://url-link-to-favicon.png"

# Google Analytics, adsense

#trackingId = "UA-12345678-9"
#adsenseId = "xx-yyy-1234567891234567"

# Miscellaneous

#twitchId = "twitch-user-account"

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

Released under the MIT License