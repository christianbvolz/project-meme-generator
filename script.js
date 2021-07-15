const memeImage = 'meme-image';
const memeContainer = 'meme-image-container';

document.querySelector('#text-input').addEventListener('input', () => {
  const input = document.querySelector('#text-input');
  document.querySelector('#meme-text').innerHTML = input.value;
});

function uploadImage(event) {
  const image = document.getElementById(memeImage);
  image.src = URL.createObjectURL(event.target.files[0]);
}

document.getElementById('meme-insert').addEventListener('change', uploadImage);
document.getElementById('fire').addEventListener('click', () => {
  const containerMeme = document.getElementById(memeContainer);
  containerMeme.style.border = '3px dashed red';
});
document.getElementById('water').addEventListener('click', () => {
  const containerMeme = document.getElementById(memeContainer);
  containerMeme.style.border = '5px double blue';
});
document.getElementById('earth').addEventListener('click', () => {
  const containerMeme = document.getElementById(memeContainer);
  containerMeme.style.border = '6px groove green';
});
document.getElementById('meme-1').addEventListener('click', () => {
  const image = document.getElementById(memeImage);
  const meme1 = document.getElementById('meme-1');
  image.src = meme1.src;
});
document.getElementById('meme-2').addEventListener('click', () => {
  const image = document.getElementById(memeImage);
  const meme2 = document.getElementById('meme-2');
  image.src = meme2.src;
});
document.getElementById('meme-3').addEventListener('click', () => {
  const image = document.getElementById(memeImage);
  const meme3 = document.getElementById('meme-3');
  image.src = meme3.src;
});
document.getElementById('meme-4').addEventListener('click', () => {
  const image = document.getElementById(memeImage);
  const meme4 = document.getElementById('meme-4');
  image.src = meme4.src;
});
