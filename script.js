document.querySelectorAll('.app-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        alert('你点击了一个应用图标！');
    });
});
