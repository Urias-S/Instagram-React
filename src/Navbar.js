export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <Pesquisa />
        <Icones />
        <Icones_mobile />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div className="separador"></div>
      <img src="assets/img/logo.png" alt="logo" />
    </div>
  );
}

function Pesquisa() {
  return (
    <div className="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
}

function Icones() {
  return (
    <div className="icones">
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}

function Icones_mobile () {
  return (
    <div className="icones-mobile">
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
  );
}