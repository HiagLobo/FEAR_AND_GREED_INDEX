const indexValue = document.getElementById('index-value');
const pointer = document.getElementById('pointer');

function updateFearAndGreedIndex() {
  axios({
    method: 'GET',
    url: 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi',
    headers: {
      'X-RapidAPI-Key': '34ffbe3ccamsh5a3e09fab5f5b59p1da24ejsn41f237b6a5cb',
      'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com',
    },
  })
    .then(function (response) {
      const data = response.data;
      const fgi = data.fgi;
      const now = fgi.now;
      const value = now.value;

      document.getElementById('fgi-value').innerHTML = value;
      document.getElementById('fgi-text').innerHTML = now.valueText;
      indexValue.innerText = value;

      pointer.style.transform = `translate(-50%, -100%) rotate(${
        value * 2.7 - 134
      }deg)`; /* 2.7 é o fator de escala para converter o valor do índice em graus e 135 é o deslocamento para ajustar a posição do ponteiro */
    })
    .catch(function (error) {
      console.error(error);
    });
}

// Chama a função updateFearAndGreedIndex() a cada 5 segundos
setInterval(updateFearAndGreedIndex, 5000);

updateFearAndGreedIndex();

$(document).ready(function () {
  // Define o intervalo de atualização para 15 segundos
  var intervalo = 30000;

  // Função que atualiza o widget do Twitter
  function atualizarWidget() {
    $('.twitter-timeline').each(function () {
      twttr.widgets.load(this);
    });
  }

  // Chama a função de atualização a cada intervalo definido
  setInterval(atualizarWidget, intervalo);
});

const gif = document.querySelector('#gif');
gif.addEventListener('load', () => {
  gif.style.animationPlayState = 'paused'; // pausa a animação do GIF
  setTimeout(() => {
    gif.style.display = true // oculta o GIF após a reprodução
  }, 2000); // espera 2 segundos para a reprodução do GIF
});
