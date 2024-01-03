"use strict";(self.webpackChunklunat_1_c=self.webpackChunklunat_1_c||[]).push([[7565],{5716:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Azure","metadata":{"permalink":"/lunat1c/blog/Azure","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-13-AzureFreeVps.md","source":"@site/blog/2023-12-13-AzureFreeVps.md","title":"AzureFreeAccount","description":"- \u521b\u5efa\u8d44\u6e90\u5148\uff08\u540e\u7eed\u5b8c\u5584\uff09","date":"2023-12-13T00:00:00.000Z","formattedDate":"December 13, 2023","tags":[{"label":"Azure","permalink":"/lunat1c/blog/tags/azure"}],"readingTime":1.005,"hasTruncateMarker":false,"authors":[{"name":"bo wang","title":"AzureFreeAccount"}],"frontMatter":{"slug":"Azure","title":"AzureFreeAccount","authors":{"name":"bo wang","title":"AzureFreeAccount"},"tags":["Azure"]},"unlisted":false,"nextItem":{"title":"AZ204","permalink":"/lunat1c/blog/az204"}},"content":"****\\r\\n\\r\\n> :x:\\r\\n> \\r\\n> - \u521b\u5efa\u8d44\u6e90\u5148\uff08\u540e\u7eed\u5b8c\u5584\uff09\\r\\n\\r\\n---\\r\\n\\r\\n> - \u5148\u8fde\u63a5\u4e0avm\\r\\n> \\r\\n> - \u8f93\u5165\u547d\u4ee41\\r\\n>   \\r\\n>   ```bash\\r\\n>   # Add Docker\'s official GPG key:\\r\\n>   sudo apt-get update\\r\\n>   sudo apt-get install ca-certificates curl gnupg\\r\\n>   sudo install -m 0755 -d /etc/apt/keyrings\\r\\n>   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\\r\\n>   sudo chmod a+r /etc/apt/keyrings/docker.gpg\\r\\n>   \\r\\n>   # Add the repository to Apt sources:\\r\\n>   echo \\\\\\r\\n>     \\"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\\\\r\\n>     $(. /etc/os-release && echo \\"$VERSION_CODENAME\\") stable\\" | \\\\\\r\\n>     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\\r\\n>   sudo apt-get update\\r\\n>   ```\\r\\n> \\r\\n> - \u8f93\u5165\u547d\u4ee42\\r\\n>   \\r\\n>   ```bash\\r\\n>   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\\r\\n>   ```\\r\\n> \\r\\n> - \u9a8c\u8bc1docker\u662f\u5426\u6210\u529f\u5b89\u88c5\\r\\n>   \\r\\n>   ```bash\\r\\n>   sudo docker run hello-world\\r\\n>   ```\\r\\n>   \\r\\n>   \u5982\u679c\u62a5\u4e86hello from docker\u8bf4\u660e\u5b89\u88c5\u6210\u529f\u4e86\u3002\\r\\n\\r\\n:::tip \u6269\u5c55\u9605\u8bfb\\r\\n\\r\\n- dockerEngine\u5b89\u88c5\uff1a[Install Docker Engine on Ubuntu | Docker Docs](https://docs.docker.com/engine/install/ubuntu/)\\r\\n\\r\\n- chatGPT-next-web\uff1a\\r\\n  \\r\\n  ```bash\\r\\n  docker run --name chatgpt-next-web -d -p 3000:3000 --restart always yidadaa/chatgpt-next-web\\r\\n  ```\\r\\n\\r\\n- \\r\\n\\r\\n:::"},{"id":"az204","metadata":{"permalink":"/lunat1c/blog/az204","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-06-az204.md","source":"@site/blog/2023-12-06-az204.md","title":"AZ204","description":"PDF\uff1a","date":"2023-12-06T00:00:00.000Z","formattedDate":"December 6, 2023","tags":[{"label":"Azure","permalink":"/lunat1c/blog/tags/azure"}],"readingTime":3.88,"hasTruncateMarker":false,"authors":[{"name":"bo wang","title":"AZ-204"}],"frontMatter":{"slug":"az204","title":"AZ204","authors":{"name":"bo wang","title":"AZ-204"},"tags":["Azure"]},"unlisted":false,"prevItem":{"title":"AzureFreeAccount","permalink":"/lunat1c/blog/Azure"},"nextItem":{"title":"\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u5361\u987f","permalink":"/lunat1c/blog/filexplore"}},"content":"#### PDF\uff1a\\r\\n\\r\\n<embed\\r\\n  src=\\"./pdf/azure/111.pdf\\"\\r\\n  type=\\"application/pdf\\"\\r\\n  style={{ width: \\"100%\\", height: \\"75vh\\" }}\\r\\n/>\\r\\n\\r\\n**\u6ce8\u610f\uff1a\u5e26*\u53f7\u7684\u8868\u793a\uff0c\u539f\u9898\u7ed9\u7684\u7b54\u6848\u5e76\u4e0d\u5bf9\uff0c\u8bf7\u6839\u636e\u8ba8\u8bba\u6216\u8005most voted\u8fdb\u884c\u6b63\u786e\u7b54\u6848\u7684\u9009\u62e9**\\r\\n\\r\\n> :x:\\r\\n> \\r\\n> - **questionSet1**\uff1a~~2~~\uff0c5\uff0c~~6~~\uff0c7\uff0c~~8~~\uff0c~~12~~\uff0c~~13~~\uff0c~~16~~\uff0c\uff08~~17~~\uff1aredis cache\uff0c~~18~~\uff1aCDN\uff0c~~19~~\uff1aSAN\uff09\uff0c20\uff0c21\uff0c\uff0823\uff0c~~29~~\uff09\uff0c\uff08~~24\uff0c25\uff0c26\uff0c27~~\uff09\uff0c30\uff0c31\uff0c32\uff0c~~33~~\uff0c34\uff0c35\uff0c~~36*~~\uff0c37*\\r\\n> \\r\\n> - **questionSet2**\uff1a1\uff0c2\uff0c3\uff0c\uff084\uff0c8\uff0c19\uff09\uff0c\uff085*\uff0c6*\uff0c7*\uff09\uff0c~~9~~\uff0c10\uff0c11\uff0c12\uff0c13\uff0c14\uff0c15\uff0c\uff0816\uff0c17\uff0c18\uff09\uff0c20\uff0c21\uff0c**22**\uff0c23\uff0c24\uff0c25\uff0c26\uff0c27*\uff0c28*\uff0c29\uff0c31\uff0c32*\uff0c33*\uff0c34\uff0c35*\uff0c36\uff0c37\uff0c38\uff0c39\uff0c40*\uff0c41\uff0c43*\uff0c44\uff0c48*\uff0c49\uff0c50\uff0c51*\uff0c52*\uff0c53\uff0c54\uff0c55*\uff0c56\\r\\n> \\r\\n> - **questionSet3**\uff1a1\uff0c2\uff0c3\uff0c4*\uff0c5*\uff0c6*\uff0c7\uff0c8*\uff0c9\uff0c11\uff0c12\uff0c13\uff0c14\uff0c15\uff0c16*\uff0c17\uff0c18\uff0c19\uff0c20\uff0c21\uff0c22\uff0c23\uff0c25\uff0c26\uff0c28*\uff0c30*\uff0c31\uff0c32\uff0c33\uff0c34\uff0c36\uff0c37\uff0c38\uff0c39\uff0c40\uff0c41\uff0c43\uff0c44\uff0c45\uff0c46*\uff0c47\uff0c48\uff0c49*\uff0c50*\uff0c\\r\\n> \\r\\n> - **questionSet4**\uff1a1\uff0c4*\uff0c5\uff0c6*\uff0c7\uff0c8*\uff0c9*\uff0c10\uff0c11\uff0c12\uff0c13\uff0c14\uff0c15\uff0c17\uff0c18*\uff0c19\uff0c20\uff0c21*\uff0c25\uff0c26*\uff0c27\uff0c28*\uff0c29*\uff0c30\uff0c31\uff0c32*\uff0c33\uff0c34\uff0c35\uff0c36\uff0c38\uff0c39*\uff0c40\uff0c41\uff0c42\uff0c43*\uff0c46\uff0c47\uff0c48*\uff0c49\uff0c50\uff0c51\uff0c52\uff0c53\uff0c56\uff0c57\uff0c58\uff0c59\uff0c60*\uff0c61\uff0c62\uff0c63*\uff0c64\uff0c65\uff0c66*\uff0c67\\r\\n> \\r\\n> - **questionSet5**\uff1a1*\uff0c4*\uff0c5*\uff0c6*\uff0c7*\uff0c8\uff0c9*\uff0c11\uff0c12\uff0c14*\uff0c15*\uff0c16\uff0c17\uff0c18\uff0c19\uff0c20*\uff0c21*\uff0c22\uff0c23*\uff0c24\uff0c25\uff0c26\uff0c27\uff0c28\uff0c29\uff0c30\uff0c31*\uff0c32\uff0c33\uff0c35\uff0c36\uff0c37*\uff0c38\uff0c39\uff0c40\uff0c41\uff0c42\uff0c43\uff0c44\uff0c45\\r\\n> \\r\\n> - **questionSet6**\uff1a1*\uff0c4\uff0c5\uff0c6\uff0c7\uff0c8*\uff0c9\uff0c10\uff0c11*\uff0c12*\uff0c13\uff0c14\uff0c16\uff0c17\uff0c18\uff0c19\uff0c20\uff0c21*\uff0c23\uff0c24\uff0c26*\uff0c27*\uff01\uff0c30\uff0c31\uff0c32*\uff0c33*\uff0c35*\uff0c36\uff0c37*\uff0c38\uff0c39\uff0c40\uff0c41\uff0c42\uff0c43\uff0c44*\uff0c45*\uff0c46*\uff0c48\uff0c49\uff0c50\uff0c51\uff0c52\\r\\n> \\r\\n> - **Testlet1**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet10**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet11**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet12**\uff1a1*\uff0c2\uff0c3\uff0c4\\r\\n> \\r\\n> - **Testlet13**\uff1a1\uff0c2*\uff0c3\uff0c4\uff0c5\\r\\n> \\r\\n> - **Testlet14**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet15**\uff1a1\uff0c2*\uff0c3*\uff0c4\uff0c5*\uff0c6\\r\\n> \\r\\n> - **Testlet16**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet17**\uff1a1*\uff0c2\\r\\n> \\r\\n> - **Testlet18**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet19**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet2**\uff1a1\\r\\n> \\r\\n> - **Testlet20**\uff1a1\uff0c2\uff0c3\uff0c4\\r\\n> \\r\\n> - **Testlet21**\uff1a1*\uff0c2\uff0c3\\r\\n> \\r\\n> - **Testlet22**\uff1a1*\\r\\n> \\r\\n> - **Testlet23**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet24**\uff1a1*\uff0c2\\r\\n> \\r\\n> - **Testlet25**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet26**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet3**\uff1a1\uff0c\\r\\n> \\r\\n> - **Testlet4**\uff1a1*\uff0c2*\\r\\n> \\r\\n> - **Testlet5**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet6**\uff1a1*\uff0c2\\r\\n> \\r\\n> - **Testlet7**\uff1a1\\r\\n> \\r\\n> - **Testlet8**\uff1a1\uff0c2*\uff0c3*\\r\\n> \\r\\n> - **Testlet9**\uff1a1*\uff0c\\r\\n\\r\\n---\\r\\n\\r\\n---\\r\\n\\r\\n> :100:\u7b2c\u4e00\u6b21\\r\\n> \\r\\n> - ****questionSet1**\uff1a~~2~~\uff0c5\uff0c~~6~~\uff0c7\uff0c~~8~~\uff0c~~12~~\uff0c~~13~~\uff0c~~16~~\uff0c\uff08~~17~~\uff1aredis cache\uff0c~~18~~\uff1aCDN\uff0c~~19~~\uff1aSAN\uff09\uff0c20\uff0c21\uff0c\uff0823\uff0c~~29~~\uff09\uff0c\uff08~~24\uff0c25\uff0c26\uff0c27~~\uff09\uff0c30\uff0c31\uff0c32\uff0c~~33~~\uff0c34\uff0c35\uff0c~~36*~~\uff0c37*\\r\\n> \\r\\n> - **questionSet2**\uff1a1\uff0c2\uff0c3\uff0c\uff084\uff0c~~8~~\uff0c~~19~~\uff09\uff0c\uff08~~5*\uff0c6*\uff0c7*~~\uff09\uff0c~~9~~\uff0c10\uff0c~~11~~\uff0c12\uff0c~~13~~\uff0c14\uff0c~~15~~\uff0c\uff08~~16*~~\uff0c17*\uff0c~~18*~~\uff09\uff0c20\uff0c~~21*~~\uff0c**22***\uff0c23\uff0c**24**\uff0c**25**\uff0c~~26~~\uff0c**27***\uff0c28*\uff0c29\uff0c~~31~~\uff0c~~32*~~\uff0c~~33*~~\uff0c34\uff0c~~35*~~\uff0c~~36~~\uff0c**37**\uff0c~~38~~\uff0c**39**\uff0c40*\uff0c~~41~~\uff0c~~43~~\uff0c~~44~~\uff0c47\uff0c~~48*~~\uff0c49\uff0c50\uff0c**51***\uff0c52*\uff0c53\uff0c54\uff0c55*\uff0c56\\r\\n> \\r\\n> - **questionSet3**\uff1a1\uff0c~~2~~\uff0c3\uff0c~~4*~~\uff0c5*\uff0c**6***\uff0c~~7~~\uff0c~~8*~~\uff0c~~9~~\uff0c10\uff0c~~11~~\uff0c~~12~~\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c~~16*~~\uff0c**17**\uff0c~~18~~\uff0c~~19~~\uff0c20\uff0c~~21~~\uff0c22\uff0c~~23~~\uff0c**25**\uff0c**26**\uff0c~~28*~~\uff0c30*\uff0c~~31~~\uff0c~~32~~\uff0c~~33~~\uff0c**34**\uff0c35\uff0c**36**\uff0c37\uff0c~~38~~\uff0c~~39~~\uff0c**40**\uff0c~~41~~\uff0c~~43~~\uff0c~~44~~\uff0c**45**\uff0c~~46*~~\uff0c~~47~~\uff0c48\uff0c~~49*~~\uff0c50*\uff0c\\r\\n> \\r\\n> - **questionSet4**\uff1a~~1~~\uff0c~~4*~~\uff0c~~5~~\uff0c~~6*~~\uff0c7\uff0c8*\uff0c9*\uff0c\uff0810\uff0c~~11~~\uff0c~~12~~\uff09\uff0c13\uff0c~~14~~\uff0c**15**\uff0c17\uff0c**18***\uff0c19\uff0c~~20~~\uff0c~~21*~~\uff0c22\uff0c~~25~~\uff0c~~26*~~\uff0c27\uff0c~~28*~~\uff0c**29***\uff0c**30**\uff0c**31**\uff0c32*\uff0c**33**\uff0c**34**\uff0c~~35~~\uff0c**36**\uff0c37\uff0c**38**\uff0c**39***\uff0c**40**\uff0c**41**\uff0c**42**\uff0c43*\uff0c45\uff0c~~46~~\uff0c~~47~~\uff0c~~48*~~\uff0c**49**\uff0c~~50~~\uff0c51\uff0c52\uff0c~~53~~\uff0c55\uff0c~~56~~\uff0c**57**\uff0c~~58~~\uff0c59\uff0c**60***\uff0c**61**\uff0c62\uff0c~~63*~~\uff0c~~64~~\uff0c65\uff0c66*\uff0c67\\r\\n> \\r\\n> - **questionSet5**\uff1a1\uff0c~~4*~~\uff0c**5***\uff0c**6***\uff0c~~7*~~\uff0c8\uff0c~~9*~~\uff0c11\uff0c12\uff0c**14***\uff0c~~15*~~\uff0c16\uff0c**17**\uff0c~~18~~\uff0c**19**\uff0c~~20*~~\uff0c**21**\uff0c22\uff0c**23***\uff0c~~24~~\uff0c25\uff0c26\uff0c**27**\uff0c28\uff0c~~29~~\uff0c~~30~~\uff0c31*\uff0c**32**\uff0c~~33~~\uff0c34\uff0c**35**\uff0c**36**\uff0c37*\uff0c**38**\uff0c39\uff0c40\uff0c~~41~~\uff0c42\uff0c43\uff0c44\uff0c~~45~~\\r\\n> \\r\\n> - **questionSet6**\uff1a~~1*~~\uff0c3\uff0c~~4~~\uff0c**5**\uff0c~~6~~\uff0c7\uff0c8*\uff0c9\uff0c10\uff0c~~11*~~\uff0c12*\uff0c~~13~~\uff0c**14**\uff0c~~16~~\uff0c17\uff0c18\uff0c19\uff0c~~20~~\uff0c21*\uff0c~~23~~\uff0c24\uff0c25\uff0c26*\uff0c**27*\uff01**\uff0c29\uff0c30\uff0c31\uff0c**32***\uff0c33*\uff0c~~35*~~\uff0c**36**\uff0c**37***\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c41\uff0c~~42~~\uff0c43\uff0c~~44*~~\uff0c45*\uff0c46*\uff0c48\uff0c49\uff0c~~50~~\uff0c~~51~~\uff0c52\\r\\n> \\r\\n> - **Testlet1**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet10**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet11**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet12**\uff1a~~1*~~\uff0c~~2~~\uff0c~~3~~\uff0c4\\r\\n> \\r\\n> - **Testlet13**\uff1a1\uff0c~~2*~~\uff0c3\uff0c4\uff0c5\\r\\n> \\r\\n> - **Testlet14**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet15**\uff1a1*\uff0c**2***\uff0c~~3*~~\uff0c4\uff0c5*\uff0c6\\r\\n> \\r\\n> - **Testlet16**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet17**\uff1a1*\uff0c2\\r\\n> \\r\\n> - **Testlet18**\uff1a~~1~~\uff0c2*\\r\\n> \\r\\n> - **Testlet19**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet2**\uff1a1\\r\\n> \\r\\n> - **Testlet20**\uff1a1\uff0c2\uff0c**3\uff0c4**\\r\\n> \\r\\n> - **Testlet21**\uff1a1*\uff0c2\uff0c3\\r\\n> \\r\\n> - **Testlet22**\uff1a**1***\\r\\n> \\r\\n> - **Testlet23**\uff1a**1**\uff0c2*\\r\\n> \\r\\n> - **Testlet24**\uff1a1*\uff0c2\\r\\n> \\r\\n> - **Testlet25**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet26**\uff1a1\uff0c2\uff0c3\\r\\n> \\r\\n> - **Testlet3**\uff1a1\uff0c\\r\\n> \\r\\n> - **Testlet4**\uff1a1*\uff0c2*\\r\\n> \\r\\n> - **Testlet5**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet6**\uff1a**1***\uff0c**2**\\r\\n> \\r\\n> - **Testlet7**\uff1a**1**\\r\\n> \\r\\n> - **Testlet8**\uff1a1\uff0c**2***\uff0c3*\\r\\n> \\r\\n> - **Testlet9**\uff1a1*\uff0c\\r\\n\\r\\n---\\r\\n\\r\\n---\\r\\n\\r\\n> :100:\u7b2c\u4e8c\u6b21\\r\\n> \\r\\n> - ****questionSet1**\uff1a~~2~~\uff0c~~5~~\uff0c~~6~~\uff0c~~7~~\uff0c~~8~~\uff0c11\uff0c~~12~~\uff0c~~13~~\uff0c~~16~~\uff0c\uff0817\uff1aredis cache\uff0c~~18~~\uff1aCDN\uff0c~~19~~\uff1aSAN\uff09\uff0c20\uff0c~~21~~\uff0c22\uff0c\uff08~~23~~\uff0c~~29~~\uff09\uff0c\uff08~~24\uff0c25\uff0c26\uff0c27~~\uff09\uff0c~~30~~\uff0c~~31~~\uff0c32\uff0c~~33~~\uff0c~~34~~\uff0c35\uff0c~~36*~~\uff0c37*\\r\\n> \\r\\n> - **questionSet2**\uff1a1\uff0c2\uff0c3\uff0c\uff08~~4~~\uff0c~~8~~\uff0c~~19~~\uff09\uff0c\uff085*\uff0c6*\uff0c7*\uff09\uff0c~~9~~\uff0c10\uff0c~~11~~\uff0c12\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c\uff08~~16*~~\uff0c17*\uff0c~~18*~~\uff09\uff0c~~20~~\uff0c21*\uff0c~~22*~~\uff0c~~23~~\uff0c**24**\uff0c**25**\uff0c~~26~~\uff0c**27***\uff0c~~28*~~\uff0c29\uff0c~~31~~\uff0c32*\uff0c~~33*~~\uff0c34\uff0c~~35*~~\uff0c~~36~~\uff0c~~37~~\uff0c~~38~~\uff0c**39**\uff0c40*\uff0c41\uff0c43\uff0c44\uff0c47\uff0c~~48*~~\uff0c49\uff0c50\uff0c**51***\uff0c~~52*~~\uff0c53\uff0c~~54~~\uff0c55*\uff0c~~56~~\\r\\n> \\r\\n> - **questionSet3**\uff1a~~1~~\uff0c~~2~~\uff0c3\uff0c~~4*~~\uff0c5*\uff0c~~6*~~\uff0c7\uff0c~~8*~~\uff0c~~9~~\uff0c~~10~~\uff0c~~11~~\uff0c~~12~~\uff0c~~13~~\uff0c~~14~~\uff0c15\uff0c16*\uff0c17\uff0c~~18~~\uff0c~~19~~\uff0c20\uff0c~~21~~\uff0c22\uff0c~~23~~\uff0c**25**\uff0c**26**\uff0c~~28*~~\uff0c~~30*~~\uff0c~~31~~\uff0c~~32~~\uff0c33\uff0c**34**\uff0c~~35~~\uff0c**36**\uff0c37\uff0c~~38~~\uff0c~~39~~\uff0c**40**\uff0c42\uff0c~~41~~\uff0c~~43~~\uff0c~~44~~\uff0c45\uff0c~~46*~~\uff0c~~47~~\uff0c48\uff0c~~49*~~\uff0c~~50*~~\\r\\n> \\r\\n> - **questionSet4**\uff1a~~1~~\uff0c~~4*~~\uff0c~~5~~\uff0c~~6*~~\uff0c7\uff0c~~8*~~\uff0c9*\uff0c\uff08~~10~~\uff0c~~11~~\uff0c~~12~~\uff09\uff0c~~13~~\uff0c~~14~~\uff0c**15**\uff0c~~17~~\uff0c~~18*~~\uff0c~~19~~\uff0c~~20~~\uff0c~~21*~~\uff0c22\uff0c24\uff0c~~25~~\uff0c~~26*~~\uff0c~~27~~\uff0c~~28*~~\uff0c29*\uff0c30\uff0c31\uff0c32*\uff0c33\uff0c34\uff0c35\uff0c36\uff0c37\uff0c~~38~~\uff0c39*\uff0c40\uff0c41\uff0c~~42~~\uff0c~~43*~~\uff0c44\uff0c45\uff0c~~46~~\uff0c~~47~~\uff0c~~48*~~\uff0c49\uff0c~~50~~\uff0c51\uff0c52\uff0c~~53~~\uff0c55\uff0c~~56~~\uff0c57\uff0c58\uff0c~~59~~\uff0c60*\uff0c61\uff0c62\uff0c~~63*~~\uff0c64\uff0c~~65~~\uff0c~~66*~~\uff0c~~67~~\\r\\n> \\r\\n> - **questionSet5**\uff1a1\uff0c~~4*~~\uff0c5*\uff0c6*\uff0c7*\uff0c8\uff0c~~9*~~\uff0c11\uff0c~~12~~\uff0c14*\uff0c~~15*~~\uff0c~~16~~\uff0c17\uff0c18\uff0c19\uff0c~~20*~~\uff0c~~21~~\uff0c~~22~~\uff0c23*\uff0c~~24~~\uff0c~~25~~\uff0c~~26~~\uff0c27\uff0c28\uff0c~~29~~\uff0c30\uff0c31*\uff0c~~32~~\uff0c~~33~~\uff0c~~34~~\uff0c35\uff0c~~36~~\uff0c~~37*~~\uff0c~~38~~\uff0c39\uff0c~~40~~\uff0c~~41~~\uff0c~~42~~\uff0c~~43~~\uff0c~~44~~\uff0c45\\r\\n> \\r\\n> - **questionSet6**\uff1a~~1*~~\uff0c~~3~~\uff0c~~4~~\uff0c5\uff0c~~6~~\uff0c~~7~~\uff0c8*\uff0c~~9~~\uff0c~~10~~\uff0c~~11*~~\uff0c~~12*~~\uff0c~~13~~\uff0c14\uff0c15\uff0c~~16~~\uff0c~~17~~\uff0c18\uff0c19\uff0c20\uff0c21*\uff0c23\uff0c24\uff0c25\uff0c~~26*~~\uff0c**27*\uff01**\uff0c~~29~~\uff0c30\uff0c~~31~~\uff0c**32***\uff0c33*\uff0c~~35*~~\uff0c36\uff0c37*\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c~~41~~\uff0c~~42~~\uff0c43\uff0c~~44*~~\uff0c45*\uff0c46*\uff0c48\uff0c~~49~~\uff0c~~50~~\uff0c~~51~~\uff0c52\\r\\n> \\r\\n> - **Testlet1**\uff1a~~1\uff0c2~~\\r\\n> \\r\\n> - **Testlet10**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet11**\uff1a1\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet12**\uff1a~~1*~~\uff0c~~2~~\uff0c~~3~~\uff0c4\\r\\n> \\r\\n> - **Testlet13**\uff1a1\uff0c~~2*~~\uff0c~~3~~\uff0c4\uff0c~~5~~\\r\\n> \\r\\n> - **Testlet14**\uff1a1\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet15**\uff1a1*\uff0c**2***\uff0c3*\uff0c4\uff0c~~5*~~\uff0c~~6~~\\r\\n> \\r\\n> - **Testlet16**\uff1a1\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet17**\uff1a1*\uff0c2\\r\\n> \\r\\n> - **Testlet18**\uff1a~~1~~\uff0c2*\\r\\n> \\r\\n> - **Testlet19**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet2**\uff1a1\\r\\n> \\r\\n> - **Testlet20**\uff1a1\uff0c2\uff0c**3\uff0c4**\\r\\n> \\r\\n> - **Testlet21**\uff1a1*\uff0c~~2~~\uff0c3\\r\\n> \\r\\n> - **Testlet22**\uff1a**1***\\r\\n> \\r\\n> - **Testlet23**\uff1a**~~1~~**\uff0c2*\\r\\n> \\r\\n> - **Testlet24**\uff1a1*\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet25**\uff1a1\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet26**\uff1a1\uff0c2\uff0c3\\r\\n> \\r\\n> - **Testlet3**\uff1a~~1~~\uff0c\\r\\n> \\r\\n> - **Testlet4**\uff1a1*\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet5**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet6**\uff1a**1***\uff0c**2**\\r\\n> \\r\\n> - **Testlet7**\uff1a**1**\\r\\n> \\r\\n> - **Testlet8**\uff1a1\uff0c**2***\uff0c3*\\r\\n> \\r\\n> - **Testlet9**\uff1a1*\uff0c\\r\\n\\r\\n---\\r\\n\\r\\n---\\r\\n\\r\\n> :100:\u7b2c\u4e09\u6b21\\r\\n> \\r\\n> - **questionSet1**\uff1a~~2~~\uff0c~~5~~\uff0c~~6~~\uff0c~~7~~\uff0c~~8~~\uff0c~~11~~\uff0c~~12~~\uff0c~~13~~\uff0c~~16~~\uff0c\uff08~~17~~\uff1aredis cache\uff0c~~18~~\uff1aCDN\uff0c~~19~~\uff1aSAN\uff09\uff0c~~20~~\uff0c~~21~~\uff0c~~22~~\uff0c\uff08~~23~~\uff0c~~29~~\uff09\uff0c\uff08~~24\uff0c25\uff0c26\uff0c27~~\uff09\uff0c~~30~~\uff0c~~31~~\uff0c~~32~~\uff0c~~33~~\uff0c~~34~~\uff0c~~35~~\uff0c~~36*~~\uff0c37*\\r\\n> \\r\\n> - **questionSet2**\uff1a~~1~~\uff0c~~2~~\uff0c~~3~~\uff0c\uff08~~4~~\uff0c~~8~~\uff0c~~19~~\uff09\uff0c\uff08~~5*~~\uff0c~~6*~~\uff0c~~7*~~\uff09\uff0c~~9~~\uff0c10\uff0c~~11~~\uff0c12\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c\uff08~~16*~~\uff0c17*\uff0c~~18*~~\uff09\uff0c~~20~~\uff0c~~21*~~\uff0c~~22*~~\uff0c~~23~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26~~\uff0c~~27*~~\uff0c~~28*~~\uff0c~~29~~\uff0c~~31~~\uff0c~~32*~~\uff0c~~33*~~\uff0c~~34~~\uff0c~~35*~~\uff0c~~36~~\uff0c~~37~~\uff0c~~38~~\uff0c~~39~~\uff0c~~40*~~\uff0c~~41~~\uff0c~~43~~\uff0c~~44~~\uff0c~~47~~\uff0c~~48*~~\uff0c~~49~~\uff0c~~50~~\uff0c51*\uff0c~~52*~~\uff0c~~53~~\uff0c~~54~~\uff0c~~55*~~\uff0c~~56~~\\r\\n> \\r\\n> - **questionSet3**\uff1a~~1~~\uff0c~~2~~\uff0c3\uff0c~~4*~~\uff0c~~5*~~\uff0c~~6*~~\uff0c~~7~~\uff0c~~8*~~\uff0c~~9~~\uff0c~~10~~\uff0c~~11~~\uff0c~~12~~\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c~~16*~~\uff0c17\uff0c~~18~~\uff0c~~19~~\uff0c20\uff0c~~21~~\uff0c22\uff0c~~23~~\uff0c~~25~~\uff0c26\uff0c~~28*~~\uff0c~~30*~~\uff0c~~31~~\uff0c~~32~~\uff0c~~33~~\uff0c~~34~~\uff0c~~35~~\uff0c36\uff0c37\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c~~42~~\uff0c~~41~~\uff0c~~43~~\uff0c~~44~~\uff0c45\uff0c~~46*~~\uff0c~~47~~\uff0c48\uff0c~~49*~~\uff0c~~50*~~\\r\\n> \\r\\n> - **questionSet4**\uff1a~~1~~\uff0c~~4*~~\uff0c~~5~~\uff0c~~6*~~\uff0c~~7~~\uff0c~~8*~~\uff0c~~9*~~\uff0c\uff08~~10~~\uff0c~~11~~\uff0c~~12~~\uff09\uff0c~~13~~\uff0c~~14~~\uff0c15\uff0c~~17~~\uff0c~~18*~~\uff0c~~19~~\uff0c~~20~~\uff0c~~21*~~\uff0c~~22~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26*~~\uff0c~~27~~\uff0c~~28*~~\uff0c~~29*~~\uff0c30\uff0c~~31~~\uff0c32*\uff0c~~33~~\uff0c34\uff0c~~35~~\uff0c~~36~~\uff0c37\uff0c~~38~~\uff0c~~39*~~\uff0c40\uff0c41\uff0c~~42~~\uff0c~~43*~~\uff0c44\uff0c~~45~~\uff0c~~46~~\uff0c~~47~~\uff0c~~48*~~\uff0c~~49~~\uff0c~~50~~\uff0c~~51~~\uff0c~~52~~\uff0c~~53~~\uff0c~~55~~\uff0c~~56~~\uff0c57\uff0c~~58~~\uff0c~~59~~\uff0c~~60*~~\uff0c~~61~~\uff0c~~62~~\uff0c~~63*~~\uff0c~~64~~\uff0c~~65~~\uff0c~~66*~~\uff0c~~67~~\\r\\n> \\r\\n> - **questionSet5**\uff1a1\uff0c~~4*~~\uff0c5*\uff0c~~6*~~\uff0c7*\uff0c~~8~~\uff0c~~9*~~\uff0c~~11~~\uff0c~~12~~\uff0c14*\uff0c~~15*~~\uff0c~~16~~\uff0c17\uff0c18\uff0c19\uff0c~~20*~~\uff0c~~21~~\uff0c~~22~~\uff0c~~23*~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26~~\uff0c27\uff0c~~28~~\uff0c~~29~~\uff0c~~30~~\uff0c31*\uff0c~~32~~\uff0c~~33~~\uff0c~~34~~\uff0c~~35~~\uff0c~~36~~\uff0c~~37*~~\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c~~41~~\uff0c~~42~~\uff0c~~43~~\uff0c~~44~~\uff0c~~45~~\\r\\n> \\r\\n> - **questionSet6**\uff1a~~1*~~\uff0c~~3~~\uff0c~~4~~\uff0c5\uff0c~~6~~\uff0c~~7~~\uff0c8*\uff0c~~9~~\uff0c~~10~~\uff0c~~11*~~\uff0c~~12*~~\uff0c~~13~~\uff0c14\uff0c15\uff0c~~16~~\uff0c~~17~~\uff0c~~18~~\uff0c~~19~~\uff0c20\uff0c~~21*~~\uff0c~~23~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26*~~\uff0c**27*\uff01**\uff0c~~29~~\uff0c~~30~~\uff0c~~31~~\uff0c32*\uff0c33*\uff0c~~35*~~\uff0c36\uff0c37*\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c~~41~~\uff0c~~42~~\uff0c~~43~~\uff0c~~44*~~\uff0c~~45*~~\uff0c~~46*~~\uff0c~~48~~\uff0c~~49~~\uff0c~~50~~\uff0c~~51~~\uff0c~~52~~\\r\\n> \\r\\n> - **Testlet1**\uff1a~~1\uff0c2~~\\r\\n> \\r\\n> - **Testlet10**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet11**\uff1a~~1~~\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet12**\uff1a~~1*~~\uff0c2\uff0c~~3~~\uff0c~~4~~\\r\\n> \\r\\n> - **Testlet13**\uff1a~~1~~\uff0c~~2*~~\uff0c3\uff0c~~4~~\uff0c~~5~~\\r\\n> \\r\\n> - **Testlet14**\uff1a~~1~~\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet15**\uff1a~~1*~~\uff0c**2***\uff0c~~3*~~\uff0c4\uff0c~~5*~~\uff0c~~6~~\\r\\n> \\r\\n> - **Testlet16**\uff1a1\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet17**\uff1a1*\uff0c2\\r\\n> \\r\\n> - **Testlet18**\uff1a~~1~~\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet19**\uff1a1\uff0c2*\\r\\n> \\r\\n> - **Testlet2**\uff1a1\\r\\n> \\r\\n> - **Testlet20**\uff1a1\uff0c2\uff0c**3\uff0c4**\\r\\n> \\r\\n> - **Testlet21**\uff1a1*\uff0c~~2~~\uff0c3\\r\\n> \\r\\n> - **Testlet22**\uff1a**1***\\r\\n> \\r\\n> - **Testlet23**\uff1a**~~1~~**\uff0c2*\\r\\n> \\r\\n> - **Testlet24**\uff1a1*\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet25**\uff1a1\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet26**\uff1a1\uff0c2\uff0c3\\r\\n> \\r\\n> - **Testlet3**\uff1a1\uff0c\\r\\n> \\r\\n> - **Testlet4**\uff1a1*\uff0c2*\\r\\n> \\r\\n> - **Testlet5**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet6**\uff1a**1***\uff0c**2**\\r\\n> \\r\\n> - **Testlet7**\uff1a**1**\\r\\n> \\r\\n> - **Testlet8**\uff1a1\uff0c**2***\uff0c3*\\r\\n> \\r\\n> - **Testlet9**\uff1a1*\uff0c\\r\\n\\r\\n---\\r\\n\\r\\n---\\r\\n\\r\\n> :100:\u7b2c\u56db\u6b21\\r\\n> \\r\\n> - **questionSet1**\uff1a~~2~~\uff0c~~5~~\uff0c~~6~~\uff0c~~7~~\uff0c~~8~~\uff0c~~11~~\uff0c~~12~~\uff0c~~13~~\uff0c~~16~~\uff0c\uff08~~17~~\uff1aredis cache\uff0c~~18~~\uff1aCDN\uff0c~~19~~\uff1aSAN\uff09\uff0c~~20~~\uff0c~~21~~\uff0c~~22~~\uff0c\uff08~~23~~\uff0c~~29~~\uff09\uff0c\uff08~~24\uff0c25\uff0c26\uff0c27~~\uff09\uff0c~~30~~\uff0c~~31~~\uff0c~~32~~\uff0c~~33~~\uff0c~~34~~\uff0c~~35~~\uff0c~~36*~~\uff0c~~37*~~\\r\\n> \\r\\n> - **questionSet2**\uff1a~~1~~\uff0c~~2~~\uff0c~~3~~\uff0c\uff08~~4~~\uff0c~~8~~\uff0c~~19~~\uff09\uff0c\uff08~~5*~~\uff0c~~6*~~\uff0c~~7*~~\uff09\uff0c~~9~~\uff0c~~10~~\uff0c~~11~~\uff0c~~12~~\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c\uff08~~16*~~\uff0c17*\uff0c~~18*~~\uff09\uff0c~~20~~\uff0c~~21*~~\uff0c~~22*~~\uff0c~~23~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26~~\uff0c~~27*~~\uff0c~~28*~~\uff0c~~29~~\uff0c~~31~~\uff0c~~32*~~\uff0c~~33*~~\uff0c~~34~~\uff0c~~35*~~\uff0c~~36~~\uff0c~~37~~\uff0c~~38~~\uff0c~~39~~\uff0c~~40*~~\uff0c~~41~~\uff0c~~43~~\uff0c~~44~~\uff0c~~47~~\uff0c~~48*~~\uff0c~~49~~\uff0c~~50~~\uff0c51*\uff0c~~52*~~\uff0c~~53~~\uff0c~~54~~\uff0c~~55*~~\uff0c~~56~~\\r\\n> \\r\\n> - **questionSet3**\uff1a~~1~~\uff0c~~2~~\uff0c~~3~~\uff0c~~4*~~\uff0c~~5*~~\uff0c~~6*~~\uff0c~~7~~\uff0c~~8*~~\uff0c~~9~~\uff0c~~10~~\uff0c~~11~~\uff0c~~12~~\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c~~16*~~\uff0c~~17~~\uff0c~~18~~\uff0c~~19~~\uff0c~~20~~\uff0c~~21~~\uff0c~~22~~\uff0c~~23~~\uff0c~~25~~\uff0c~~26~~\uff0c~~28*~~\uff0c~~30*~~\uff0c~~31~~\uff0c~~32~~\uff0c~~33~~\uff0c~~34~~\uff0c~~35~~\uff0c~~36~~\uff0c~~37~~\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c~~42~~\uff0c~~41~~\uff0c~~43~~\uff0c~~44~~\uff0c45\uff0c~~46*~~\uff0c~~47~~\uff0c~~48~~\uff0c~~49*~~\uff0c~~50*~~\\r\\n> \\r\\n> - **questionSet4**\uff1a~~1~~\uff0c~~4*~~\uff0c~~5~~\uff0c~~6*~~\uff0c~~7~~\uff0c~~8*~~\uff0c~~9*~~\uff0c\uff08~~10~~\uff0c~~11~~\uff0c~~12~~\uff09\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c~~17~~\uff0c~~18*~~\uff0c~~19~~\uff0c~~20~~\uff0c~~21*~~\uff0c~~22~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26*~~\uff0c~~27~~\uff0c~~28*~~\uff0c~~29*~~\uff0c30\uff0c~~31~~\uff0c~~32*~~\uff0c~~33~~\uff0c34\uff0c~~35~~\uff0c~~36~~\uff0c37\uff0c~~38~~\uff0c~~39*~~\uff0c~~40~~\uff0c~~41~~\uff0c~~42~~\uff0c~~43*~~\uff0c44\uff0c~~45~~\uff0c~~46~~\uff0c~~47~~\uff0c~~48*~~\uff0c~~49~~\uff0c~~50~~\uff0c~~51~~\uff0c~~52~~\uff0c~~53~~\uff0c~~55~~\uff0c~~56~~\uff0c~~57~~\uff0c~~58~~\uff0c~~59~~\uff0c~~60*~~\uff0c~~61~~\uff0c~~62~~\uff0c~~63*~~\uff0c~~64~~\uff0c~~65~~\uff0c~~66*~~\uff0c~~67~~\\r\\n> \\r\\n> - **questionSet5**\uff1a1\uff0c~~4*~~\uff0c~~5*~~\uff0c~~6*~~\uff0c~~7*~~\uff0c~~8~~\uff0c~~9*~~\uff0c~~11~~\uff0c~~12~~\uff0c~~14*~~\uff0c~~15*~~\uff0c~~16~~\uff0c17\uff0c18\uff0c19\uff0c~~20*~~\uff0c~~21~~\uff0c~~22~~\uff0c~~23*~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26~~\uff0c27\uff0c~~28~~\uff0c~~29~~\uff0c~~30~~\uff0c~~31*~~\uff0c~~32~~\uff0c~~33~~\uff0c~~34~~\uff0c~~35~~\uff0c~~36~~\uff0c~~37*~~\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c~~41~~\uff0c~~42~~\uff0c~~43~~\uff0c~~44~~\uff0c~~45~~\\r\\n> \\r\\n> - **questionSet6**\uff1a~~1*~~\uff0c~~3~~\uff0c~~4~~\uff0c~~5~~\uff0c~~6~~\uff0c~~7~~\uff0c8*\uff0c~~9~~\uff0c~~10~~\uff0c~~11*~~\uff0c~~12*~~\uff0c~~13~~\uff0c~~14~~\uff0c~~15~~\uff0c~~16~~\uff0c~~17~~\uff0c~~18~~\uff0c~~19~~\uff0c20\uff0c~~21*~~\uff0c~~23~~\uff0c~~24~~\uff0c~~25~~\uff0c~~26*~~\uff0c**27*\uff01**\uff0c~~29~~\uff0c~~30~~\uff0c~~31~~\uff0c~~32*~~\uff0c~~33*~~\uff0c~~35*~~\uff0c~~36~~\uff0c37*\uff0c~~38~~\uff0c~~39~~\uff0c~~40~~\uff0c~~41~~\uff0c~~42~~\uff0c~~43~~\uff0c~~44*~~\uff0c~~45*~~\uff0c~~46*~~\uff0c~~48~~\uff0c~~49~~\uff0c~~50~~\uff0c~~51~~\uff0c~~52~~\\r\\n> \\r\\n> - **Testlet1**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet10**\uff1a~~1~~\uff0c2*\\r\\n> \\r\\n> - **Testlet11**\uff1a~~1~~\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet12**\uff1a~~1*~~\uff0c~~2~~\uff0c~~3~~\uff0c4\\r\\n> \\r\\n> - **Testlet13**\uff1a~~1~~\uff0c~~2*~~\uff0c~~3~~\uff0c~~4~~\uff0c~~5~~\\r\\n> \\r\\n> - **Testlet14**\uff1a1\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet15**\uff1a~~1*~~\uff0c**2***\uff0c3*\uff0c~~4~~\uff0c~~5*~~\uff0c~~6~~\\r\\n> \\r\\n> - **Testlet16**\uff1a~~1~~\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet17**\uff1a1*\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet18**\uff1a~~1~~\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet19**\uff1a~~1~~\uff0c~~2*~~\\r\\n> \\r\\n> - **Testlet2**\uff1a1\\r\\n> \\r\\n> - **Testlet20**\uff1a1\uff0c2\uff0c**3\uff0c4**\\r\\n> \\r\\n> - **Testlet21**\uff1a1*\uff0c~~2~~\uff0c3\\r\\n> \\r\\n> - **Testlet22**\uff1a**1***\\r\\n> \\r\\n> - **Testlet23**\uff1a**~~1~~**\uff0c2*\\r\\n> \\r\\n> - **Testlet24**\uff1a1*\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet25**\uff1a1\uff0c~~2~~\\r\\n> \\r\\n> - **Testlet26**\uff1a1\uff0c2\uff0c3\\r\\n> \\r\\n> - **Testlet3**\uff1a1\uff0c\\r\\n> \\r\\n> - **Testlet4**\uff1a1*\uff0c2*\\r\\n> \\r\\n> - **Testlet5**\uff1a1\uff0c2\\r\\n> \\r\\n> - **Testlet6**\uff1a**1***\uff0c**2**\\r\\n> \\r\\n> - **Testlet7**\uff1a**1**\\r\\n> \\r\\n> - **Testlet8**\uff1a1\uff0c**2***\uff0c3*\\r\\n> \\r\\n> - **Testlet9**\uff1a1*\uff0c\\r\\n\\r\\n---\\r\\n\\r\\n\\r\\n\\r\\n---\\r\\n\\r\\n:::tip \u6269\u5c55\u9605\u8bfb\\r\\n\\r\\n- purge\uff1a\u6e05\u6d17\uff0c\u6e05\u9664\uff0c\u6392\u9664\\r\\n\\r\\n- metric\uff1a\u516c\u5236\u7684\uff0c\u7c73\u5236\u7684\uff0c\u5ea6\u89c4\u7684\\r\\n\\r\\n- signature\uff1a\u7b7e\u540d\uff0c\u7f72\u540d\uff1b\u7b7e\u5b57\uff0c\u7b7e\u7f72\\r\\n\\r\\n- claims\uff1a\u8981\u6c42\uff0c\u8bf7\u6c42\u6743\\r\\n\\r\\n- leases\uff1a\u79df\u8d41\uff0c\u79df\u7ea6\\r\\n\\r\\n:::\\r\\n\\r\\n---\\r\\n\\r\\n\\r\\n\\r\\n---\\r\\n\\r\\n\u4e0b\u62c9\u5217\u8868\u6216\u8005\u9009\u62e9\u6846\u7684\u95ee\u9898\uff1a\\r\\n\\r\\n- topic1\uff1a30\uff0c32\uff0c33\uff0c35\uff0c37\\r\\n\\r\\n- topic2\uff1a2\uff0c3\uff0c10\uff0c12\uff0c21\uff0c24\uff0c25\uff0c40\uff0c41\uff0c43\uff0c47\uff0c49\uff0c50\uff0c51\uff0c55\\r\\n\\r\\n- topic3\uff1a5\uff0c17\uff0c20\uff0c22\uff0c26\uff0c45\uff0c\\r\\n\\r\\n- topic4\uff1a15\uff0c30\uff0c39\uff0c40\uff0c41\uff0c45\uff0c51\uff0c52\uff0c57\uff0c60\uff0c62\uff0c64\\r\\n\\r\\n- topic5\uff1a1\uff0c5\uff0c11\uff0c17\uff0c18\uff0c19\uff0c\\r\\n\\r\\n- topic6\uff1a5\uff0c8\uff0c18\uff0c36\uff0c"},{"id":"filexplore","metadata":{"permalink":"/lunat1c/blog/filexplore","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-23-blog-test.md","source":"@site/blog/2023-11-23-blog-test.md","title":"\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u5361\u987f","description":"\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u5c0f\u4f19\u4f34\u5728\u5de5\u4f5c\u5f53\u4e2d\u9047\u5230\u8fc7\u8fd9\u6837\u7684\u60c5\u51b5\uff1a","date":"2023-11-23T00:00:00.000Z","formattedDate":"November 23, 2023","tags":[{"label":"hola","permalink":"/lunat1c/blog/tags/hola"},{"label":"docusaurus","permalink":"/lunat1c/blog/tags/docusaurus"}],"readingTime":1.045,"hasTruncateMarker":false,"authors":[{"name":"bo wang","title":"Docusaurus test"}],"frontMatter":{"slug":"filexplore","title":"\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u5361\u987f","authors":{"name":"bo wang","title":"Docusaurus test"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"AZ204","permalink":"/lunat1c/blog/az204"},"nextItem":{"title":"Welcome","permalink":"/lunat1c/blog/welcome"}},"content":"\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u5c0f\u4f19\u4f34\u5728\u5de5\u4f5c\u5f53\u4e2d\u9047\u5230\u8fc7\u8fd9\u6837\u7684\u60c5\u51b5\uff1a  \\r\\n\u5728\u6253\u5f00Windows\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u65f6\u5019\uff0c\u5b83\u4f1a\u52a0\u8f7d\u534a\u5929\u90fd\u65e0\u6cd5\u6b63\u5e38\u52a0\u8f7d\u51fa\u6587\u4ef6\u76ee\u5f55\u3002  \\r\\n\u6700\u5f00\u59cb\u7684\u6298\u817e\uff1a  \\r\\n\\r\\n- \u6211\u5c1d\u8bd5\u8fc7\u62d4\u6389\u7f51\u7ebf\uff0c\u5c31\u80fd\u5feb\u901f\u6253\u5f00\u4e86\\r\\n- \u65e2\u7136\u62d4\u6389\u7f51\u7ebf\u53ef\u4ee5\uff0c\u662f\u4e0d\u662f\u548c\u76f8\u5173\u7f51\u7edc\u8bbe\u7f6e\u6709\u5173\uff0c\u4e8e\u662f\u6253\u5f00\u63a7\u5236\u9762\u677f\uff0c\u5173\u95ed\u6240\u6709\u76f8\u5173\u6587\u4ef6\u5939\u5171\u4eab\u7684\u7f51\u7edc\u8bbe\u7f6e\u3002\u5728\u8fd9\u4e2a\u4f4d\u7f6e\u2193![Alt text](/img/imageTest2.png)\\r\\n- \u672c\u4ee5\u4e3a\u8fd9\u6837\u5c31\u80fd\u89e3\u51b3\u95ee\u9898\u4e86\uff0c\u63d2\u4e0a\u7f51\u7ebf\u4f9d\u7136\u50bb\u773c\u3002  \\r\\n\\r\\n\u6700\u7ec8\u89e3\u51b3\u529e\u6cd5\uff1a\\r\\n\\r\\n- \u662f\u5728google\u641c\u4e86\u8fd9\u4e2a\u95ee\u9898\u201c\u4e3a\u4ec0\u4e48win10\u7684\u8d44\u6e90\u7ba1\u7406\u5668\u7279\u522b\u5361\uff1f\u201d\\r\\n- \u5728\u4e00\u4e2a\u77e5\u4e4e\u7684\u56de\u7b54\u4e2d\u627e\u5230\u89e3\u51b3\u529e\u6cd5\uff1a\u4e2a\u6027\u5316\u9009\u9879\u4e2d\u5173\u95ed\u8fd9\u4e2a\u9009\u9879  \\r\\n  ![Alt text](/img/imageTest.png)\\r\\n\\r\\n\u6210\u529f\uff01"},{"id":"welcome","metadata":{"permalink":"/lunat1c/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/lunat1c/blog/tags/facebook"},{"label":"hello","permalink":"/lunat1c/blog/tags/hello"},{"label":"docusaurus","permalink":"/lunat1c/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u5361\u987f","permalink":"/lunat1c/blog/filexplore"},"nextItem":{"title":"MDX Blog Post","permalink":"/lunat1c/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/lunat1c/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/lunat1c/blog/tags/docusaurus"}],"readingTime":0.18,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/lunat1c/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/lunat1c/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'yes u did\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/lunat1c/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/lunat1c/blog/tags/hello"},{"label":"docusaurus","permalink":"/lunat1c/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/lunat1c/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/lunat1c/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/lunat1c/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/lunat1c/blog/tags/hola"},{"label":"docusaurus","permalink":"/lunat1c/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/lunat1c/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);