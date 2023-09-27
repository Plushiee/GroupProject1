//awal script gallery @huda

//menambah kelas aktif pada galeri
$(document).ready(function () {
  $('.controls').on('click', 'li', function () {
    $('.controls li').removeClass('active');
    $(this).addClass('active');
  });

  //membuat filder dan animate
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

  // akhir skrip @Huda

  // Whatsapp logic
  function linkWa(pesan) {
    window.open(`https://wa.me/6281282160063?text=${pesan}`);
  }

  function hubungiWhatsapp() {
    Swal.fire({
      title: 'Hubungi Kami',
      html: `<form>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Nama" id="nama" required>
          </div>
          <div class="mb-3">
            <select class="form-select" id="jenis" required>
              <option value="1" selected>Informasi Lebih Lanjut</option>
              <option value="2">Membuat Jadwal</option>
            </select>
          </div>
          <div>
            <textarea class="form-control" id="pesan" placeholder="Masukan Pesan" required style="min-height: 150px;"></textarea>
          </div>
        </form>`,
      confirmButtonText: 'Kirim Pesan',
      focusConfirm: false,
      preConfirm: () => {
        const jenis = Swal.getPopup().querySelector('#jenis').value;
        const pesan = Swal.getPopup().querySelector('#pesan').value;
        const nama = Swal.getPopup().querySelector('#nama').value;
        var ndate = new Date();
        var hours = ndate.getHours();
        var sapaan = hours < 12 ? 'Selamat Pagi' : hours < 18 ? 'Selamat Siang' : 'Selamat Malam';
        var gabungan = '';

        // cek pesan kosong
        if (pesan === '' || nama === '') {
          Swal.showValidationMessage(`Pesan Anda masih kosong`);
        }

        if (jenis == '1') {
          gabungan = `${sapaan} Kakak admin *Milinkbeauty*, Saya ${nama} ingin bertanya *informasi lebih lanjut* mengenai :%0a${pesan}`;
        } else {
          gabungan = `${sapaan} Kakak admin *Milinkbeauty*, Saya ${nama} ingin *membuat jadwal* mengenai :%0a ${pesan}`;
        }

        // Buat message
        return { gabungan: gabungan };
      },
    }).then((result) => {
      linkWa(result.value.gabungan);
    });
  }

  $('#whatsApp').click(function (e) {
    e.preventDefault();
    hubungiWhatsapp();
  });

  $('#whatsAppMini').click(function (e) {
    e.preventDefault();
    hubungiWhatsapp();
  });

  // script by hawa
  function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    answer.classList.toggle('active');
  }
});

// script nav bawah @huda
function addClass(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function (e) {
      const current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current !== elem[i]) {
          elem[i].classList.remove('isActive');
          elem[i].classList.add('notActive');
        } else {
          current.classList.add('isActive');
          current.classList.remove('notActive');
        }
      }
      e.preventDefault();
    });
  }
}
addClass(document.querySelectorAll('.link'));
