#!/bin/bash -ue

set -u
URL="https://raw.github.com/Kazanami/node-version-getter/master"
OPTION="-L -q -o -"
# check installed nodebrew
echo "Check nodebrew..."

if [[ $(which nodebrew) ]];then
	echo "Found"
else
	echo "Not Found"
	echo "Please Install nodebrew.";
	exit 1;
fi

case "$@" in
		"latest") VERSION=$(curl ${OPTION} ${URL}/now_latest);;
	"stable"|"lts"| *) VERSION=$(curl ${OPTION} ${URL}/now_lts);;
esac

echo "Downloading node ${VERSION}..."
nodebrew install ${VERSION}
if [[ $? ]];then
	nodebrew use ${VERSION}
fi
