ffmpeg -f v4l2 -framerate 30 -video_size 1024x576 -i /dev/video0 myvideo.mp4 -r 1 -update 1 uploadImage/current_frame.jpg -y -y