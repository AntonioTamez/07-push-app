Creae App

ionic start 07-push-app

ionic cordova prepare android

    error: Refusing to use Cordova inside a Capacitor project.
    solucion:ionic integrations disable capacitor

ionic cordova build android

    error: An error occurred while running subprocess cordova.
            cordova.cmd build android exited with exit code 1.

    solucion: ionic cordova platform rm android
            ionic cordova platform add android


ionic cordova plugin add onesignal-cordova-plugin
npm install @awesome-cordova-plugins/onesignal

ionic cordova plugin add onesignal-cordova-plugin
npm install @ionic-native/onesignal

ionic g s services/push

ionic cordova run android -l