# ocr


pi/test/version/ is from https://www.w3schools.com/nodejs/nodejs_raspberrypi_rgb_led_websocket.asp

Webcam is from https://kaanlabs.com/rtmp-hls-webcam-live-streaming-with-hardware-accelerated-h264-on-a-raspberry-pi/ for webcam live


## install Ubuntu

Download Ubuntu Server from page https://ubuntu.com/download/raspberry-pi

Download raspberry-pi-imager from page https://www.raspberrypi.com/software/, use Raspberry Pi Imager to install Raspberry Pi OS(the last Ubuntu o). 
The Ubuntu image for Raspberry Pi uses cloud-init to configure the system at boot time. This means that in your SD card system-boot volume, there should be a YAML file, called network-config. Open this file in VS Code (or your favourite text editor).

Edit it so that it looks like the following. The indentation is important, and it's the 'wifis' section that you're editing to match your wifi configuration. Replace 'YOUR-WIFI-SSD' with your WiFi's name, and 'YOUR-WIFI-PASSWORD' with your WiFi password.
edit network-config
```sh
version: 2
ethernets:
   eth0:
      dhcp4: true
      optional: true
wifis:
   wlan0:
      dhcp4: true
      optional: true
      access-points:
         "YOUR-WIFI-SSID":
            password: "YOUR-WIFI-PASSWORD"
```

## enable ssh

First logging in with keyboard and monitor, with username ubuntu and password ubuntu
it will change the password first time.
reload ssh service
```sh
sudo systemctl enable ssh.service
sudo systemctl start ssh.service
```
then you can connect raspberry pi with ssh.
or repower the raspberry pi, it will connect auto.

## create ssh key
Create ssh by ssh-keygen and add it. 
```sh
cd ~/.ssh
eval "$(ssh-agent -s)"
ssh-keygen -t rsa
ssh-add ~/.ssh/id_rsa
```
Copy the ssh id to default host with default user.
```sh
cd ~/.ssh
ssh-copy-id -i ~/.ssh/id_rsa.pub default_user@default_host
```
Create a ~/.ssh/config file and insert the line:
```sh
UserKnownHostsFile ~/.ssh/known_hosts
```

## set hostname
Change hosts file                      
```sh
sudo nano /etc/hosts
```
```sh
127.0.0.1 localhost
127.0.0.1 ubuntu
```
Then

```sh
sudo rm /etc/resolv.conf
sudo ln -s /var/run/systemd/resolve/resolv.conf /etc/resolv.conf
sudo systemctl restart systemd-resolved.service
```

## install nodejs

Install node.js and npm:

```sh
sudo apt update
sudo apt upgrade
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```

## install mongodb

https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/


## install ffmpeg

install gcc library
```sh
apt-get install build-essential
```
I downloaded and compiled ffmpeg from the source. Download ffmpeg_4.2.4.orig.tar.xz
https://launchpad.net/ubuntu/+source/ffmpeg (version 20.04.3 LTS The Focal Fossa)
Unpack it.
```sh
tar -xvf ffmpeg_4.2.4.orig.tar.xz
cd ffmpeg-4.2.4
./configure
make
sudo make install
```

## create service

```sh
mkdir github
cd github
git clone https://github.com/dty717/ocr.git
```

```sh
cd ocr/
touch index.js
chmod +x index.js
cd /lib/systemd/system
sudo touch ocr.service
sudo nano ocr.service
```

```sh
sudo systemctl daemon-reload
sudo systemctl enable ocr.service
sudo systemctl start ocr.service
```

https://roboticsbackend.com/make-a-raspberry-pi-3-program-start-on-boot/

## set static ip

```sh
sudo nano /etc/netplan/50-cloud-init.yaml
```

```

# This file is generated from information provided by the datasource.
# Changes to it will not persist across an instance reboot.  To disable
# cloud-init's network configuration capabilities, write a file
# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the
# following: network: {config: disabled}
network:
    version: 2
    renderer: networkd
    wifis:
        wlan0:
            access-points:
                DESKTOP-18:
                    password: '12345678'
            dhcp4: true
            optional: true
    ethernets:
        eth0:
            addresses:
                - 192.168.0.2/24
```

```sh
sudo netplan generate
sudo netplan try
# sudo netplan apply
```
## install tesseract

```sh
sudo apt-get install -y g++ # or clang++ (presumably)
sudo apt-get install -y autoconf
sudo apt-get install -y automake
sudo apt-get install -y libtool
sudo apt-get install -y pkg-config
sudo apt-get install -y libpng-dev
sudo apt-get install -y libjpeg8-dev
sudo apt-get install -y libtiff5-dev
sudo apt-get install -y zlib1g-dev
sudo apt-get install -y libicu-dev
sudo apt-get install -y libpango1.0-dev
sudo apt-get install -y libcairo2-dev
sudo apt-get install -y libleptonica-dev
cd ~/github
git clone https://github.com/tesseract-ocr/tesseract.git
cd tesseract
./autogen.sh
./configure
make
sudo make install
sudo ldconfig
make training
sudo make training-install
```

add TESSDATA_PREFIX
```sh
cd /home/ubuntu/github/
mkdir tessdata
wget https://github.com/tesseract-ocr/tessdata_best/raw/main/eng.traineddata
wget https://github.com/tesseract-ocr/tessdata_best/raw/main/chi_sim_vert.traineddata
wget https://github.com/tesseract-ocr/tessdata_best/raw/main/chi_sim.traineddata
sudo nano ~/.bashrc
```
add in the bottom
```sh
export TESSDATA_PREFIX=/home/ubuntu/github/tessdata
```
```sh
source ~/.bash
```
test
```sh
cd ~/github/ocr/pi
tesseract uploadImage/current_frame.jpg testCurrent -l eng+chi_sim
```


```sh
npm install -g node-pre-gyp

```

# link

https://ubuntu.com/download/raspberry-pi

https://forums.raspberrypi.com/viewtopic.php?t=125345#p840309

https://roboticsbackend.com/install-ubuntu-mate-18-04-on-raspberry-pi-3-b/

https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/

https://forums.raspberrypi.com/viewtopic.php?t=125367#p1176686

https://roboticsbackend.com/make-a-raspberry-pi-3-program-start-on-boot/

https://github.com/nodesource/distributions/edit/master/README.md

https://stackoverflow.com/a/61444221/7734634

https://askubuntu.com/a/1343976

https://unix.stackexchange.com/a/47092/412884

https://netplan.io/examples/

https://tesseract-ocr.github.io/tessdoc/Compiling.html

https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html

https://youtu.be/GQJI4WiMuDk

https://youtu.be/rgWVm_j3llo

https://stackoverflow.com/a/15578473/7734634

https://www.rickmakes.com/cheap-hdmi-usb-capture-card-on-a-raspberry-pi-4/