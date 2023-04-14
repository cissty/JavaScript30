window.addEventListener(
    'keydown',
    playSound
);
function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if(!audio) return; // stop the function running.
   audio.currentTime = 0; // rewind to the start
    audio.play();
        
      key.classList.add('playing');
    
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip it if it's not a transfom
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});