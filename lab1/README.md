# hello-world-expo
This is a Hello World React Native app built with Expo

---

## Requirements
Brew is not required, however if you use a mac it is recommended to make installation easier.

Node.js LTS 
```
brew install node
```
Git
```
brew install git
```
Watchman
```
brew install watchman
```
Expo cli
```
npm install --global expo-cli
```

## Run on iOS Simulator

[See more docs here](https://docs.expo.dev/workflow/android-studio-emulator/)

1. Make sure you have XCode installed. 
2. Install Xcode Command Line Tools
   
   Open Xcode, then choose "Preferences..." from the Xcode menu (or press ⌘+,). Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.
3. Run in root directory
   ```
   npm install
    ```
4. cd into the /ios folder and run
    ```
    pod install
    ```
5. Start the expo application 
   ```
    expo start
   ```
6. In the same terminal you started your application, open the app in an ios simulator by pressing `i`

## Run on Android Emulator

1. [Please follow the steps here to set up an Android emulator](https://docs.expo.dev/workflow/ios-simulator/)
2.  Run in root directory
    ```
    npm install
    ```
3. Start the expo application 
   ```
    expo start
   ```
4. In the same terminal you started your application, open the app in an ios simulator by pressing `a`


