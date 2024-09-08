// JavaScript 交互逻辑
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('.add-btn');
    const modal = document.getElementById('add-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const saveBtn = document.getElementById('save-btn');
    const cardsContainer = document.getElementById('cards-container');
    
    // 模拟数据存储在 localStorage 中
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // 打开添加收藏的弹窗
    addBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // 关闭弹窗
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 保存收藏
    saveBtn.addEventListener('click', () => {
        const siteName = document.getElementById('site-name').value;
        const siteUrl = document.getElementById('site-url').value;

        if (siteName === '' || siteUrl === '') {
            alert('请填写完整信息');
            return;
        }

        const bookmark = {
            name: siteName,
            url: siteUrl,
            date: new Date().toLocaleString(),
            frequency: 0
        };

        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
        modal.style.display = 'none';
    });

    // 渲染收藏卡片
    function renderBookmarks() {
        cardsContainer.innerHTML = '';
        bookmarks.forEach((bookmark, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-content">
                    <h3>${bookmark.name}</h3>
                    <p><a href="${bookmark.url}" target="_blank">${bookmark.url}</a></p>
                    <p>添加时间: ${bookmark.date}</p>
                </div>
                <div
