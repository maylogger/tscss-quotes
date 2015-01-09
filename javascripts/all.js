(function() {
  var flip, flip2, regen,
    _this = this;

  $('.bigtext').bigtext();

  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1C5Sdax2-et0u4-xys6XoFP-vH_gJ6SvtoIFtIQEM4w8/pubhtml',
    callback: function(data) {
      var column, el, i, _i, _j, _len, _len1, _ref, _ref1;

      _ref = data.response.column_names;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        column = _ref[i];
        if (column !== '時間戳記') {
          _ref1 = data.response.elements;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            el = _ref1[_j];
            $('.sentence' + i).append('<div class="item"><div class="item-wrap"><div class="bigtext-item"><span>' + el[column] + '</span></div></div></div>');
          }
        }
      }
      $('.bigtext-item').bigtext({
        maxfontsize: 100,
        minfontsize: 40
      });
      return $('body').addClass('prepared');
    }
  });

  $('.intro').click(function() {
    return regen();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 32) {
      return regen();
    }
  });

  regen = function() {
    var total1, total2;

    total1 = $('.sentence1 .item').length;
    total2 = $('.sentence2 .item').length;
    window.rand1 = Math.floor(Math.random() * total1);
    window.rand2 = Math.floor(Math.random() * total2);
    $('.sentence1 .item, .sentence2 .item').removeClass('in');
    flip(15);
    return $('body').removeClass('prepared').addClass('start');
  };

  flip = function(i) {
    return setTimeout((function() {
      $('.sentence1').find('.item').removeClass('in');
      $('.sentence1').find('.item:eq(' + (window.rand1 - i) + ')').addClass('in');
      if (--i) {
        return flip(i);
      } else {
        return flip2(15);
      }
    }), 80);
  };

  flip2 = function(i) {
    return setTimeout((function() {
      $('.sentence2').find('.item').removeClass('in');
      $('.sentence2').find('.item:eq(' + (window.rand1 - i) + ')').addClass('in');
      if (--i) {
        return flip2(i);
      }
    }), 80);
  };

}).call(this);
