import { data } from "../data";

function MakeCards(props) {
  return (
    <div className="travelCard">
      <img src={props.image} alt="travel destination" />
      <section>
        <h3>{props.location}</h3>
        <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
          View on Google Maps
        </a>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </section>
    </div>
  );
}

const dataMap = data.map((props) => {
  return (
    <MakeCards
      title={props.title}
      location={props.location}
      googleMapsUrl={props.googleMapsUrl}
      startDate={props.startDate}
      endDate={props.endDate}
      description={props.description}
      image={props.imageUrl}
    />
  );
});

export const Cards = () => <>{dataMap}</>;
