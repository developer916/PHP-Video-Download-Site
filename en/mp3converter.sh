#!/bin/bash
LD_LIBRARY_PATH=''
/usr/local/bin/youtube-dl -o "/opt/lampp/htdocs/youtube/mp3/%(id)s.%(ext)s" --extract-audio  --audio-format mp3 $1
