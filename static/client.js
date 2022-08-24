

var whatsapp =document.getElementById('whatsappBtnImg');
var whatsappcon=document.getElementById('whatsappContactBox')
// console.log(whatsapp)
var body =document.querySelector('body')
whatsapp.addEventListener('click',()=>{
    // console.log('click')
    var graybg=document.querySelector('#graybg');
    if(graybg.style.display=='none'){
        graybg.style.display='block';
        whatsappcon.style.display='block'
        body.style.overflow='hidden'
    }
    graybg.addEventListener('click',()=>{
        graybg.style.display='none';
        body.style.overflow='scroll'
    })
})