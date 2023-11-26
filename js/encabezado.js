function arriba(){
    let componentes =
    `
    <h1><b class="uno"> P r o d u c t o s </b> <b class="dos"> M i x c o</b> 🎄 </h1>
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#" id="contactoEnlace">Contáctanos</a></li>
      </ul>
    </nav>
    `;

  let hasta_arriba = document.getElementById("encabez");

  hasta_arriba.innerHTML = componentes;

}
arriba()