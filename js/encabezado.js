function arriba(){
    let componentes =
    `
    <h1><b class="uno"> P r o d u c t o s </b> <b class="dos"> M i x c o</b> 🎄 </h1>
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <a href="https://wa.me/50259791443"><img class="wasapp" src="https://raw.githubusercontent.com/AxelAdal/Tienda_Personal/main/img/wasap.png" alt=""></a>
      </ul>
    </nav>
    `;

  let hasta_arriba = document.getElementById("encabez");

  hasta_arriba.innerHTML = componentes;

}
arriba()