function q(selector) {
    return document.querySelector(selector)
  }

  function do_tts(e) {
      const text = q('#editor').value
      if (text) {
          q('#tt').textContent = text
          q('#message').textContent = 'Synthesizing...'
          q('#speak-button').disabled = true
          q('#audio').hidden = true
          synthesize(text)
      }
      e.preventDefault()
      return false
  }
  q('#speak-button').addEventListener('click', do_tts)

  function synthesize(text) {
      fetch(`/call/vits?text=${encodeURIComponent(text)}`, { cache: 'no-cache' })
          .then(function (res) {
              if (!res.ok) throw Error(res.statusText)
              return res.blob()
          }).then(function (blob) {
              q('#message').textContent = ''
              q('#speak-button').disabled = false
              q('#audio').src = URL.createObjectURL(blob)
              q('#audio').hidden = false
          }).catch(function (err) {
              q('#message').textContent = 'Error: ' + err.message
              q('#speak-button').disabled = false
          })
  }
