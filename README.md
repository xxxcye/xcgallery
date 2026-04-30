# xcgallery

这是一个用 Lovable 生成的陶器个人网站项目（TanStack Start + Vite）。

> 说明：该项目包含 SSR/Worker 端（`@tanstack/react-start` + Cloudflare Worker），不适合直接用 GitHub Pages 这种“纯静态托管”。推荐用 Cloudflare Workers（或 Cloudflare Pages/Functions）来上线。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物会输出到：
- `dist/client`（静态资源）
- `dist/server`（Worker 入口与配置）

## 手动部署到 Cloudflare Workers（推荐）

前提：你需要有 Cloudflare 账号，并在本机已登录。

```bash
npx wrangler login
npm run build
npx wrangler deploy --config dist/server/wrangler.json
```

部署完成后，终端会打印一个 `*.workers.dev` 的访问地址。

## 放到 GitHub（推送）

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

## （可选）GitHub Actions 自动部署到 Cloudflare

仓库已内置一个工作流：`.github/workflows/deploy-cloudflare-workers.yml`。

你需要在 GitHub 仓库的 `Settings -> Secrets and variables -> Actions` 里添加：
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

之后每次 push 到 `main` 会自动：
1) `npm install`
2) `npm run build`
3) `wrangler deploy --config dist/server/wrangler.json`

