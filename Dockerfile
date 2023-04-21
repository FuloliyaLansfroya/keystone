#1、基于镜像node版本
FROM node:16.13.1
#2、作者
MAINTAINER wuhe
#3、参数，node的环境为生产环境
# ENV NODE_ENV=development
#4、任意ip
ENV HOST 0.0.0.0
ENV PORT 3001
#5、容器内创建目录/hello
RUN mkdir -p /keystone
#6、复制当前的内容到容器内容部目录/hello
COPY . /keystone
#7、切换工作目录到/hello
WORKDIR /keystone
#8、暴露端口3000，默认端口
EXPOSE 3001
#10、安装依赖
RUN npm install --no-package-lock --registry=https://registry.npm.taobao.org
#11、构建，生成dist文件
RUN npm run build
#12、start
CMD ["npm","start"]

