# 知识中心 - 静态网站

这是一个基于HTML、CSS和JavaScript构建的知识性静态网站，设计美观且响应式，可以部署到GitHub Pages上。

## 功能特点

- 🎨 现代化、美观的UI设计
- 📱 完全响应式布局，适配各种设备屏幕
- ⚡ 丰富的交互动画和过渡效果
- 🔍 搜索功能
- 📧 订阅功能
- 📱 响应式导航菜单
- 📝 知识分类展示
- 💡 热门内容推荐
- 📈 平滑滚动效果
- 🚀 返回顶部按钮

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, 自定义变量)
- JavaScript (原生)
- Font Awesome (图标库)
- Picsum Photos (示例图片)

## 如何部署到GitHub Pages

### 方法一：直接使用GitHub仓库

1. **创建GitHub仓库**
   - 登录你的GitHub账号
   - 点击右上角的"+"图标，选择"New repository"
   - 填写仓库名称（例如：`knowledge-center`）
   - 选择公开或私有
   - 点击"Create repository"

2. **上传文件**
   - 在仓库页面，点击"Add file" > "Upload files"
   - 选择项目中的所有文件（index.html, style.css, script.js, README.md）
   - 滚动到底部，点击"Commit changes"

3. **启用GitHub Pages**
   - 在仓库页面，点击"Settings"
   - 点击左侧菜单中的"Pages"
   - 在"Source"部分，从下拉菜单中选择"main"分支（或"master"分支）
   - 点击"Save"
   - 等待几分钟，GitHub将构建并部署你的网站
   - 部署成功后，你会看到一个URL，如 `https://your-username.github.io/knowledge-center/`

### 方法二：使用Git命令行

1. **初始化本地Git仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **连接到GitHub仓库**
   ```bash
   git remote add origin https://github.com/your-username/knowledge-center.git
   ```

3. **推送到GitHub**
   ```bash
   git push -u origin master
   ```

4. **然后按照方法一中的第3步启用GitHub Pages**

## 如何自定义网站

### 修改内容

1. **更改网站标题和标志**
   - 编辑 `index.html` 文件中的 `<title>` 标签
   - 修改 `<div class="logo">` 中的内容

2. **更新导航链接**
   - 在 `index.html` 文件中编辑 `<ul class="nav-links">` 部分

3. **添加/修改知识分类**
   - 在 `index.html` 文件中的 `<div class="category-grid">` 部分添加或修改分类卡片
   - 可以使用 Font Awesome 图标库中的其他图标

4. **更新文章内容**
   - 在 `index.html` 文件中的 `<div class="article-grid">` 部分更新文章卡片
   - 替换示例图片URL为你自己的图片

5. **修改关于我们信息**
   - 在 `index.html` 文件中的 `<section id="about">` 部分更新内容

### 修改样式

1. **更改颜色方案**
   - 在 `style.css` 文件中修改 `:root` 部分的CSS变量
   - 例如：更改 `--primary-color` 可以改变主题色

2. **调整布局和间距**
   - 根据需要修改 `style.css` 中的各个部分

3. **添加自定义字体**
   - 可以在 `index.html` 的 `<head>` 部分添加Google Fonts或其他字体链接
   - 然后在 `style.css` 中修改 `body` 的 `font-family` 属性

## 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/knowledge-center.git
   ```

2. **打开文件**
   - 直接在浏览器中打开 `index.html` 文件进行预览

3. **修改和测试**
   - 编辑文件后，刷新浏览器查看更改

## 响应式设计

网站采用移动优先的响应式设计理念，在以下断点处有专门的布局调整：

- 576px 以下：手机视图
- 576px - 768px：平板竖屏
- 768px - 992px：平板横屏
- 992px 以上：桌面视图

## 注意事项

1. 示例图片使用了 Picsum Photos 服务，在实际项目中应替换为你自己的图片
2. 搜索和订阅功能目前是模拟实现，在实际项目中需要连接后端API
3. 确保所有链接和图片路径正确，特别是在部署到GitHub Pages后

## License

MIT