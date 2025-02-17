
//constructor(): Inicializa el constructor como un array vacío.
class carritoCompras{
    constructor(){
        this.producto =[];
    };
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
agregarProducto(product){
this.producto.push(product)
};

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

calcularTotal(){
    let total = 0;

   this.producto.forEach(product=>{
    total += product.price;
   });
      return total;
    };


// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
aplicarDescuento(porcentaje){
    porcentaje = 10;

    const total = this.calcularTotal();

    const totalDescuento = total - (porcentaje / 100)*total;

    return totalDescuento;

};

};
