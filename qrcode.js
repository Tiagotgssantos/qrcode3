let gerar = document.getElementById("gerarQRCode");

function gerarQRCode(){
    let inputUsuario = document.querySelector("textarea").value;
    //o .value vai pegar o valor dentro do textarea.
    let googleAPI ='https://chart.googleapis.com/chart?cht=qr&chs=270x270&chld=H&chl='
    /*Apos adicionar o link tem que adicionar alguns parametros
    cht=qr&chs=300x300&chl=
    e para melhorar a leitura do QRcode podemos adicionar apos o 300:
    &chld=H
     */
    let conteudoQRCode = googleAPI + encodeURIComponent(inputUsuario);
    //encondeURIComponent dessa forma convertemos para o fomato url
    document.querySelector("#QECodeImage").src = conteudoQRCode;
    let container = document.getElementById("container");
    container.style.height="540px";
       
}

function trocarCor(){
    let cor1 = document.querySelector('span:first-of-type');
    
    cor1.style. background= 'linear-gradient(to right,transparent, rgb(8, 245, 146))'

    let cor2 = document.querySelector('span:nth-of-type(2)');
    cor2.style.background= 'linear-gradient(to bottom,transparent, rgb(8, 245, 146))';

    let cor3 = document.querySelector('span:nth-of-type(3)');
    cor3.style. background= 'linear-gradient(to left,transparent, rgb(8, 245, 146))';

    let cor4 = document.querySelector('span:last-of-type');
    cor4.style.background= 'linear-gradient(to top,transparent, rgb(8, 245, 146))';
}

gerar.addEventListener('click', gerarQRCode);

let gerar2 = document.getElementById("gerarQRCode");
gerar.addEventListener('click', trocarCor);