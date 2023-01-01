const pianoKeys = document.querySelectorAll('.piano-keys .key');
volumeSlider = document.querySelector('.volume-slider input');
keysChecker = document.querySelector('.keys-checkbox input');

audio = new Audio('a.wav');

const playTune = (key) => {
    audio.src = `${key}.wav`;
    audio.play();

}
pianoKeys.forEach((key) => {
    key.addEventListener('click', () => {
        playTune(key.dataset.key);
    })
})


const handleVolume = (e) => {
    audio.volume = e.target.value
};

const handleShowKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.add("hode");
    })
}
volumeSlider.addEventListener("input", handleVolume);
keysChecker.addEventListener("click", handleShowKeys);
