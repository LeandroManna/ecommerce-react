import React from 'react';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <h1 className='product-title'>Detalles del Producto</h1>
      <ProductDetail
        name="POP! DIE-CAST IRON MAN"
        description="El nuevo estreno Pop! Figura, diseñada para ser el coleccionable de primer nivel, al frente y al centro, ¡el Die-cast Pop! serie. Estas figuras vienen en estuches de acrílico fundido a presión con detalles grabados y se sujetan a la base del estuche. El estuche se puede abrir y la figura se puede separar de la base, pero con una vista clara de todos los lados de tu objeto coleccionable, no necesitarás desembalarlo para ver todos los detalles. Estos objetos coleccionables vienen en una caja telescópica que presenta detalles de aluminio y un revestimiento interior de espuma para proteger aún más el objeto coleccionable durante el transporte.

        ¡Continúa con tu Pop fundido a presión! colección con Marvel's Pop! Hombre de Acero. ¡Llévate a casa el héroe clásico Iron Man, también conocido como Tony Stark, como un Pop fundido a presión! para coronar tu alineación de Marvel.
        
        La figura fundida mide aproximadamente 4 pulgadas de alto. Dimensiones aproximadas de la caja: 4.5“W x 6.25“H x 3.5“D."
        price="$50.00"
        sku="57088"
        availableQuantity={50}
        imageUrl="/product-image.jpg"
      />
    </div>
  );
}

export default App;
