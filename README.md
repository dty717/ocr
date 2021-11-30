# ocr


pi/test/version/ is from https://www.w3schools.com/nodejs/nodejs_raspberrypi_rgb_led_websocket.asp

Webcam is from https://kaanlabs.com/rtmp-hls-webcam-live-streaming-with-hardware-accelerated-h264-on-a-raspberry-pi/ for webcam live


## install Ubuntu

Download Ubuntu Server from page https://ubuntu.com/download/raspberry-pi

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

first loggin in with keyboard and monitor, with username ubuntu and password ubuntu
it will change the password first time
set the ssh key by
```sh
sudo rm /etc/ssh/ssh_host*
sudo ssh-keygen -A
```
then reload ssh service
```sh
sudo systemctl enable ssh.service
sudo systemctl start ssh.service
```
then you can connect raspberry pi with ssh

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

Install node.js v17.x:

```sh
curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## install mongodb

https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/


## install ffmpeg

install gcc library
```sh
apt-get install build-essential
```
I downloaded and compiled ffmpeg from the source. Download ffmpeg_4.4.orig.tar.xz
https://launchpad.net/ubuntu/+source/ffmpeg
Unpack it.
```sh
tar -xvf ffmpeg_4.4.orig.tar.xz
cd ffmpeg-4.4
./configure
make
sudo make install
```

## create service

```sh
mkdir github
git clone https://github.com/dty717/ocr.git
```

```sh
cd ocr/
touch capture.js
chmod +x capture.js
cd /lib/systemd/system
sudo touch  ocr.service
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
sudo netplan apply
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

https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html
