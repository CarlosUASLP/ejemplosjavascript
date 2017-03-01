//document.write('Hola mundo JS')
//var cajas = document.getElementsByTagName('div');
//var cajas = document.getElementsByClassName('caja')

var caja = document.getElementById('primera')
caja.textContent = 'Primera caja';
//cajas[0].textContent = 'Hola mundo'
//cajas[1].innerHTML = '<b> Hola JS </b>'

//No se recomienda agregar elementos con el metodo write
//document.write('<div class="caja"> Nuevo elemento </div>')

//5 pasos para agregar un nuevo elemento en el DOM
//Paso 1. Crear el nuevo elemento (createElement())
var elementoNuevo = document.createElement('div')

//Paso 2. Crear el contenido (createTextNode())
var nodoContenido = document.createTextNode('Nuevo elemento')

//Paso 3. Añadir el contenido al elemento (appendChild())
elementoNuevo.appendChild(nodoContenido)

//Paso 4. Agregar atributos al elemnto (setAttribute())
elementoNuevo.setAttribute('class', 'caja colorcoral')
/*elementoNuevo.setAttribute('class', 'caja')
elementoNuevo.setAttribute('class', 'colorcoral')*/

//Paso 5. Agregar el elemento al documento (appendChild())
//Agrega el nuevo elemento al final
var contenedor = document.getElementById('contenedor')
//contenedor.appendChild(elementoNuevo)

//Agrega el nuevo elemento al inicio
var primera = document.getElementById('primera')
contenedor.insertBefore(elementoNuevo, primera)

var segunda = document.getElementById('segunda')
contenedor.insertBefore(elementoNuevo, segunda)

//eliminar la caja con el id='tercera'
var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)