import { bats } from "../../data/data"
import BatPhoto from "../images/batPhoto"

export default function Members() {
  return (
    <section className="members" style={{border: '1px solid black'}}>
      <h2>Our members</h2>
      <div style={{display: 'flex'}}>
        {bats.map((bat, index) => <BatPhoto key={index} batImage={{id: index, imageToken: bat}}/>)}
      </div>
      <p>Just to name a few!</p>
    </section>
  )
}