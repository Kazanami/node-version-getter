#!/bin/bash
git remote set-url origin "https://Kazanami:${GITHUB_TOKEN}@github.com/Kazanami/node-version-getter"
git config user.name "Github Action Runner"
git config user.email "github-action-runner@example.com"
git add .
git commit -m "recursive added"
GIT_COMMIT_ERROR=$?
if [[ $GIT_COMMIT_ERROR != 0 ]];then
  echo "No Update";
  exit 0;
fi
git push origin master
