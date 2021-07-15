document.querySelector('#text-input').addEventListener('input', () => {
  const input = document.querySelector('#text-input');
  document.querySelector('#meme-text').innerHTML = input.value;
});

function uploadImage(event) {
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
}

document.getElementById('meme-insert').addEventListener('change', uploadImage);
