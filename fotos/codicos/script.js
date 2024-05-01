function substituirConteudo() {
  var novoConteudo = `
    <style>
      body {
        background-image: url('fundo.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }
    </style>
    <header>
      <h1 style="color: cinza">Vivendo em HD: Explorando o Agora</h1>
    </header>
    <main>
      <section>
        <h2>Bem-vindo ao nosso site!</h2>
        <p>Aqui você encontrará nossos melhores produtos e serviços.</p>
        <img src="midia.jpg" alt="Mídia">
      </section>
      <section>
        <h3>Nossos produtos</h3>
        <ul>
          <li><a href="#">Produto 1</a></li>
          <li><a href="#">Produto 2</a></li>
          <li><a href="#">Produto 3</a></li>
        </ul>
      </section>
    </main>
    <footer>
      <p>Copyright © 2024 Meu Site. Todos os direitos reservados.</p>
    </footer>
  `;

  document.body.innerHTML = novoConteudo;
}