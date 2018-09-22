# Reset
Color_Off='\033[0m'       # Text Reset
# Regular Colors
Yellow='\033[0;33m'       # Yellow
echo -e "${Yellow}cleaning up...${Color_Off}"
adb devices
echo -e "${Yellow}Found the below configured android emulators.${Color_Off}"
echo -e "${Yellow}If below list is empty, please configure it using Android Studio/AVD Manager${Color_Off}"
$ANDROID_HOME\/emulator\/emulator -list-avds
echo
echo -e "${Yellow}Please type the emulator name and press enter: ${Color_Off}"
read avd
echo
echo -e "${Yellow}Starting the emulator..${Color_Off}"
$ANDROID_HOME\/emulator\/emulator -avd $avd
