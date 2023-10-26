# fitbit-accelerometer
Installs an app on a Fitbit Sense that pulls x, y, and z accelerometer data, prints on the screen, and in the command prompt.

Created from fitbit's developer guide. https://dev.fitbit.com/getting-started/

---
Prerequisites
- Node.js
- nvm
- Fitbit Sense
- Android or iOS device

---
Usage:
1. Sign up for a fitbit account, and add a fitbit device to the fitbit app for Android and iOS.
2. Sign into Gallery manager and accept the terms of service. https://gam.fitbit.com/
3. On the fitbit app, go to Your Device > Developer and enable.
4. On Fitbit Sense, go into Settings > Developer Bridge and enable.
  OR you can use the fitbit OS simulator (https://simulator-updates.fitbit.com/download/stable/win). However, a fitbit device first has to be paired with your account in order to be able to use a custom app.
6. Open terminal on windows
7. CD into folder:
  ex. cd ./fitbit-accelerometer
8. Run:
	npx fitbit
9. Run:
		bi

  This will install and launch the app and start streaming data to the terminal. If you want to stop, exit out of the app on the fitbit device by swiping from the left side. Do NOT control+C or exit out of the terminal or else you will have to repeat step 4 to enable the developer bridge.

  The installed app has to stay open on the fitbit in order to keep streaming data to the terminal.
