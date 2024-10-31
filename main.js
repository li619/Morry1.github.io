// 获取所有图像元素
const images = document.querySelectorAll('img');

// 定义动画函数
function animateImage(image, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            image.style.transition = 'transform 1s ease, opacity 1s ease';
            image.style.transform = 'rotate(360deg) scale(0)';
            image.style.opacity = '0';
            // 监听动画结束事件
            image.addEventListener('transitionend', () => {
                // 新增淡入效果
                image.style.transition = 'opacity 1s ease';
                image.style.opacity = '1'; // 恢复可见
                setTimeout(() => {
                    resolve(); // 结束动画后调用 resolve
                }, 100); // 淡入后延迟1秒再开始下一个动画
            }, { once: true }); // 只监听一次
        }, delay);
    });
}

// 执行所有动画
async function runAnimations() {
    for (let i = 0; i < images.length; i++) {
        await animateImage(images[i], i * 50); // 每个图像间隔50毫秒
    }
}

// 开始动画
runAnimations();
