# PawTale 官网

独立的 GitHub Pages 静态站。发布目录为 `dist/`，无需构建或安装依赖。简体中文为默认语言，英文位于 `/en/`。维护时请同时更新两个语言的对应页面。

| 页面 | 简体中文 | English |
| --- | --- | --- |
| 首页（Marketing URL） | `/` | `/en/` |
| 隐私政策（Privacy Policy URL） | `/privacy/` | `/en/privacy/` |
| 帮助与支持（Support URL） | `/support/` | `/en/support/` |
| 联系我们 | `/contact/` | `/en/contact/` |

## 预览和部署

1. 在本目录运行 `python3 -m http.server 8123 --bind 127.0.0.1 --directory dist`，打开 `http://127.0.0.1:8123/`。
2. 将本目录的内容（含 `.github`、`dist/.nojekyll`）提交到独立公开仓库 `TheRealElliot13/pawtale-site` 的 `main` 分支。
3. 在 Settings → Pages → Build and deployment → Source 选择 GitHub Actions。到 Actions 运行 **Publish PawTale website**，以部署成功后显示的 URL 为准。
4. 将部署 URL 与上表路径组合，填入 App Store Connect 对应字段。

## 上架维护

- 当前首页显示上架预告。商品页可用后，将两个语言首页的上架预告替换成指向 Apple 正式商品页的下载链接。
- 联系页暂沿用 PalaTale 已公开的开发者支持邮箱 `elliotfff@163.com`。确认 PawTale 由同一邮箱接收，若更换需更新两种语言联系页的显示文字和邮件链接。
- 官网使用 App 账本 `LedgerCardStyle.swift` 的浅色背景。CSS 保留色值、光斑叠放顺序和色标，并按网页高度调整纵向几何。导航图标来自本次 App 构建。首页轮播按 App 设置中的顺序使用六款内置图标和对应预览素材。首页使用 2026-11-21 以当前源码增量构建运行的 iOS 模拟器实拍，分别截取简中和英文界面。截图中的记录为内置演示数据。宠物生活照由 ImageGen 生成。
- 全站使用 App 内同一份阿里妈妈方圆体可变字体。保留原始字体与许可文件，CSS 使用与 App 一致的 `BEVL = 80`。
- 同步功能上线前，按最终实现更新隐私政策中的同步信息。
