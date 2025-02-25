import React from "react";
export default function Post() {
  const posts = [
    {
      userImg: 'assets/img/meowed.svg',
      userName: 'meowed',
      imgPost: 'assets/img/gato-telefone.svg',
      likedImg: 'assets/img/respondeai.svg',
      likedUser: 'respondeai',
      likes: 101.523,
    },
    {
      userImg: 'assets/img/barked.svg',
      userName: 'barked',
      imgPost: 'assets/img/dog.svg',
      likedImg: 'assets/img/adorable_animals.svg',
      likedUser: 'adorable_animals',
      likes: 99.159,
    },
    {
      userImg: 'assets/img/meowed.svg',
      userName: 'meowed',
      imgPost: 'assets/img/gato-telefone.svg',
      likedImg: 'assets/img/respondeai.svg',
      likedUser: 'respondeai',
      likes: 100.236,
    }
  ];

  const [pinned, setPinned] = React.useState(posts.map(() => false));

  const pinButton = (index) => {
    const pinnedCompiled = pinned.slice();
    pinnedCompiled[index] = !pinnedCompiled[index];
    setPinned(pinnedCompiled);
  }


  const compiledPosts = posts.map((post, index) => {
    return (
      <div className="post" key={index}>
        <div className="topo">
          <div className="usuario">
            <img src={post.userImg} />
            {post.userName}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div className="conteudo">
          <img src={post.imgPost} />
        </div>
        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick = {() => pinButton(index)} name={pinned[index] ? 'bookmark' : 'bookmark-outline'}></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={post.likedImg} />
            <div className="texto">
              Curtido por <strong>{post.likedUser}</strong> e <strong>outras {post.likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>)
  });
  return compiledPosts;
}