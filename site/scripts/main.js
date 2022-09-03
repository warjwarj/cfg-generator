/*


main.js holds the functionality that writes the end file with the values inputted by the user.



*/

let template = {

  "/private/language         =": " 0",
  "/private/custom           =": " 7",
  "/private/ucamNum          =": " 0",
  "/private/ahdNum           =": " 4",
  "/private/ahdFirst         =": " 1",
  "/time/timezoneIndex       =": " 25",
  "/time/format              =": " 2",
  "/time/TZ                  =": " GMT+0BST,M3.5.0,M10.5.0",
  "/time/iana                =": "",
  "/time/ntpEnable           =": " 0",
  "/time/ntpServer           =": "",
  "/ptz[0]/host              =": " 0",
  "/ptz[1]/host              =": " 0",
  "/ptz[2]/host              =": " 0",
  "/ptz[3]/host              =": " 0",
  "/ptz[0]/protocol          =": " 0",
  "/ptz[1]/protocol          =": " 0",
  "/ptz[2]/protocol          =": " 0",
  "/ptz[3]/protocol          =": " 0",
  "/ptz[0]/baudrate          =": " 9600",
  "/ptz[1]/baudrate          =": " 9600",
  "/ptz[2]/baudrate          =": " 9600",
  "/ptz[3]/baudrate          =": " 9600",
  "/ptz[0]/speed             =": " 0",
  "/ptz[1]/speed             =": " 0",
  "/ptz[2]/speed             =": " 0",
  "/ptz[3]/speed             =": " 0",
  "/ptz[0]/stop_ms           =": " 0",
  "/ptz[1]/stop_ms           =": " 0",
  "/ptz[2]/stop_ms           =": " 0",
  "/ptz[3]/stop_ms           =": " 0",
  "/ptz[0]/addr              =": " 0",
  "/ptz[1]/addr              =": " 0",
  "/ptz[2]/addr              =": " 0",
  "/ptz[3]/addr              =": " 0",
  "/mis/hwcode               =": " 0",
  "/mis/filesystem           =": " 0",
  "/mis/bgcolor              =": " 0",
  "/mis/noDiskBeepTs         =": " 60",
  "/mis/overwrite            =": " 1",
  "/mis/ttxVmuxch            =": " 0",
  "/mis/TooltipBarEnable     =": " 1",
  "/mis/dvrTimeEnable        =": " 0",
  "/mis/autoupdate           =": " 0",
  "/mis/NormalRecDisk        =": " 0",
  "/mis/AlarmRecDisk         =": " 0",
  "/mis/dualRecDisk          =": " 0",
  "/mis/loginEnable          =": " 0",
  "/mis/adminPasswd          =": "",
  "/mis/operatorPasswd       =": "",
  "/mis/videoNoOsd           =": " 0",
  "/mis/webLanguage          =": "",
  "/mis/scaledownResolution  =": " 0",
  "/mis/transfer2            =": " 0",
  "/mis/transfer2url         =": "",
  "/mis/dashboard            =": " 0",
  "/mis/dashboardurl         =": "",
  "/mis/customerid           =": "",
  "/mis/CalculateHead        =": " 0",
  "/mis/beaconTriggerNo      =": " 0",
  "/mis/bluetooth            =": " 0",
  "/mis/beaconStart          =": " 0",
  "/mis/beaconStatus         =": " 0",
  "/mis/SmallMouse           =": " 1",
  "/mis/HideMouse            =": " 1",
  "/mis/Dcout                =": " 0",
  "/mis/ignoreAlarm          =": " 0",
  "/mis/Connectionfault      =": " 0",
  "/mis/eventID              =": "",
  "/mis/videoOsdBg           =": " 0",
  "/net/ipmode               =": " 1",
  "/net/ipaddress            =": " 192.168.0.220",
  "/net/mac                  =": " 7a:02:1c:a1:d2:0c",
  "/net/netmask              =": " 255.255.255.0",
  "/net/gateway              =": " 192.168.0.1",
  "/net/dns                  =": " 192.168.0.1",
  "/net/dialEnable           =": " 1",
  "/net/dialcmd              =": " *99#",
  "/net/apn                  =": " iot.truphone.com",
  "/net/username             =": "",
  "/net/password             =": "",
  "/net/wifienable           =": " 0",
  "/net/wifiautoupdate       =": " 0",
  "/net/wifimode             =": " 0",
  "/net/apssid               =": "",
  "/net/appasswd             =": "",
  "/net/simcom7100Flag       =": " 0",
  "/net/setMtu               =": " 0",
  "/net/needPing             =": " 0",
  "/net/clientipmode         =": " 1",
  "/net/clientipaddress      =": " 192.168.10.254",
  "/net/clientnetmask        =": " 255.255.255.0",
  "/net/clientgateway        =": " 192.168.10.1",
  "/net/wificlientMac        =": "",
  "/net/debug                =": " 0",
  "/wifi[0]/ssid             =": "",
  "/wifi[1]/ssid             =": "",
  "/wifi[2]/ssid             =": "",
  "/wifi[3]/ssid             =": "",
  "/wifi[4]/ssid             =": "",
  "/wifi[5]/ssid             =": "",
  "/wifi[6]/ssid             =": "",
  "/wifi[7]/ssid             =": "",
  "/wifi[8]/ssid             =": "",
  "/wifi[9]/ssid             =": "",
  "/wifi[10]/ssid            =": "",
  "/wifi[11]/ssid            =": "",
  "/wifi[12]/ssid            =": "",
  "/wifi[13]/ssid            =": "",
  "/wifi[14]/ssid            =": "",
  "/wifi[15]/ssid            =": "",
  "/wifi[16]/ssid            =": "",
  "/wifi[17]/ssid            =": "",
  "/wifi[18]/ssid            =": "",
  "/wifi[19]/ssid            =": "",
  "/wifi[20]/ssid            =": "",
  "/wifi[21]/ssid            =": "",
  "/wifi[22]/ssid            =": "",
  "/wifi[23]/ssid            =": "",
  "/wifi[24]/ssid            =": "",
  "/wifi[25]/ssid            =": "",
  "/wifi[26]/ssid            =": "",
  "/wifi[27]/ssid            =": "",
  "/wifi[28]/ssid            =": "",
  "/wifi[29]/ssid            =": "",
  "/wifi[30]/ssid            =": "",
  "/wifi[31]/ssid            =": "",
  "/wifi[32]/ssid            =": "",
  "/wifi[33]/ssid            =": "",
  "/wifi[34]/ssid            =": "",
  "/wifi[35]/ssid            =": "",
  "/wifi[36]/ssid            =": "",
  "/wifi[37]/ssid            =": "",
  "/wifi[38]/ssid            =": "",
  "/wifi[39]/ssid            =": "",
  "/wifi[40]/ssid            =": "",
  "/wifi[41]/ssid            =": "",
  "/wifi[42]/ssid            =": "",
  "/wifi[43]/ssid            =": "",
  "/wifi[44]/ssid            =": "",
  "/wifi[45]/ssid            =": "",
  "/wifi[46]/ssid            =": "",
  "/wifi[47]/ssid            =": "",
  "/wifi[48]/ssid            =": "",
  "/wifi[49]/ssid            =": "",
  "/wifi[0]/ssidpassword     =": "",
  "/wifi[1]/ssidpassword     =": "",
  "/wifi[2]/ssidpassword     =": "",
  "/wifi[3]/ssidpassword     =": "",
  "/wifi[4]/ssidpassword     =": "",
  "/wifi[5]/ssidpassword     =": "",
  "/wifi[6]/ssidpassword     =": "",
  "/wifi[7]/ssidpassword     =": "",
  "/wifi[8]/ssidpassword     =": "",
  "/wifi[9]/ssidpassword     =": "",
  "/wifi[10]/ssidpassword    =": "",
  "/wifi[11]/ssidpassword    =": "",
  "/wifi[12]/ssidpassword    =": "",
  "/wifi[13]/ssidpassword    =": "",
  "/wifi[14]/ssidpassword    =": "",
  "/wifi[15]/ssidpassword    =": "",
  "/wifi[16]/ssidpassword    =": "",
  "/wifi[17]/ssidpassword    =": "",
  "/wifi[18]/ssidpassword    =": "",
  "/wifi[19]/ssidpassword    =": "",
  "/wifi[20]/ssidpassword    =": "",
  "/wifi[21]/ssidpassword    =": "",
  "/wifi[22]/ssidpassword    =": "",
  "/wifi[23]/ssidpassword    =": "",
  "/wifi[24]/ssidpassword    =": "",
  "/wifi[25]/ssidpassword    =": "",
  "/wifi[26]/ssidpassword    =": "",
  "/wifi[27]/ssidpassword    =": "",
  "/wifi[28]/ssidpassword    =": "",
  "/wifi[29]/ssidpassword    =": "",
  "/wifi[30]/ssidpassword    =": "",
  "/wifi[31]/ssidpassword    =": "",
  "/wifi[32]/ssidpassword    =": "",
  "/wifi[33]/ssidpassword    =": "",
  "/wifi[34]/ssidpassword    =": "",
  "/wifi[35]/ssidpassword    =": "",
  "/wifi[36]/ssidpassword    =": "",
  "/wifi[37]/ssidpassword    =": "",
  "/wifi[38]/ssidpassword    =": "",
  "/wifi[39]/ssidpassword    =": "",
  "/wifi[40]/ssidpassword    =": "",
  "/wifi[41]/ssidpassword    =": "",
  "/wifi[42]/ssidpassword    =": "",
  "/wifi[43]/ssidpassword    =": "",
  "/wifi[44]/ssidpassword    =": "",
  "/wifi[45]/ssidpassword    =": "",
  "/wifi[46]/ssidpassword    =": "",
  "/wifi[47]/ssidpassword    =": "",
  "/wifi[48]/ssidpassword    =": "",
  "/wifi[49]/ssidpassword    =": "",
  "/wifi[0]/identity         =": "",
  "/wifi[1]/identity         =": "",
  "/wifi[2]/identity         =": "",
  "/wifi[3]/identity         =": "",
  "/wifi[4]/identity         =": "",
  "/wifi[5]/identity         =": "",
  "/wifi[6]/identity         =": "",
  "/wifi[7]/identity         =": "",
  "/wifi[8]/identity         =": "",
  "/wifi[9]/identity         =": "",
  "/wifi[10]/identity        =": "",
  "/wifi[11]/identity        =": "",
  "/wifi[12]/identity        =": "",
  "/wifi[13]/identity        =": "",
  "/wifi[14]/identity        =": "",
  "/wifi[15]/identity        =": "",
  "/wifi[16]/identity        =": "",
  "/wifi[17]/identity        =": "",
  "/wifi[18]/identity        =": "",
  "/wifi[19]/identity        =": "",
  "/wifi[20]/identity        =": "",
  "/wifi[21]/identity        =": "",
  "/wifi[22]/identity        =": "",
  "/wifi[23]/identity        =": "",
  "/wifi[24]/identity        =": "",
  "/wifi[25]/identity        =": "",
  "/wifi[26]/identity        =": "",
  "/wifi[27]/identity        =": "",
  "/wifi[28]/identity        =": "",
  "/wifi[29]/identity        =": "",
  "/wifi[30]/identity        =": "",
  "/wifi[31]/identity        =": "",
  "/wifi[32]/identity        =": "",
  "/wifi[33]/identity        =": "",
  "/wifi[34]/identity        =": "",
  "/wifi[35]/identity        =": "",
  "/wifi[36]/identity        =": "",
  "/wifi[37]/identity        =": "",
  "/wifi[38]/identity        =": "",
  "/wifi[39]/identity        =": "",
  "/wifi[40]/identity        =": "",
  "/wifi[41]/identity        =": "",
  "/wifi[42]/identity        =": "",
  "/wifi[43]/identity        =": "",
  "/wifi[44]/identity        =": "",
  "/wifi[45]/identity        =": "",
  "/wifi[46]/identity        =": "",
  "/wifi[47]/identity        =": "",
  "/wifi[48]/identity        =": "",
  "/wifi[49]/identity        =": "",
  "/kh298/username           =": "",
  "/kh298/useralias          =": "",
  "/power/accLevel           =": " 1",
  "/power/accDelay           =": " 1800",
  "/power/onHour             =": " 0",
  "/power/onMin              =": " 0",
  "/power/offHour            =": " 0",
  "/power/offMin             =": " 0",
  "/power/low_threshold      =": " 0",
  "/power/high_threshold     =": " 0",
  "/power/superC             =": " 0",
  "/power/accSleepDelay      =": " 0",
  "/power/almSleepDelay      =": " 0",
  "/gps/spd                  =": " 9600",
  "/gps/disable              =": " 0",
  "/gps/osdOn                =": " 1",
  "/gps/timeSync             =": " 1",
  "/gps/debug                =": " 0",
  "/motor/id                 =": "",
  "/motor/spdSource          =": " 1",
  "/motor/spdUnit            =": " 0",
  "/motor/threshold          =": " 0",
  "/motor/idleThreshold      =": " 2",
  "/motor/idleDuration       =": " 3",
  "/motor/idleStatus         =": " 0",
  "/motor/idletime           =": " 0",
  "/gsensor[0]/threshold     =": " 0",
  "/gsensor[1]/threshold     =": " 0",
  "/gsensor[2]/threshold     =": " 0",
  "/gsensor[0]/offset        =": " 0",
  "/gsensor[1]/offset        =": " 0",
  "/gsensor[2]/offset        =": " 1024",
  "/gsensor[0]/chipType      =": " 1",
  "/gsensor[1]/chipType      =": " 0",
  "/gsensor[2]/chipType      =": " 0",
  "/gsensor[0]/topdirection  =": " 0",
  "/gsensor[1]/topdirection  =": " 0",
  "/gsensor[2]/topdirection  =": " 0",
  "/gsensor[0]/sddirection   =": " 0",
  "/gsensor[1]/sddirection   =": " 0",
  "/gsensor[2]/sddirection   =": " 0",
  "/alarm/prerecord          =": " 0",
  "/alarm/postrecord         =": " 60",
  "/alarm/noRealBeep         =": " 0",
  "/almEv[0]/level           =": " 1",
  "/almEv[1]/level           =": " 1",
  "/almEv[2]/level           =": " 1",
  "/almEv[3]/level           =": " 1",
  "/almEv[0]/bmRecord        =": " 0x0",
  "/almEv[1]/bmRecord        =": " 0x0",
  "/almEv[2]/bmRecord        =": " 0x0",
  "/almEv[3]/bmRecord        =": " 0x0",
  "/almEv[0]/bmsnap          =": " 0x0",
  "/almEv[1]/bmsnap          =": " 0x0",
  "/almEv[2]/bmsnap          =": " 0x0",
  "/almEv[3]/bmsnap          =": " 0x0",
  "/almEv[0]/beep            =": " 0",
  "/almEv[1]/beep            =": " 0",
  "/almEv[2]/beep            =": " 0",
  "/almEv[3]/beep            =": " 0",
  "/almEv[0]/adThreshold     =": " 0",
  "/almEv[1]/adThreshold     =": " 0",
  "/almEv[2]/adThreshold     =": " 0",
  "/almEv[3]/adThreshold     =": " 0",
  "/almEv[0]/switchBmCh      =": " 0x1",
  "/almEv[1]/switchBmCh      =": " 0x2",
  "/almEv[2]/switchBmCh      =": " 0x8",
  "/almEv[3]/switchBmCh      =": " 0x0",
  "/almEv[0]/switchview      =": " 0",
  "/almEv[1]/switchview      =": " 0",
  "/almEv[2]/switchview      =": " 0",
  "/almEv[3]/switchview      =": " 0",
  "/almEv[0]/switchdelay     =": " 1",
  "/almEv[1]/switchdelay     =": " 1",
  "/almEv[2]/switchdelay     =": " 0",
  "/almEv[3]/switchdelay     =": " 0",
  "/almEv[0]/changeDelay     =": " 3000",
  "/almEv[1]/changeDelay     =": " 3000",
  "/almEv[2]/changeDelay     =": " 3000",
  "/almEv[3]/changeDelay     =": " 3000",
  "/almEv[0]/switchFlipH     =": " 0",
  "/almEv[1]/switchFlipH     =": " 0",
  "/almEv[2]/switchFlipH     =": " 0",
  "/almEv[3]/switchFlipH     =": " 0",
  "/almEv[0]/osd             =": " Left Ind",
  "/almEv[1]/osd             =": " Right Ind",
  "/almEv[2]/osd             =": " Reverse",
  "/almEv[3]/osd             =": " s4",
  "/almLanc/level            =": " 1",
  "/almLanc/bmRecord         =": " 0x0",
  "/almLanc/bmsnap           =": " 0x0",
  "/almLanc/beep             =": " 0",
  "/almLanc/adThreshold      =": " 0",
  "/almLanc/switchBmCh       =": " 0x0",
  "/almLanc/switchview       =": " 0",
  "/almLanc/switchdelay      =": " 0",
  "/almLanc/changeDelay      =": " 3000",
  "/almLanc/switchFlipH      =": " 0",
  "/almLanc/osd              =": " EMB",
  "/almSpd/level             =": " 1",
  "/almSpd/bmRecord          =": " 0x0",
  "/almSpd/bmsnap            =": " 0x0",
  "/almSpd/beep              =": " 0",
  "/almSpd/adThreshold       =": " 0",
  "/almSpd/switchBmCh        =": " 0x0",
  "/almSpd/switchview        =": " 0",
  "/almSpd/switchdelay       =": " 0",
  "/almSpd/changeDelay       =": " 3000",
  "/almSpd/switchFlipH       =": " 0",
  "/almSpd/osd               =": " s6",
  "/almGs[0]/level           =": " 1",
  "/almGs[1]/level           =": " 1",
  "/almGs[2]/level           =": " 1",
  "/almGs[0]/bmRecord        =": " 0x0",
  "/almGs[1]/bmRecord        =": " 0x0",
  "/almGs[2]/bmRecord        =": " 0x0",
  "/almGs[0]/bmsnap          =": " 0x0",
  "/almGs[1]/bmsnap          =": " 0x0",
  "/almGs[2]/bmsnap          =": " 0x0",
  "/almGs[0]/beep            =": " 0",
  "/almGs[1]/beep            =": " 0",
  "/almGs[2]/beep            =": " 0",
  "/almGs[0]/adThreshold     =": " 0",
  "/almGs[1]/adThreshold     =": " 0",
  "/almGs[2]/adThreshold     =": " 0",
  "/almGs[0]/switchBmCh      =": " 0x0",
  "/almGs[1]/switchBmCh      =": " 0x0",
  "/almGs[2]/switchBmCh      =": " 0x0",
  "/almGs[0]/switchview      =": " 0",
  "/almGs[1]/switchview      =": " 0",
  "/almGs[2]/switchview      =": " 0",
  "/almGs[0]/switchdelay     =": " 0",
  "/almGs[1]/switchdelay     =": " 0",
  "/almGs[2]/switchdelay     =": " 0",
  "/almGs[0]/changeDelay     =": " 3000",
  "/almGs[1]/changeDelay     =": " 3000",
  "/almGs[2]/changeDelay     =": " 3000",
  "/almGs[0]/switchFlipH     =": " 0",
  "/almGs[1]/switchFlipH     =": " 0",
  "/almGs[2]/switchFlipH     =": " 0",
  "/almGs[0]/osd             =": " s7",
  "/almGs[1]/osd             =": " s8",
  "/almGs[2]/osd             =": " s9",
  "/camera[0]/brightness     =": " 50",
  "/camera[1]/brightness     =": " 50",
  "/camera[2]/brightness     =": " 50",
  "/camera[3]/brightness     =": " 50",
  "/camera[0]/contrast       =": " 50",
  "/camera[1]/contrast       =": " 50",
  "/camera[2]/contrast       =": " 50",
  "/camera[3]/contrast       =": " 50",
  "/camera[0]/hue            =": " 50",
  "/camera[1]/hue            =": " 50",
  "/camera[2]/hue            =": " 50",
  "/camera[3]/hue            =": " 50",
  "/camera[0]/saturation     =": " 50",
  "/camera[1]/saturation     =": " 50",
  "/camera[2]/saturation     =": " 50",
  "/camera[3]/saturation     =": " 50",
  "/camera[0]/vflip          =": " 0",
  "/camera[1]/vflip          =": " 0",
  "/camera[2]/vflip          =": " 0",
  "/camera[3]/vflip          =": " 0",
  "/camera[0]/hflip          =": " 0",
  "/camera[1]/hflip          =": " 0",
  "/camera[2]/hflip          =": " 0",
  "/camera[3]/hflip          =": " 0",
  "/camera[0]/powerline      =": " 1",
  "/camera[1]/powerline      =": " 1",
  "/camera[2]/powerline      =": " 1",
  "/camera[3]/powerline      =": " 1",
  "/camera[0]/wdr            =": " 0",
  "/camera[1]/wdr            =": " 0",
  "/camera[2]/wdr            =": " 0",
  "/camera[3]/wdr            =": " 0",
  "/camera[0]/ptzAddr        =": " 0",
  "/camera[1]/ptzAddr        =": " 0",
  "/camera[2]/ptzAddr        =": " 0",
  "/camera[3]/ptzAddr        =": " 0",
  "/camera[0]/title          =": " Front",
  "/camera[1]/title          =": " Nearside",
  "/camera[2]/title          =": " Farside",
  "/camera[3]/title          =": " Rear",
  "/camera[0]/lostbeep       =": " 0",
  "/camera[1]/lostbeep       =": " 0",
  "/camera[2]/lostbeep       =": " 0",
  "/camera[3]/lostbeep       =": " 0",
  "/camera[0]/BwMode         =": " 0",
  "/camera[1]/BwMode         =": " 0",
  "/camera[2]/BwMode         =": " 0",
  "/camera[3]/BwMode         =": " 0",
  "/camera[0]/lowFps         =": " 0",
  "/camera[1]/lowFps         =": " 0",
  "/camera[2]/lowFps         =": " 0",
  "/camera[3]/lowFps         =": " 0",
  "/camera[0]/gpioCtrl       =": " 0",
  "/camera[1]/gpioCtrl       =": " 0",
  "/camera[2]/gpioCtrl       =": " 0",
  "/camera[3]/gpioCtrl       =": " 0",
  "/camera[0]/audio          =": " 1",
  "/camera[1]/audio          =": " 1",
  "/camera[2]/audio          =": " 1",
  "/camera[3]/audio          =": " 1",
  "/camera[0]/avolume        =": " 50",
  "/camera[1]/avolume        =": " 50",
  "/camera[2]/avolume        =": " 50",
  "/camera[3]/avolume        =": " 50",
  "/camera[0]/arate          =": " 40",
  "/camera[1]/arate          =": " 40",
  "/camera[2]/arate          =": " 40",
  "/camera[3]/arate          =": " 40",
  "/camera[0]/aformat        =": " 8000",
  "/camera[1]/aformat        =": " 8000",
  "/camera[2]/aformat        =": " 8000",
  "/camera[3]/aformat        =": " 8000",
  "/camera[0]/aduration      =": " 40",
  "/camera[1]/aduration      =": " 40",
  "/camera[2]/aduration      =": " 40",
  "/camera[3]/aduration      =": " 40",
  "/camera[0]/i2c            =": " 0",
  "/camera[1]/i2c            =": " 0",
  "/camera[2]/i2c            =": " 0",
  "/camera[3]/i2c            =": " 0",
  "/camera[0]/led_disable    =": " 0",
  "/camera[1]/led_disable    =": " 0",
  "/camera[2]/led_disable    =": " 0",
  "/camera[3]/led_disable    =": " 0",
  "/camera[0]/savedType      =": " 6",
  "/camera[1]/savedType      =": " 6",
  "/camera[2]/savedType      =": " 5",
  "/camera[3]/savedType      =": " 5",
  "/camera[0]/inputframerate =": " 0",
  "/camera[1]/inputframerate =": " 0",
  "/camera[2]/inputframerate =": " 0",
  "/camera[3]/inputframerate =": " 0",
  "/camera[0]/ahdType        =": " 0",
  "/camera[1]/ahdType        =": " 0",
  "/camera[2]/ahdType        =": " 0",
  "/camera[3]/ahdType        =": " 0",
  "/camera[0]/usbCameraEable =": " 0",
  "/camera[1]/usbCameraEable =": " 0",
  "/camera[2]/usbCameraEable =": " 0",
  "/camera[3]/usbCameraEable =": " 0",
  "/muxch1[0]/bitrate        =": " 3000000",
  "/muxch1[1]/bitrate        =": " 3000000",
  "/muxch1[2]/bitrate        =": " 2000000",
  "/muxch1[3]/bitrate        =": " 2000000",
  "/muxch1[0]/fps            =": " 30",
  "/muxch1[1]/fps            =": " 30",
  "/muxch1[2]/fps            =": " 30",
  "/muxch1[3]/fps            =": " 30",
  "/muxch1[0]/gop            =": " 3",
  "/muxch1[1]/gop            =": " 3",
  "/muxch1[2]/gop            =": " 3",
  "/muxch1[3]/gop            =": " 3",
  "/muxch1[0]/size           =": " 1920x1080",
  "/muxch1[1]/size           =": " 1920x1080",
  "/muxch1[2]/size           =": " 1280x720",
  "/muxch1[3]/size           =": " 1280x720",
  "/muxch1[0]/videotype      =": " 1",
  "/muxch1[1]/videotype      =": " 1",
  "/muxch1[2]/videotype      =": " 1",
  "/muxch1[3]/videotype      =": " 1",
  "/muxch2[0]/bitrate        =": " 100000",
  "/muxch2[1]/bitrate        =": " 100000",
  "/muxch2[2]/bitrate        =": " 100000",
  "/muxch2[3]/bitrate        =": " 100000",
  "/muxch2[0]/fps            =": " 10",
  "/muxch2[1]/fps            =": " 10",
  "/muxch2[2]/fps            =": " 10",
  "/muxch2[3]/fps            =": " 10",
  "/muxch2[0]/gop            =": " 3",
  "/muxch2[1]/gop            =": " 3",
  "/muxch2[2]/gop            =": " 3",
  "/muxch2[3]/gop            =": " 3",
  "/muxch2[0]/size           =": " 640x360",
  "/muxch2[1]/size           =": " 640x360",
  "/muxch2[2]/size           =": " 640x360",
  "/muxch2[3]/size           =": " 640x360",
  "/muxch2[0]/videotype      =": " 0",
  "/muxch2[1]/videotype      =": " 0",
  "/muxch2[2]/videotype      =": " 0",
  "/muxch2[3]/videotype      =": " 0",
  "/muxch3[0]/bitrate        =": " 100000",
  "/muxch3[1]/bitrate        =": " 100000",
  "/muxch3[2]/bitrate        =": " 100000",
  "/muxch3[3]/bitrate        =": " 100000",
  "/muxch3[0]/fps            =": " 10",
  "/muxch3[1]/fps            =": " 10",
  "/muxch3[2]/fps            =": " 10",
  "/muxch3[3]/fps            =": " 10",
  "/muxch3[0]/gop            =": " 3",
  "/muxch3[1]/gop            =": " 3",
  "/muxch3[2]/gop            =": " 3",
  "/muxch3[3]/gop            =": " 3",
  "/muxch3[0]/size           =": " 640x360",
  "/muxch3[1]/size           =": " 640x360",
  "/muxch3[2]/size           =": " 640x360",
  "/muxch3[3]/size           =": " 640x360",
  "/muxch3[0]/videotype      =": " 0",
  "/muxch3[1]/videotype      =": " 0",
  "/muxch3[2]/videotype      =": " 0",
  "/muxch3[3]/videotype      =": " 0",
  "/muxch4[0]/bitrate        =": " 1000000",
  "/muxch4[1]/bitrate        =": " 1000000",
  "/muxch4[2]/bitrate        =": " 1000000",
  "/muxch4[3]/bitrate        =": " 1000000",
  "/muxch4[0]/fps            =": " 1",
  "/muxch4[1]/fps            =": " 1",
  "/muxch4[2]/fps            =": " 1",
  "/muxch4[3]/fps            =": " 1",
  "/muxch4[0]/gop            =": " 90",
  "/muxch4[1]/gop            =": " 90",
  "/muxch4[2]/gop            =": " 90",
  "/muxch4[3]/gop            =": " 90",
  "/muxch4[0]/size           =": " 640x360",
  "/muxch4[1]/size           =": " 640x360",
  "/muxch4[2]/size           =": " 640x360",
  "/muxch4[3]/size           =": " 640x360",
  "/muxch4[0]/videotype      =": " 2",
  "/muxch4[1]/videotype      =": " 2",
  "/muxch4[2]/videotype      =": " 2",
  "/muxch4[3]/videotype      =": " 2",
  "/motion[0]/db_enable      =": " 0",
  "/motion[1]/db_enable      =": " 0",
  "/motion[2]/db_enable      =": " 0",
  "/motion[3]/db_enable      =": " 0",
  "/motion[0]/db_lowbrpercent =": " 50",
  "/motion[1]/db_lowbrpercent =": " 50",
  "/motion[2]/db_lowbrpercent =": " 50",
  "/motion[3]/db_lowbrpercent =": " 50",
  "/motion[0]/db_threshold   =": " 20",
  "/motion[1]/db_threshold   =": " 20",
  "/motion[2]/db_threshold   =": " 20",
  "/motion[3]/db_threshold   =": " 20",
  "/motion[0]/db_roipercent  =": " 8",
  "/motion[1]/db_roipercent  =": " 8",
  "/motion[2]/db_roipercent  =": " 8",
  "/motion[3]/db_roipercent  =": " 8",
  "/motion[0]/threshold      =": " 50",
  "/motion[1]/threshold      =": " 50",
  "/motion[2]/threshold      =": " 50",
  "/motion[3]/threshold      =": " 50",
  "/motion[0]/roipercent     =": " 10",
  "/motion[1]/roipercent     =": " 10",
  "/motion[2]/roipercent     =": " 10",
  "/motion[3]/roipercent     =": " 10",
  "/motion[0]/record         =": " 0",
  "/motion[1]/record         =": " 0",
  "/motion[2]/record         =": " 0",
  "/motion[3]/record         =": " 0",
  "/motion[0]/beep           =": " 0",
  "/motion[1]/beep           =": " 0",
  "/motion[2]/beep           =": " 0",
  "/motion[3]/beep           =": " 0",
  "/motion[0]/changeDelay    =": " 3000",
  "/motion[1]/changeDelay    =": " 3000",
  "/motion[2]/changeDelay    =": " 3000",
  "/motion[3]/changeDelay    =": " 3000",
  "/motion[0]/osd            =": "",
  "/motion[1]/osd            =": "",
  "/motion[2]/osd            =": "",
  "/motion[3]/osd            =": "",
  "/motion[0]/bmroi          =": " 0x0",
  "/motion[1]/bmroi          =": " 0x0",
  "/motion[2]/bmroi          =": " 0x0",
  "/motion[3]/bmroi          =": " 0x0",
  "/record[0]/audio          =": " 1",
  "/record[1]/audio          =": " 1",
  "/record[2]/audio          =": " 1",
  "/record[3]/audio          =": " 1",
  "/record[0]/mode           =": " 1",
  "/record[1]/mode           =": " 1",
  "/record[2]/mode           =": " 1",
  "/record[3]/mode           =": " 1",
  "/record[0]/length         =": " 300",
  "/record[1]/length         =": " 300",
  "/record[2]/length         =": " 300",
  "/record[3]/length         =": " 300",
  "/record[0]/muxType        =": " 0",
  "/record[1]/muxType        =": " 0",
  "/record[2]/muxType        =": " 0",
  "/record[3]/muxType        =": " 0",
  "/record[0]/sched_begin1   =": " 0",
  "/record[1]/sched_begin1   =": " 0",
  "/record[2]/sched_begin1   =": " 0",
  "/record[3]/sched_begin1   =": " 0",
  "/record[0]/sched_begin2   =": " 0",
  "/record[1]/sched_begin2   =": " 0",
  "/record[2]/sched_begin2   =": " 0",
  "/record[3]/sched_begin2   =": " 0",
  "/record[0]/sched_begin3   =": " 0",
  "/record[1]/sched_begin3   =": " 0",
  "/record[2]/sched_begin3   =": " 0",
  "/record[3]/sched_begin3   =": " 0",
  "/record[0]/sched_end1     =": " 0",
  "/record[1]/sched_end1     =": " 0",
  "/record[2]/sched_end1     =": " 0",
  "/record[3]/sched_end1     =": " 0",
  "/record[0]/sched_end2     =": " 0",
  "/record[1]/sched_end2     =": " 0",
  "/record[2]/sched_end2     =": " 0",
  "/record[3]/sched_end2     =": " 0",
  "/record[0]/sched_end3     =": " 0",
  "/record[1]/sched_end3     =": " 0",
  "/record[2]/sched_end3     =": " 0",
  "/record[3]/sched_end3     =": " 0",
  "/record[0]/des            =": " 0",
  "/record[1]/des            =": " 0",
  "/record[2]/des            =": " 0",
  "/record[3]/des            =": " 0",
  "/record[0]/desKey         =": "",
  "/record[1]/desKey         =": "",
  "/record[2]/desKey         =": "",
  "/record[3]/desKey         =": "",
  "/disk[0]/debug            =": " 0",
  "/disk[1]/debug            =": " 0",
  "/disk[2]/debug            =": " 0",
  "/disk[0]/cfgPartNum       =": " 0",
  "/disk[1]/cfgPartNum       =": " 0",
  "/disk[2]/cfgPartNum       =": " 0",
  "/vout/ch_full             =": " 0",
  "/vout/ch_mode             =": " 4",
  "/vout/bmCh   A             =": " 0x0",
  "/mpp/audioType            =": " 0x0",
  "/mpp/cvbs_out             =": " 0",
  "/mpp/aout_dev             =": " 0",
  "/mpp/transparent          =": " 0",
  "/mpp/outputreduced        =": " 0",
  "/mpp/audioVolumn          =": " 16",
  "/mpp/screenSaverDelay     =": " 0",
  "/mpp/RecoverChModDelay    =": " 0",
  "/mpp/ansMode[0]           =": " 2",
  "/mpp/ansMode[1]           =": " 2",
  "/mpp/ansMode[2]           =": " 2",
  "/mpp/ansMode[3]           =": " 2",
  "/mpp/ansMode[4]           =": " 2",
  "/mpp/ansMode[5]           =": " 2",
  "/mpp/ansMode[6]           =": " 2",
  "/mpp/ansMode[7]           =": " 2",
  "/mpp/nvpMode              =": " 0",
  "/ttx/enable               =": " 1",
  "/ttx/port                 =": " 6608",
  "/ttx/server               =": " es.fwlive.co.uk",
  "/ttx/talkbackCh           =": " 0",
  "/ttx/forceUpLoad          =": " 0",
  "/ttx/gps_interval         =": " 15",
  "/ttx/gps_accoffinterval   =": " 0",
  "/ttx/gpsCacheNum          =": " 0",
  "/ttx/almCacheNum          =": " 0",
  "/gpsSvr/port              =": " 9009",
  "/gpsSvr/server            =": " uk1.fwlive.co.uk",
  "/gpsSvr/port2             =": " 0",
  "/gpsSvr/server2           =": "",
  "/gpsSvr/rptGap            =": " 10",
  "/gpsSvr/almGap            =": " 15",
  "/gpsSvr/alvGap            =": " 90",
  "/gpsSvr/idleGap           =": " 30",
  "/gpsSvr/accOffGap         =": " 60",
  "/gpsSvr/debug             =": " 1",
  "/gpsSvr/noRptAck          =": " 1",
  "/rmtCam/autoUpgrade       =": " 1",
  "/carDet/trigerNo          =": " -1",
  "/carDet/confThresh        =": " 70",
  "/carDet/interval          =": " 200",
  "/carDet/delay             =": " 2",
  "/carDet/bufId             =": " 1",
  "/carDet/quality           =": " 95",
  "/audio/length             =": " 300",
}



camNames = {
  "/camera[0]/title          =": "",
  "/camera[1]/title          =": "",
  "/camera[2]/title          =": "",
  "/camera[3]/title          =": "",
}

almNames = {
  "/almEv[0]/osd             =": "",
  "/almEv[1]/osd             =": "",
  "/almEv[2]/osd             =": "",
}

almBmch = {
  "/almEv[0]/switchBmCh      =": "",
  "/almEv[1]/switchBmCh      =": "",
  "/almEv[2]/switchBmCh      =": "",
}

screensaver = {
  "/mpp/screenSaverDelay     =": ""
}

shutdown = {
  "/power/accDelay           =": ""
}

vout = {
  "/vout/ch_full             =": "",
  "/vout/ch_mode             =": ""
}

// CALLBACK - populate dicts with values | params = name of form section, dict to alter
function getValsFromTextFields(elementName, dict){
  let fields = document.getElementsByName(elementName)
  for (let i=0; i < fields.length; i++){
    dict[fields[i].id] = fields[i].value
  }
}


// CALLBACK - populate dicts with values | params = section of form, dict to alter, number of fields to change, and number of times the function is called - correlates to the index of the dict.
function getValsFromRadioFields(elementName, dict, choices=4){
  let fields = document.getElementsByName(elementName)
  for (let i=0; i <= choices; i++){  
    if (fields[i].checked){
      dict[fields[i].id] = fields[i].value;
    }
  }
}


// CALLBACK - get values from select fields
function getValsFromSelectFields(element, dict){
  selected = element.options[element.selectedIndex]
  dict[element.id] = selected.value
}


// CALLBACK - get vals from a number field
function getValFromNumField(elementName, dict, toggleId, isShutdown=false){
  let element = document.getElementsByName(elementName)[0]
  let toggle = document.getElementById(toggleId)
  if (toggle.checked){
    dict[element.id] = element.value;
    console.log(dict[element.id])
  }
  if (toggle.checked && isShutdown === true){
    dict[element.id] = (element.value * 60);
    console.log(dict[element.id])
  }
  if (!toggle.checked){
    dict[element.id] = "0";
  }    
}

function getValFromVout(dict){
  const radios = document.getElementsByName("v_out")
  radios.forEach(element => {
    if (element.id === "one_ch"){
      const select = document.getElementById("/vout/ch_full             =")
      const selected = select.options[select.selectedIndex]
      dict[select.id] = selected.value
    } else {
      if (element.checked){
        dict["/vout/ch_full             ="] = element.value
      }
    }
  });
}


// CALLBACK - convert a dictionary in json format to array of strings, then returned as a string joined with ' ' instead of ','
function buildArray(){
  let arr = [];
  for (const [key, value] of Object.entries(template)){
    let str = key + value + "\n";
    arr.push(str)
  }
  return arr.join('')
}


// CALLBACK - return a string of lines to put in the txt file - in blob format inspired by: https://stackoverflow.com/questions/31048215/how-to-create-txt-file-using-javascript-html5
let textFile = null
returnTxt = function(cfg){
  const data = new Blob([cfg], {type: 'text/plain'});
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile);
  }
  textFile = window.URL.createObjectURL(data);
  return textFile;
};


// FIRST CALL - call funcs to put form values in dicts
async function populateDicts(){
  getValsFromTextFields("cam_names", camNames)
  getValsFromTextFields("alm_names", almNames)
  for (let i=0; i < 3; i++){ 
    getValsFromSelectFields(document.getElementById(`/almEv[${i}]/switchBmCh      =`), almBmch, 3)
    console.log(i)
  }
  getValFromNumField("saver_number", screensaver, "saver_toggle")
  getValFromNumField("shutdown_number", shutdown, "shutdown_toggle", true)
  getValFromVout(vout)

  
}

// SECOND CALL - loop through dict and change values of template according to vals of dict
function changeTemplate(dict){
  for (let j in dict){
    for (let i in template){
      if (i === j){
        template[i] = dict[j]
      }
    }
  }
}

// THIRD CALL - set the links href to the file created in returnTxt
const link = document.getElementById("downloadlink")
function final(){
  const cfgString = buildArray();
  const cfgFile = returnTxt(cfgString)
  link.setAttribute("href", cfgFile)
}

// CALLER - call functions in order - populateDicts(), changeTemplate(dict) x3, final(), on click of main CTA button
link.addEventListener("click", () => {
  populateDicts()
  .then
  (
    changeTemplate(camNames),
    changeTemplate(almNames),
    changeTemplate(almBmch),
    changeTemplate(screensaver),
    changeTemplate(shutdown),
    changeTemplate(vout)

  )
  .then
  (
    final()
  )
})

