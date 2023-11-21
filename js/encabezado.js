function arriba(){
    let componentes =
    `
    <h1><b class="uno"> M i x c o</b> <b class="dos">S h o p p</b> 🎄 </h1>
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
    `;

  let hasta_arriba = document.getElementById("encabez");

  hasta_arriba.innerHTML = componentes;

}
arriba()