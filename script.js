document.querySelector('#text-input').addEventListener('input', () => {
  const input = document.querySelector('#text-input');
  document.querySelector('#meme-text').innerHTML = input.value;
});

function uploadImage(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

document.getElementById('meme-insert').addEventListener('change', uploadImage);
document.getElementById('fire').addEventListener('click', () => {
  const containerMeme = document.getElementById('meme-image-container');
  containerMeme.style.border = '3px dashed red';
});
document.getElementById('water').addEventListener('click', () => {
  const containerMeme = document.getElementById('meme-image-container');
  containerMeme.style.border = '5px double blue';
});
document.getElementById('earth').addEventListener('click', () => {
  const containerMeme = document.getElementById('meme-image-container');
  containerMeme.style.border = '6px groove green';
});
