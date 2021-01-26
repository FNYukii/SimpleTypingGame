# Simple Typing

## 実行環境
Dockerのコンテナ上のwebサーバーで動作
PHP7.4とNginxのDockerイメージを使用

## 環境構築手順

### Docker for DesktopとDocker-composeのインストール
以下のリンク先からDocker for Desktopをインストールしてください。Docker for DesktopをインストールするとDocker-composeも一緒にインストールされます。

Windows版
* https://docs.docker.com/docker-for-windows/install/

Mac版
* https://docs.docker.com/docker-for-mac/install/

Linux版
* https://docs.docker.com/engine/install/


以下のコマンドでインストール完了を確認できます。
```
$ docker -v
Docker version 20.10.2, build 2291f61

$ docker-compose -v
docker-compose version 1.27.4, build 40524192
```

### 起動する
Docker for Desktopが起動していない場合は、まず以下のコマンドで起動を行ってください。
```
docker run -d -p 80:80 docker/getting-started
```
コマンドラインでSimpleTyping-dockerディレクトリの直下へ移動し、以下のコマンドを実行してください。Dockerコンテナが作成され、起動します。
```
$ docker-compose up -d --build
```

以下のコマンドでコンテナの状態を確認できます。2つのコンテナのStateがUpになっていたら成功です。
```
$ docker-compose ps
          Name                         Command               State           Ports
------------------------------------------------------------------------------------------
simpletyping-docker_app_1   docker-php-entrypoint php-fpm    Up      9000/tcp
simpletyping-docker_web_1   /docker-entrypoint.sh ngin ...   Up      0.0.0.0:10080->80/tcp
```

### Webブラウザで確認
ChromeやMicrosoft Edgeなどお好きなWebブラウザを開き、アドレスバーに「http://localhost:10080/ 」と入力します。
読み込みに時間がかかる場合がありますが、うまくいけばSimpleTypingのトップページが表示されます。

### コンテナ停止
Dockerコンテナを停止するには以下のコマンドを入力してください。
```
$ docker-compose down
Stopping simpletyping-docker_web_1 ... done                                                                                                                                                                                                               Stopping simpletyping-docker_app_1 ... done                                                                                                                                                                                                               Removing simpletyping-docker_web_1 ... done                                                                                                                                                                                                               Removing simpletyping-docker_app_1 ... done                                                                                                                                                                                                               Removing network simpletyping-docker_default
```

## 使用素材
効果音用素材：[OtoLogic](https://otologic.jp)