export default function Comment({name, email, body}){

    return(
        <div className="w3-row w3-padding w3-card w3-center w3-margin-bottom w3-round-large">
            <h3 className="w3-opacity">{name}</h3>
            <p>{body}</p>
            <div>{email}</div>
            {/* <button className="w3-button w3-border w3-yellow w3-hover-blue w3-round" onClick={() => {viewComments(id)}}><b>Comments</b></button> */}
        </div>
    )

}