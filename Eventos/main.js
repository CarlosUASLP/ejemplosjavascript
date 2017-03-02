function saludar()
{
    alert('hola');
}

function saludar2()
{
    document.write('Hola documento');
}

var btnSaluda = document.getElementById('btn_saludo')
btnSaluda.onclick = saludar;
/*btnSaluda.onclick = saludar2;*/


var btnSaluda2 = document.getElementById('btn_saludo_v2')
btnSaluda2.addEventListener('click',saludar)
btnSaluda2.addEventListener('click',saludar2)