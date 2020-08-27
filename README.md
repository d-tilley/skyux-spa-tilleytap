## Notes for deploying to GitHub Pages
- In skyuxconfig.json, set app.base to `"base": "https://tilleytap.com/"`
- Run `skyux build`
- Remove "Loading..." from dist/index.html
- Run `ngh`
- In GitHub repo settings, re-add custom domain

## Notes for deploying to Android
- In capacitor.config.json, set webDir to `"webDir": "dist"`
- In skyuxconfig.json, set app.base to `"base": "./"`
- Run `skyux build`
- In dist/index.html, remove "Loading..."
- In dist/index.html, replace the <base href...> tag with "<script>document.write('<base href="' + document.location + '" />');</script>"
- Run `npx cap sync`
- Run `npx cap open android`
- In app build.gradle, bump the version number
- Generate signed bundle / APK for release
- In Google Play Console, upload bundle and create new release
