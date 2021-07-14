document.querySelector('#text-input').addEventListener('input', () => {
  const input = document.querySelector('#text-input');
  document.querySelector('#meme-text').innerHTML = input.value;
});
