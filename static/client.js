

var whatsapp =document.getElementById('whatsappBtnImg');
var whatsappcon=document.getElementById('whatsappContactBox')
var whatsappSubmitBtn=document.getElementById('whatsappSubmitBtn');
var whatsappBtn=document.getElementById('whatsappBtn');

// console.log(whatsapp)
var body =document.querySelector('body')
whatsapp.addEventListener('click',()=>{
    // console.log('click')
    var graybg=document.querySelector('#graybg');
    if(graybg.style.display=='none'){
        graybg.style.display='block';
        body.style.overflow='hidden'
        // whatsappcon.style.display='block'
    }
    else{
        graybg.style.display='none';
        body.style.overflow='scroll'

    }
    whatsappSubmitBtn.addEventListener('click',()=>{
            graybg.style.display='none';
            body.style.overflow='scroll'
    })
    
})