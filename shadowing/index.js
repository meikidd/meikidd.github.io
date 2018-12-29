
    let i = 0;
    const player = document.querySelector('#audio-player');
    // player.playbackRate = 3;
    showSubtitle(i);
    
    player.addEventListener('timeupdate', function() {
      let currentSentence = subtitle[i];
      if(!currentSentence) return;

      if(player.currentTime > currentSentence.endTime) {
        const sentenceDuration = currentSentence.endTime - currentSentence.startTime;
        player.pause();
        i++;
        // const stopInterval = 100;
        const stopInterval = sentenceDuration * 2000;
        setTimeout(() => {
          player.currentTime = player.currentTime - 0.5
          player.play();
          showSubtitle(i);
        }, stopInterval);
        countdown(stopInterval);
      }
    });

    function showSubtitle(i) {
      let innerHTML = '';
      const length = subtitle.length;
      if(i >= length) return;

      if(i - 2 >= 0) {
        innerHTML += subtitle[i-2].content.join('\n');
        innerHTML += '\n\n';
      }
      if(i - 1 >= 0) {
        innerHTML += subtitle[i-1].content.join('\n');
        innerHTML += '\n\n';
      }

      innerHTML += '<pre class="current">';
      innerHTML += subtitle[i].content.join('\n');
      innerHTML += '</pre>';
      innerHTML += '\n';

      if(i + 1 < length) {
        innerHTML += subtitle[i+1].content.join('\n');
        innerHTML += '\n\n';
      }
      if(i + 2 < length) {
        innerHTML += subtitle[i+2].content.join('\n');
        innerHTML += '\n\n';
      }
      const subtitleElm = document.querySelector('#subtitle');
      subtitleElm.innerHTML = innerHTML;
    }

    function countdown(time) {
      const countdownElm = document.querySelector('#countdown');
      countdownElm.style = `width: 0%; visibility: visible; transition-duration: ${time/1000}s;`;
      setTimeout(() => {
        countdownElm.style = '';
      }, time);
    }