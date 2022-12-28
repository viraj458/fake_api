export default function User({id, username, name, email, website, viewPost}){

    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <img src={`https://via.placeholder.com/200?text=${username}`} alt={username}/>
            <h1 className="w3-opacity">{name}</h1>
            <p>{email}</p>
            <p>{website}</p>
            <button className="w3-button w3-border w3-red w3-hover-green w3-round" onClick={() => viewPost(id)}><b>Posts</b></button>
        </div>
    )

}