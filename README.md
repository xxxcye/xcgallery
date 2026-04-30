# xcgallery

这是一个用 Lovable 生成的陶器个人网站项目（Vite + React + TanStack Router）。

本仓库已改为“纯静态 SPA”结构，可直接部署到 GitHub Pages。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物输出到 `dist/`。

## 部署到 GitHub Pages（推荐）

仓库已内置 GitHub Actions 工作流：`.github/workflows/deploy-github-pages.yml`。

使用方法：
1) 推送代码到 `main`
2) 打开 GitHub 仓库 → `Settings` → `Pages`
3) `Build and deployment` 里把 `Source` 选为 `GitHub Actions`
4) 等待 Actions 跑完后，访问链接通常是：`https://<你的用户名>.github.io/<仓库名>/`

## 放到 GitHub（手动推送）

1) 在 GitHub 新建一个空仓库（例如：`xcgallery`）
2) 在本项目目录执行：

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin git@github.com:<你的用户名>/xcgallery.git
git push -u origin main
```
