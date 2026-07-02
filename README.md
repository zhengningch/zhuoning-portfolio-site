# 个人作品展示

这是一个纯静态作品集网页，可直接部署到 GitHub Pages。

## 本地预览

在项目目录运行：

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

然后打开：

```text
http://localhost:8000/
```

如果要让同一局域网设备访问，可以打开：

```text
http://你的局域网IP:8000/
```

## GitHub Pages 发布

推荐方式：

1. 新建一个 GitHub 仓库。
2. 把当前 `zhuoning-portfolio-site` 目录内容推到仓库根目录。
3. 在 GitHub 仓库中进入 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. 保存后等待 1 到 3 分钟，页面会生成公开链接。

## 目录结构

```text
.
├── index.html
├── README.md
└── assets
    ├── images
    ├── script.js
    └── style.css
```

## 修改内容

- 文案在 `index.html`
- 样式在 `assets/style.css`
- 图片放大交互在 `assets/script.js`
- 图片资源在 `assets/images`
