const textDefault = 'AQUÍ VA LA REPSUESTA';
var texto;
var textarea;

window.addEventListener('load', run)

function run() {
    document.getElementById('result').innerText = textDefault;
    textarea=document.getElementById("text");
    document.getElementById("encrypt-btn").addEventListener("click" ,encriptar);
    document.getElementById("decrypt-btn").addEventListener("click" ,desencriptar);
}

function encriptar(event){
    let mensaje=textarea.value
 
    mensaje=mensaje.split("");
    for (const key in mensaje ) {
        if (mensaje[key] === 'a') mensaje[key] = 'ai';
        if (mensaje[key] === 'e') mensaje[key] = 'enter';
        if (mensaje[key] === 'i') mensaje[key] = 'imes';
        if (mensaje[key] === 'o') mensaje[key] = 'ober';
        if (mensaje[key] === 'u') mensaje[key] = 'ufat';
    }
    mensaje=mensaje.join("");
    document.getElementById('result').innerText = mensaje;
    texto=mensaje;
}

function desencriptar(){
   let mensaje = texto.replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
    document.getElementById('result').innerText = mensaje;
}

