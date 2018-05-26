# NasFate: 星链缘

[![Build Status](https://travis-ci.org/kun368/NasFate.svg?branch=master)](https://travis-ci.org/kun368/NasFate)
[![Language](https://img.shields.io/badge/language-javascript-blue.svg)](https://github.com/kun368/NasFate)
[![ice](https://img.shields.io/badge/developing%20with-ICE-2077ff.svg)](https://github.com/alibaba/ice)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/kun368/NasPasteBin)

### [系统地址](http://nas-fate.zzkun.com)

### [NAS-DAPP开发者注册](https://incentive.nebulas.io/cn/signup.html?invite=OILxo)

---

## 简介

**NasFate是基于NAS智能合约的去中心化的基于生日的社交平台，可以找到同年同月同日生的有缘人并进行互相留言，可以许下生日愿望，可以查看生日当天的历史大事等等。
星链缘致力于构建人人可用、方便易用、永久保存、不可篡改的新一代基于生日的社交平台**

## Nebulas智能合约

[查询合约Transaction Records](https://explorer.nebulas.io/#/address/n1xrQraFNQDx5MFXd6N3W8taAJznM18792x)

[查询合约Transaction Information](https://explorer.nebulas.io/#/tx/a7ad840ab7c2e2ebbb793c43419e777ff160b7e8ad94dd29ce36a2dce7be55cb)

## Snapshot

![](https://raw.githubusercontent.com/kun368/NasFate/master/doc/1.png)

![](https://raw.githubusercontent.com/kun368/NasFate/master/doc/2.png)

![](https://raw.githubusercontent.com/kun368/NasFate/master/doc/3.png)

![](https://raw.githubusercontent.com/kun368/NasFate/master/doc/4.png)

---

> 使用文档

使用:

* 启动调试服务: `npm start`
* 构建 dist: `npm run build`

目录结构:

* react-router @4.x 默认采用 hashHistory 的单页应用
* 入口文件: `src/index.js`
* 导航配置: `src/menuConfig.js`
* 路由配置: `src/routerConfig.js`
* 路由入口: `src/router.jsx`
* 布局文件: `src/layouts`
* 通用组件: `src/components`
* 页面文件: `src/pages`
