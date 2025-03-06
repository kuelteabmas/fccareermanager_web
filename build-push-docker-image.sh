!/bin/sh

docker build -t kuelteabmas/fccareermanager_web .

docker image tag kuelteabmas/fccareermanager_web kuelteabmas/fccareermanager_web:shscript

docker push kuelteabmas/fccareermanager_web:shscript
