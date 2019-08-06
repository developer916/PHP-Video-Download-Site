#!/bin/bash
LD_LIBRARY_PATH=''
/usr/local/bin/youtube-dl -o "/opt/lampp/htdocs/youtube/vimeo/%(id)s.%(ext)s"  $1
