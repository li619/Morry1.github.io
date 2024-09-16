// 图像文件名数组
const IMAGE_FILENAMES = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg'
];

// 获取容器和按钮元素
const thumbBar = document.querySelector('.thumbnail-container');
const mainImage = document.getElementById('main-image');
const toggleButton = document.getElementById('toggle-button');
const fullscreenButton = document.getElementById('fullscreen-button');
const overlay = document.querySelector('.overlay');

// 迭代图像数组并创建缩略图
IMAGE_FILENAMES.forEach(filename => {
    // 创建新的 <img> 元素
    const newImage = document.createElement('img');
    newImage.src = `images/${filename}`;  // 设置 src 属性
    newImage.alt = filename;  // 设置 alt 属性
    newImage.classList.add('thumbnail');  // 添加类名以便应用 CSS 样式

    // 添加点击事件监听器
    newImage.addEventListener('click', () => {
        mainImage.src = newImage.src;  // 更新主图像的 src 属性
    });

    // 将新的 <img> 元素添加到缩略图容器中
    thumbBar.appendChild(newImage);
});

// 变亮/变暗按钮点击事件处理器
toggleButton.addEventListener('click', () => {
    if (toggleButton.classList.contains('dark')) {
        toggleButton.classList.remove('dark');
        toggleButton.classList.add('light');
        toggleButton.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';  // 设置蒙板背景颜色为暗色
    } else {
        toggleButton.classList.remove('light');
        toggleButton.classList.add('dark');
        toggleButton.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';  // 设置蒙板背景颜色为透明
    }
});

// 全屏按钮点击事件处理器
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // 进入全屏模式
        mainImage.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        // 退出全屏模式
        document.exitFullscreen();
    }
});
