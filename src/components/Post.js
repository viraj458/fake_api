export default function Post({id, title, body, viewComments}){

    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <h3 className="w3-opacity">{title}</h3>
            <p>{body}</p>
            <button className="w3-button w3-border w3-yellow w3-hover-blue w3-round" onClick={() => {viewComments(id)}}><b>Comments</b></button>
        </div>
    )

}