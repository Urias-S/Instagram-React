export default function Suggestion() {
  const sugestoes = [
    {
      userImg: 'assets/img/bad.vibes.memes.svg',
      userName: 'bad.vibes.memes',
      reason: 'Segue você'
    },
    {
      userImg: 'assets/img/chibirdart.svg',
      userName: 'chibirdart',
      reason: 'Segue você'
    },
    {
      userImg: 'assets/img/razoesparaacreditar.svg',
      userName: 'razoesparaacreditar',
      reason: 'Novo no Instagram'
    },
    {
      userImg: 'assets/img/adorable_animals.svg',
      userName: 'adorable_animals',
      reason: 'Segue você'
    },
    {
      userImg: 'assets/img/smallcutecats.svg',
      userName: 'smallcutecats',
      reason: 'Segue você'
    }
  ]

  const suggestionsCompiled = sugestoes.map((user) => {
    return (
      <div className="sugestao" key={user.userName}>
        <div className="usuario">
          <img src={user.userImg} />
          <div className="texto">
            <div className="nome">{user.userName}</div>
            <div className="razao">{user.reason}</div>
          </div>
        </div>
        <div className="seguir">Seguir</div>
      </div>
    )
  });
  return (
    suggestionsCompiled
  );
}