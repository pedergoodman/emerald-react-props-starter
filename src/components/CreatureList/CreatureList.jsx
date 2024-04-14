import CreatureItem from "../CreatureItem/CreatureItem";


function CreatureList({ creatureList }) {
  return (
  <ul>
    {creatureList.map( creature => 
      (<CreatureItem key={creature.id} creature={creature}/>)
    )}
  </ul>
  );
}



export default CreatureList;

