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
  const [image, setImage] = React.useState('assets/img/catanacomics.svg');
  const changeUserImage = () => {
    let newImage = prompt('Qual o endereço da nova imagem?');
    if (newImage) {
      setImage(newImage);
    } else {
      return;
    }
  }
  return (
    <div className="usuario">
      <img onClick = {changeUserImage} src={image}/>
      <div className="texto">
        <span>
          <strong>{name}</strong>
          <ion-icon name="pencil" onClick = {changeUsername}></ion-icon>
        </span>
      </div>
    </div>
  );
}