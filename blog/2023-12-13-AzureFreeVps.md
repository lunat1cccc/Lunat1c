---
slug: Azure
title: AzureFreeAccount
authors:
  name: bo wang
  title: AzureFreeAccount
tags: [Azure]
---

****

> :x:
> 
> - 创建资源先（后续完善）

---

> - 先连接上vm
> 
> - 输入命令1
>   
>   ```bash
>   # Add Docker's official GPG key:
>   sudo apt-get update
>   sudo apt-get install ca-certificates curl gnupg
>   sudo install -m 0755 -d /etc/apt/keyrings
>   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
>   sudo chmod a+r /etc/apt/keyrings/docker.gpg
>   
>   # Add the repository to Apt sources:
>   echo \
>     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
>     $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
>     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
>   sudo apt-get update
>   ```
> 
> - 输入命令2
>   
>   ```bash
>   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
>   ```
> 
> - 验证docker是否成功安装
>   
>   ```bash
>   sudo docker run hello-world
>   ```
>   
>   如果报了hello from docker说明安装成功了。

:::tip 扩展阅读

- dockerEngine安装：[Install Docker Engine on Ubuntu | Docker Docs](https://docs.docker.com/engine/install/ubuntu/)

- chatGPT-next-web：
  
  ```bash
  docker run --name chatgpt-next-web -d -p 3000:3000 --restart always yidadaa/chatgpt-next-web
  ```

- 

:::