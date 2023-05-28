# history

1. ionic start balstadojo-coach blank

2. capacitor.config.json appId: 'com.allerhed.balstadojo.coach',

3. ionic build

4. ionic capacitor add ios 

5. ionic cap sync

6. npm install cordova-plugin-inappbrowser

7. npm install @awesome-cordova-plugins/in-app-browser

8. ionic build

9. ionic cap sync

10. main.ts

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

providers: InAppBrowser

11. home.page.scss - clear content

12. home.page.html - clear ion-content

13. home.page.ts

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


constructor(private iab: InAppBrowser) {
    this.openInAppBrowser();
  }

openInAppBrowser() {  

    const browser = this.iab.create('https://balstadojoif.zoezi.se/',
                                    '_blank', 
                                    {
                                      location: 'no',
                                      toolbar: 'no',
                                      }
                                      );
      };

      

14. ionic.config.jason

"ios": {
    "contentInset": "always"
  }

15. ionic cap run ios -l --external


# documentation
https://danielsogl.gitbook.io/awesome-cordova-plugins/in-app-browser-1
https://github.com/apache/cordova-plugin-inappbrowser

# splashscreen

16. npm install -g cordova-res

17. cordova-res ios --skip-config --copy (+ android)

18. npm install @capacitor/splash-screen

19. capacitor.config.ts

plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      backgroundColor: "#262626",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#cc5500",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },

20. ionic cap run ios -l --external


#android

1. ionic capacitor add Android 

2. cordova-res ios --skip-config --copy (+ android)

3. ionic cap sync

//3. npx cap add android

4. npx cap open android

##############################################################################################
#node commands
#to get ionic vorking on mac os
export NODE_OPTIONS=--openssl-legacy-provider

#ionic commands
ionic serve

ionic build

ionic capacitor sync

npx cap sync





##############################################################################################
#git commands
#check out a repository
git clone https://allerhed.visualstudio.com/_git/woodbucket

#commit
git commit -am "Commit message"

#pushing changes
git push origin main

#update local repository from server
git pull

#create a new repository
git init

#add files to the repository
gitt add

#add remote server 
git remote add origin


http://rogerdudler.github.io/git-guide/



##############################################################################################
#android

#change bundelname to:
com.allerhed.balstadojo2

confix.xml
capacitor.config.ts
ionic.config

#version
build.gradle version number + version code

Newbd.jk
Brottas2014


##############################################################################################
#bash
#!/bin/bash

https://www.howtogeek.com/67469/the-beginners-guide-to-shell-scripting-the-basics/
