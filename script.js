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
// function sendMail() {
//   console.log('Invio email...');

//   let pixelProParams = {
//     to_name: 'PixelPro',
//     user_name:document.getElementById('user_name').value,
//     email: document.getElementById('user_email').value,
//     message: document.getElementById('message').value
//   };

//   console.log('Dati email:', pixelProParams);

//   emailjs.send('service_gt2uoev', 'template_n0ykqqo', pixelProParams)
//     .then(function(response){
//       alert('SUCCESS!', response.status, response.text);
//       console.log('email inviata con successo');
//     }, function(error){
//       alert('FAILED, TRY AGAIN', error);
//       console.log('suca');
//     });

// }

// EMAILJS SUBMIT
// window.onload = function() {
//   document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     emailjs.sendForm('service_gt2uoev', 'template_n0ykqqo', '#contact-form')
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
//   });
// }

