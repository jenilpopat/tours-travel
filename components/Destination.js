import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popilar Destination</h1>
      <p>Tours give you the opportunity to see a lot a time fram. </p>

      <DestinationData
        className="first-des"
        hadding="Taal Volcano, Batangas "
        text="One of the most iconic views in luzon, Mt Taal boast a volcano
      inside a lake inside an isand. if you fancy a closer look,the hike
      up to the crater is a mere 45 minutes, and is esay enough for
      beginners. Guides will assist you most of the way, and you'll see
      the peculiar enviroment found on an active volano including volano
      ic rocks and stream vents. the hike can be dusty and hot so plan for
      an early morning trip,and then inwind with some bulalo before
      heading back home!"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        hadding="Mt. Daguldul, Batangas "
        text="if you're looking for a hike that a littel more challenging but still good for a beginner mountaineer, check out mt. Daguldul in san juan, batangas. you'll start your hike from the beach and pass through tropical forest diffrent rock formation and small streams. there a small store halfway up the trail were you can take a break and drink buko juice.and through the summer itself mau not have the best view the breeze is fantastic. once you've made it back down head straight to the beach for a referashing well-deserved swim. "
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
