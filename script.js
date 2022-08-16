var typeWriter = document.getElementById('type-writer');

var dataText = typeWriter.getAttribute('data-text');
 var count = 0 ;
 var dataTextLenght = dataText.length;

 var setText =() =>{
    setTimeout ( () => {
        typeWriter.textContent += dataText.charAt(count);
        count ++;
        if (count <= dataTextLenght){
            setText();
        }
    },100);
 }

 window.onload =() =>{
    setText ();
 }

