/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let vocales = [['e',"enter"],['i',"imes"],['a',"ai"],['o',"ober"],['u',"ufat"]];
function encriptar(){
    let texto = document.getElementById('texto').value;
    for (let x =0;x<vocales.length;x++){
        if(texto.includes(vocales[x][0])){
            console.log(vocales[x][0]);
            texto = texto.replaceAll(vocales[x][0],vocales[x][1]);
            console.log(texto);
        }
    }
    document.getElementById('textoDesencriptado').value = texto;
    document.getElementById('texto').value = "";
    document.getElementById('btncopiar').style.display = "block";
    document.getElementById('textoDesMsj').style.display = "none";

    return texto;
   
}

function desencriptar(){
    let texto = document.getElementById('textoDesencriptado').value;
    if(texto == ""){
        texto = document.getElementById('texto').value;
    }
    for (let x =0;x<vocales.length;x++){
        if(texto.includes(vocales[x][1])){
            console.log(vocales[x][1]);
            texto = texto.replaceAll(vocales[x][1],vocales[x][0]);
            console.log(texto);
        }
    }
    document.getElementById('textoDesencriptado').value = texto;
    document.getElementById('texto').value = "";
    return texto;
}

function copiarEncriptado(textoctrlv){
    console.log(textoctrlv);
    document.getElementById('texto').value = textoctrlv;
    document.getElementById('textoDesencriptado').select();
    
}
