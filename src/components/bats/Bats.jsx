import { bats } from "../../data/data"
import BatPhoto from "../images/batPhoto"

export default function Bats() {
  return (
    <section style={{border: '1px solid black'}}>
      <h2>Some of our members</h2>
      <div style={{display: 'flex'}}>
        {bats.map((bat, index) => <BatPhoto key={index} batImage={{id: index, imageToken: bat}}/>)}
      </div>
      <p>Just to name a few!</p>
    </section>
  )
}