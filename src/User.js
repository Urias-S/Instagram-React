import React from "react";
export default function User() {
  const [name, setUsername] = React.useState('catanacomics')
  const changeUsername = () => {
    let newName = prompt('Qual é o seu nome?');
    if (newName) {
      setUsername(newName);
    } else {
      return;
    }
}
  return (
    <div className="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div className="texto">
        <span>
          <strong>{name}</strong>
          <ion-icon name="pencil" onClick = {changeUsername}></ion-icon>
        </span>
      </div>
    </div>
  );
}