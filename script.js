const btn = document.getElementById('toggle-btn');
const body = document.body;

btn.addEventListener('click', function() {
    if (body.classList.contains('somnuek')) {
        body.classList.remove('somnuek');
        body.style.backgroundColor = '#2d3436'; // สีเทาเข้ม
        body.style.color = 'white';
        btn.innerText = 'เปิดโหมดสว่าง';
    } else {
        body.classList.add('somnuek');
        body.style.backgroundColor = '';
        body.style.color = 'black';
        btn.innerText = 'เปิดโหมดมืด';
    }
});