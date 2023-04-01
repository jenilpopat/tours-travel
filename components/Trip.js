import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinatios using google maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Trip in indonesia republic of indonesia, is a country in southeast asia and oceania between the india and pacific oceans. it cosists of over 17000 islands, including sumatra, java, sulawesi, and parts of borneo and New Guinea."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a southeast asian country occupying parts of the malay and the island of bornneo. it's know for its beaches, rainforests and mix of malay, chinese, indian and eropean cultural influences.  "
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France,, in western Europe, encompasses medieval cities, alpine villages and medditerraneam beaches. paris, its capital, is famed for its fashion houses, classicale art musemus including the Louvre and monumennts like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
