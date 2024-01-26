// circle1
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
// circle2
const imgBox2 = document.querySelectorAll('.imgBox2');
const contentBox2 = document.querySelectorAll('.contentBox2');

for (let i = 0; i < imgBox2.length; i++) {
    imgBox2[i].addEventListener('mouseover',function(){
        for(let i = 0; i < contentBox2.length; i++){
            contentBox2[i].className = 'contentBox2';
        }
        document.getElementById(this.dataset.id).className = 'contentBox2 active';
        for (let i = 0; i < imgBox2.length; i++) {
           imgBox2[i].className = 'imgBox2';
        }
        this.className = 'imgBox2 active'
    })
}
// circle3

const imgBox3 = document.querySelectorAll('.imgBox3');
const contentBox3 = document.querySelectorAll('.contentBox3');

for (let i = 0; i < imgBox3.length; i++) {
    imgBox3[i].addEventListener('mouseover',function(){
        for(let i = 0; i < contentBox3.length; i++){
            contentBox3[i].className = 'contentBox3';
        }
        document.getElementById(this.dataset.id).className = 'contentBox3 active';
        for (let i = 0; i < imgBox3.length; i++) {
           imgBox3[i].className = 'imgBox3';
        }
        this.className = 'imgBox3 active'
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

