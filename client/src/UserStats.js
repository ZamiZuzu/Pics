function UserStats({user}){
    return(
    <>
     <h1>Statistics</h1>
     <ul>
        <li>Total Favorites: {user.favorites.length}</li>
        <li>Total Likes: {user.likes.length}</li>
        <li>Total Dislikes: {user.dislikes.length}</li>
        <li>Total Reactions: {user.reactions.length}</li>
        <li>Total Uploads: {user.images.length}</li>
        <li>Total Like Points: {user.likes_gained.length}</li>
        <li>Total Dislike Points: {user.dislikes_gained.length}</li>
        <li>Total Favorite Points: {user.favorites_gained.length}</li>
        <li>Total Reaction Points: {user.reactions_gained.length}</li>
     </ul>
    </>
    )
}

export default UserStats;