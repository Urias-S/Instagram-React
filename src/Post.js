import React from "react";

export default function Post({
  userImg,
  userName,
  imgPost,
  likedImg,
  likedUser,
  likes
}) {
  const [pinned, setPinned] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const pinButton = () => {
    setPinned(!pinned);
  };

  const likePostToggle = () => {
    setLiked(!liked);
  };

  const likePostAdd = () => {
    setLiked(true);
  };

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImg} alt={userName} />
          {userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        <img onClick={likePostAdd} src={imgPost} alt="Post content" />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              style={liked ? { color: 'red' } : { color: 'black' }}
              onClick={likePostToggle}
              name={liked ? 'heart' : 'heart-outline'}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={pinButton} name={pinned ? 'bookmark' : 'bookmark-outline'}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={likedImg} alt={likedUser} />
          <div className="texto">
            Curtido por <strong>{likedUser}</strong> e <strong>outras {liked ? likes + 1 : likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}