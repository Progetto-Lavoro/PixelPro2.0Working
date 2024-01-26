const imgBox = document.querySelectorAll('.imgBox');
const contentBox = document.querySelectorAll('.contentBox');

for (let i = 0; i < imgBox.length; i++) {
    imgBox[i].addEventListener('mouseover',function(){
        for(let i = 0; i < contentBox.length; i++){
            contentBox[i].className = 'contentBox';
        }
        document.getElementById(this.dataset.id).className = 'contentBox active';
        for (let i = 0; i < imgBox.length; i++) {
           imgBox[i].className = 'imgBox';
        }
        this.className = 'imgBox active'
    })
}








// const imgBox = document.querySelectorAll('.imgBox');
// const contentBox = document.querySelectorAll('.contentBox');

// let timeoutId;

// for (let i = 0; i < imgBox.length; i++) {
//     imgBox[i].addEventListener('mouseover', function() {
//         clearTimeout(timeoutId);

//         for (let i = 0; i < contentBox.length; i++) {
//             contentBox[i].className = 'contentBox';
//         }

//         document.getElementById(this.dataset.id).className = 'contentBox active';

//         for (let i = 0; i < imgBox.length; i++) {
//             imgBox[i].className = 'imgBox';
//         }

//         this.className = 'imgBox active';
//     });

//     imgBox[i].addEventListener('mouseout', function() {
//         const that = this;

//         timeoutId = setTimeout(function() {
//             that.className = 'imgBox';
//             for (let i = 0; i < contentBox.length; i++) {
//                 contentBox[i].className = 'contentBox';
//             }
//         }, 5000);
//     });
// }

//QUA SOPRA SERVE PER DARE UN TEMPO ALL'HOVER

