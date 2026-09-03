/* Your JS here. */
console.log('Hello World!')
const button = document.getElementById('button');
const content = document.getElementById('content');

button.addEventListener('click', (e) => {
    e.stopPropagation();
    content.classList.toggle('hidden');
});

document.addEventListener('click', () => {
    content.classList.add('hidden');
});