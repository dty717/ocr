ffmpeg -f v4l2 -framerate 30 -video_size 1024x576 -i /dev/video0 myvideo.mp4 -r 1 -update 1 uploadImage/current_frame.jpg -y -y


ffmpeg -s 640x480 -f video4linux2 -i /dev/video0 -f mpegts \
-b 800k -r 30 udp://127.0.0.1:49999

ffmpeg -s 640x480 -f video4linux2 -i /dev/video0 -f mpegts \
-b 0 -r 30 http://192.168.1.3:8081/abc/640/480/

ffmpeg -i <some input> -f mpegts http://localhost:8081/yoursecret

ffmpeg \
	-f v4l2 \
		-framerate 25 -video_size 640x480 -i /dev/video0 \
	-f mpegts \
		-codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0 \
	http://192.168.1.3:8081/abc/


ffmpeg \
	-f v4l2 \
		-framerate 25 -video_size 640x480 -i /dev/video0 \
	-f mpegts \
		-codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0 \
	udp://127.0.0.1:49999

    