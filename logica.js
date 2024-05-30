let nombre = prompt ('Ingrese una estacion: '); 

switch (nombre) {
    case 'invierno':
        alert ("Inicio el 21 de junio, fin el 22 de septiembre.");
        break;

    case 'primavera':
        alert("Inicio el 22 de septiembre, fin el 21 de diciembre.");
        break;

    case 'verano':
        alert("Inicio el 21 de diciembre, fin el 21 de marzo.");
        break;

        case 'otoño':
            alert("Inicio el 21 de marzo, fin el 21 de junio.");
            break;

    default:
        break;
}

