const kue = document.getElementById('kue');
const text = document.getElementById('hbd');
const from = document.getElementById('from');
const music = document.getElementById('ultah');

kue.addEventListener('click', () => {
    text.textContent = 'Happy Birthday Sir Marasi ❤';
    from.textContent = 'dari Sammy dan teman-teman';
    music.play();
});

kue.addEventListener('dblclick', () => {
    text.textContent = '';
    from.textContent = '';
    music.pause();
});