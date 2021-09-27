$('#start').on('click', function () {
  start()
  setTimeout(function () {
    finish()
  }, 30000)
})

function start() {
  var clicks = 0
  $('.main p, #start').hide()
  $('.counter, #countdown').show()
  $('.main h1').html('Click! Click! Click!')
  $('body').on('click', function () {
    $('.counter').html((parseInt($('.counter').html(), 10) || 0) + 1)
  })

  var countdownNumberEl = document.getElementById('countdown-number')
  var countdown = 30

  countdownNumberEl.textContent = countdown
  interval = setInterval(function () {
    countdown = --countdown <= 0 ? 30 : countdown
    countdownNumberEl.textContent = countdown
  }, 1000)
}

function finish() {
  $('#countdown').hide()
  var clicks = $('.counter').html()
  $('.counter').html(parseInt(0))
  $('.counter').hide()
  $('.main h1').html('You clicked ' + clicks + ' times')
  if (clicks < 50) {
    $('.main p').html('That was pretty lame.').show()
  } else {
    $('.main p')
      .html('Good job! I bet your right hand is very well trained. Gehehe')
      .show()
  }
  $('#start').html('Try again').show()
  $('body').off('click')
  clearInterval(interval)
}
