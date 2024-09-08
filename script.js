// 打开和关闭设置弹窗
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeBtn = document.querySelector('.close');

settingsBtn.addEventListener('click', () => {
    settingsModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    settingsModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});

// 添加书签
const addBookmarkBtn = document.getElementById('addBookmarkBtn');
const bookmarksDiv = document.querySelector('.bookmarks');

addBookmarkBtn.addEventListener('click', () => {
    const url = document.getElementById('addUrl').value;
    const name = document.getElementById('addName').value;

    if (url && name) {
        const newBookmark = document.createElement('div');
        newBookmark.className = 'bookmark';
        newBookmark.setAttribute('data-url', url);

        const icon = document.createElement('img');
        icon.src = `${url}/favicon.ico`;
        icon.alt = name;

        const title = document.createElement('p');
        title.textContent = name;

        newBookmark.appendChild(icon);
        newBookmark.appendChild(title);
        bookmarksDiv.appendChild(newBookmark);
    }
});

// 更改背景颜色
const bgColorPicker = document.getElementById('bgColorPicker');
bgColorPicker.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// 调整图标大小
const iconSizeSlider = document.getElementById('iconSizeSlider');
iconSizeSlider.addEventListener('input', (event) => {
    const bookmarks = document.querySelectorAll('.bookmark img');
    bookmarks.forEach((icon) => {
        icon.style.width = event.target.value + 'px';
    });
});

// 调整图标圆角
const borderRadiusSlider = document.getElementById('borderRadiusSlider');
borderRadiusSlider.addEventListener('input', (event) => {
    const bookmarks = document.querySelectorAll('.bookmark img');
    bookmarks.forEach((icon) => {
        icon.style.borderRadius = event.target.value + 'px';
    });
});

// 调整图标透明度
const iconOpacitySlider = document.getElementById('iconOpacitySlider');
iconOpacitySlider.addEventListener('input', (event) => {
    const bookmarks = document.querySelectorAll('.bookmark img');
    bookmarks.forEach((icon) => {
        icon.style.opacity = event.target.value;
    });
});

// 点击书签打开链接
bookmarksDiv.addEventListener('click', (event) => {
    const bookmark = event.target.closest('.bookmark');
    if (bookmark) {
        const url = bookmark.getAttribute('data-url');
        window.open(url, '_blank');
    }
});
