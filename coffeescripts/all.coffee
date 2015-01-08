$('.bigtext').bigtext()

Tabletop.init
  key: 'https://docs.google.com/spreadsheets/d/1C5Sdax2-et0u4-xys6XoFP-vH_gJ6SvtoIFtIQEM4w8/pubhtml',
  key: 'https://docs.google.com/spreadsheets/d/1v7O_9whMC8qzUrExTVUpmt97N6VsXFMYR-EKrXsXQoQ/pubhtml',
  callback: (data) =>
    for column, i in data.response.column_names
      if column isnt '時間戳記'
        for el in data.response.elements
          $('.sentence'+i).append('<div class="item"><div class="item-wrap"><div class="bigtext-item"><span>'+el[column]+'</span></div></div></div>')
    $('.bigtext-item').bigtext({
      minfontsize: 40
    })
    $('body').addClass('prepared')

# $('.intro').click ->
$('body').click ->
  total1 = $('.sentence1 .item').length
  total2 = $('.sentence2 .item').length
  window.rand1 = Math.floor(Math.random()*(total1))
  window.rand2 = Math.floor(Math.random()*(total2))
  $('.sentence1 .item, .sentence2 .item').removeClass('in')
  flip(15)
  $('body').removeClass('prepared').addClass('start')

flip = (i) ->
  setTimeout (->
    $('.sentence1').find('.item').removeClass('in')
    $('.sentence1').find('.item:eq(' + (window.rand1 - i) + ')').addClass('in')
    if --i then flip i else flip2(15)
  ), 80
flip2 = (i) ->
  setTimeout (->
    $('.sentence2').find('.item').removeClass('in')
    $('.sentence2').find('.item:eq(' + (window.rand1 - i) + ')').addClass('in')
    flip2 i if --i
  ), 80
