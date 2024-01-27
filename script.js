var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">'+index+'</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

// EMAILJS SEND
function sendMail() {
  event.preventDefault();

  let pixelProParams = {
    to_name: 'PixelPro',
    user_name:document.getElementById('user_name').value,
    email: document.getElementById('user_email').value,
    message: document.getElementById('message').value
  };

  emailjs.send('service_gt2uoev', 'template_n0ykqqo', pixelProParams)
    .then(function(response){
      alert('SUCCESS!', response.status, response.text);
      document.getElementById('contact-form').reset();
    }, function(error){
      alert('FAILED, TRY AGAIN', error);
    });

}
