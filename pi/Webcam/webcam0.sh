#!/bin/bash
ffmpeg -threads auto -f video4linux2 -i /dev/video0 -s 720x480 -r 25 -vcodec h264_omx -vb 9000k -bufsize 9000k -vf "format=yuv420p" -g 50 -an -f flv rtmp://127.0.0.1:1935/webcam/webcam0

