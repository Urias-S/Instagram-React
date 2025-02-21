export default function Story() {
  const stories = [
    {
      usuario: '9gag',
      imagem: 'assets/img/9gag.svg',
      alt: '9gag'
    },
    {
      usuario: 'meowed',
      imagem: 'assets/img/meowed.svg',
      alt: 'meowed'
    },
    {
      usuario: 'barked',
      imagem: 'assets/img/barked.svg',
      alt: 'barked'
    },
    {
      usuario: 'nathanwpylestrangeplanet',
      imagem: 'assets/img/nathanwpylestrangeplanet.svg',
      alt: 'nathanwpylestrangeplanet'
    },
    {
      usuario: 'wawawicomics',
      imagem: 'assets/img/wawawicomics.svg',
      alt: 'wawawicomics'
    },
    {
      usuario: 'respondeai',
      imagem: 'assets/img/respondeai.svg',
      alt: 'respondeai'
    },
    {
      usuario: 'filomoderna',
      imagem: 'assets/img/filomoderna.svg',
      alt: 'filomoderna'
    },
    {
      usuario: 'memeriagourmet',
      imagem: 'assets/img/memeriagourmet.svg',
      alt: 'memeriagourmet'
    }
  ];
  const compiledStories = stories.map((story) => {
   return (
        <div className="story" key= {story.usuario}>
          <div className="imagem">
            <img src={story.imagem} alt={story.alt} />
          </div>
          <div className="usuario">
            {story.usuario}
          </div>
        </div>)
  })
  return (
    compiledStories
  )
}