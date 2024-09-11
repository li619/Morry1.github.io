// scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. 搜索功能，保留原有逻辑
    const searchButton = document.querySelector('.search a');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = document.querySelector('.search input').value;
            if (query) {
                alert('您查询的内容是: ' + query);
            } else {
                alert('请输入查询内容');
            }
        });
    }

    // 2. 处理所有其他按钮的点击事件，显示 "该功能还在开发中"
    const buttons = document.querySelectorAll('a'); // 选择所有的 <a> 标签
    buttons.forEach(button => {
        // 忽略搜索按钮
        if (button !== searchButton) {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // 阻止默认链接跳转行为
                alert('该功能还在开发中...');
            });
        }
    });
});
