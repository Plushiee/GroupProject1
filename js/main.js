//awal script gallery @huda

//menambah kelas aktif pada galeri
$(document).ready(function () {
  $('.controls').on('click', 'li', function () {
    $('.controls li').removeClass('active');
    $(this).addClass('active');
  });
});
//membuat filder dan animate
$(document).ready(function () {
  var containerEl = $('.gallery');

  var mixer = mixitup(containerEl, {
    animation: {
      effects: 'fade translateZ(-100px)',
      effectsIn: 'fade translateY(-100%)',
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
  });
  //menampilkan galeri
  Fancybox.bind('[data-fancybox]', {
    selector: '.mix:visible a',
    loop: true,
    hash: true,
    transitionEffect: 'slide',
    clickContent: function (current, event) {
      return current.type === 'image' ? 'next' : false;
    },
  });
});
// akhir skrip @Huda
