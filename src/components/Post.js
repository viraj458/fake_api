export default function Post({title, body}){

    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <h1 className="w3-opacity">{title}</h1>
            <p>{body}</p>
            {/* <button className="w3-button w3-border w3-red w3-hover-green w3-round" onClick={() => viewPost(id)}><b>Posts</b></button> */}
        </div>
    )

}