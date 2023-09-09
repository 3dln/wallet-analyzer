#!/bin/bash

git push

comm="docker build -t web-client ."
echo $comm
eval $comm

hash=$(docker inspect web-client -f '{{ .Id }}' | perl -wnE'say /sha256.*/g')

comm="docker tag $hash registry.camtekle.tk:5000/jobs-app:latest"
echo $comm
eval $comm
comm="docker push registry.camtekle.tk:5000/jobs-app:latest" 
echo $comm
eval $comm

docker rmi web-client

