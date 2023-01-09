import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'anncherian',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is DOPE!',

    },
    {
        id: '123',
        username: 'anncherian',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is DOPE!',

    },
];

function Posts(){
    return (
        <div>
        {posts.map((post) => (
            <Post 
                key={post.id} 
                id={post.id} 
                username={post.username} 
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
            <Post />
            <Post />
            <Post />
            <Post />
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    );
}

export default Posts