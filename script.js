// JavaScript 交互逻辑
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('.add-btn'); // 添加收藏按钮
    const modal = document.getElementById('add-modal'); // 添加收藏的弹窗
    const closeModalBtn = document.querySelector('.close-btn'); // 关闭弹窗的按钮
    const saveBtn = document.getElementById('save-btn'); // 保存收藏按钮
    const cardsContainer = document.getElementById('cards-container'); // 用于展示卡片的容器
    
    // 从 localStorage 中加载收藏网址
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // 渲染书签卡片
    function renderBookmarks() {
        cardsContainer.innerHTML = ''; // 清空之前的卡片
        bookmarks.forEach((bookmark, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-content">
                    <h3>${bookmark.name}</h3>
                    <p><a href="${bookmark.url}" target="_blank">${bookmark.url}</a></p>
                    <p>添加时间: ${bookmark.date}</p>
                </div>
                <div class="card-actions">
                    <i class="fas fa-trash" data-index="${index}"></i>
                </div>
            `;
            cardsContainer.appendChild(card);
        });

        // 为每个删除按钮添加点击事件
        const deleteIcons = document.querySelectorAll('.fa-trash');
        deleteIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                bookmarks.splice(index, 1); // 删除对应索引的书签
                localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // 更新 localStorage
                renderBookmarks(); // 重新渲染书签
            });
        });
    }

    // 显示添加收藏的弹窗
    addBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // 关闭弹窗
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 点击保存按钮时，添加新的书签
    saveBtn.addEventListener('click', () => {
        const siteName = document.getElementById('site-name').value;
        const siteUrl = document.getElementById('site-url').value;

        if (siteName === '' || siteUrl === '') {
            alert('请填写完整信息'); // 输入为空时弹出提示
            return;
        }

        const bookmark = {
            name: siteName,
            url: siteUrl,
            date: new Date().toLocaleString(),
            frequency: 0
        };

        bookmarks.push(bookmark); // 将新书签添加到数组
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // 存储到 localStorage
        renderBookmarks(); // 重新渲染书签
        modal.style.display = 'none'; // 关闭弹窗

        // 清空输入框
        document.getElementById('site-name').value = '';
        document.getElementById('site-url').value = '';
    });

    // 页面加载时，渲染现有书签
    renderBookmarks();
});
