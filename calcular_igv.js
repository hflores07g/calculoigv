const precio=document.querySelector("#precio");
var cantidad = document.getElementById("cantidad");
var total = document.getElementById("total");


// Función para calcular el IGV por producto vendido
function calcularIGVProducto(precio, cantidad=1) {
    const subtotal = precio * 1;
    const igv1 = subtotal * 0.18; // 18% de impuesto
    return igv1;
  }
  
  // Función para calcular el IGV por el monto total de la factura
  function calcularIGVTotal(total) {
    const igvt = total * 0.18; // 18% de impuesto
    return igvt;
  }
  
  // Función para calcular el IGV
  function calcularIgv() {
    
    let igv = 0;
    if (precio && cantidad) {
      igv = calcularIGVProducto(precio.value, cantidad);
    } 
    total.value=(parseInt(precio.value))*(parseInt(cantidad.value));
    var igv2= calcularIGVTotal(total.value);
    document.getElementById("total").value = igv2.toFixed(2);
     
    document.getElementById("resultado").value = igv.toFixed(2);
    

  }