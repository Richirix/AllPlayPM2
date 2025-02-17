const carritoCompras = require("../index");

//constructor(): Inicializa el constructor como un array vacío.
describe ("carritoCompra",()=>{
let carrito 

beforeEach(()=>{
    carrito = new carritoCompras();
})

    it("Debe tener un contructor que inicialice el carrito con un array vacio",()=>{
       

        expect(carrito.producto).toEqual([]);

    });




// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
it("Debe tener un metodo agregarProducto que agregue un nuevo producto al carrito", () => {
    const carrito = new carritoCompras();

    
    expect(carrito.agregarProducto).toBeDefined();

   
    carrito.agregarProducto({ name: "Zapatilla", price: 10 });
    expect(carrito.producto.length).toBe(1); 

   
    carrito.agregarProducto({ name: "Playera", price: 10 });
    carrito.agregarProducto({ name: "Pantalon", price: 10 });

  
    expect(carrito.producto.length).toBe(3); 


    const producto = { name: "pantalon", price: 10 };
    carrito.agregarProducto(producto);
    expect(carrito.producto).toContainEqual(producto); 
});



// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
    it("Calcula el total de la compra sumando los precios de todos los productos en el carrito",()=>{
       
        expect(carrito.calcularTotal).toBeDefined();

        expect(carrito.calcularTotal()).toBe(0);

        carrito.agregarProducto({
            name:"Zapatilla", price:10
        });

        carrito.agregarProducto({
            name:"playera", price:10
        });
        carrito.agregarProducto({
            name:"patalon", price:10
        });

        expect(carrito.calcularTotal()).toBe(30);


    });
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

it("Aplica un descuento al total de la compra según el porcentaje especificado",()=>{


expect(carrito.aplicarDescuento).toBeDefined();


expect(carrito.calcularTotal()).toBe(0)

expect(carrito.aplicarDescuento(10)).toBe(0);


carrito.agregarProducto({
    name:"Zapatilla", price:10
});

carrito.agregarProducto({
    name:"playera", price:10
});
carrito.agregarProducto({
    name:"patalon", price:10
});

const priceDescuento = carrito.calcularTotal() - 3;

expect(carrito.aplicarDescuento(10)).toBe(priceDescuento);

});
// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

});