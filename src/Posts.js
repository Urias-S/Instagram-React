import Post from "./Post";

const posts = [
  {
    userImg: 'assets/img/meowed.svg',
    userName: 'meowed',
    imgPost: 'assets/img/gato-telefone.svg',
    likedImg: 'assets/img/respondeai.svg',
    likedUser: 'respondeai',
    likes: 101523,
  },
  {
    userImg: 'assets/img/barked.svg',
    userName: 'barked',
    imgPost: 'assets/img/dog.svg',
    likedImg: 'assets/img/adorable_animals.svg',
    likedUser: 'adorable_animals',
    likes: 99159,
  },
  {
    userImg: 'assets/img/meowed.svg',
    userName: 'meowed',
    imgPost: 'assets/img/gato-telefone.svg',
    likedImg: 'assets/img/respondeai.svg',
    likedUser: 'respondeai',
    likes: 100236,
  }
];

export default function Posts() {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post
          key={index}
          userImg={post.userImg}
          userName={post.userName}
          imgPost={post.imgPost}
          likedImg={post.likedImg}
          likedUser={post.likedUser}
          likes={post.likes}
        />
      ))}
    </div>
  );
}