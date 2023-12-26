export default function Card(props) {
    // console.log(props)
    return (
        <div className="card">
            <img src={props.imageUrl} alt="value" className="card--image" />
            <div className="card--info">
                <p className="card--location">
                    <img src="../images/pin-icon.png" alt="pin" className="card--pin" /> {props.location.toUpperCase()}
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </p>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}