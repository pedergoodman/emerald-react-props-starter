import { useState } from "react";

function CreatureForm({addNewCreature}) {

  const [newCreatureName, setNewCreatureName] = useState('');
  const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

  function handleSubmit() {
    event.preventDefault();

    // POST new creature
    addNewCreature({
      name: newCreatureName,
      origin: newCreatureOrigin
    });

    setNewCreatureName('');
    setNewCreatureOrigin('');

  }


  return (
    // TODO figure out handleSubmit
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        onChange={ (event) => setNewCreatureName(event.target.value) } 
        value={newCreatureName}
        />
      <label>Origin:</label>
      <input 
        onChange={ (event) => setNewCreatureOrigin(event.target.value) } 
        value={newCreatureOrigin}/>
      <button type="submit">Add New Creature</button>
    </form>
  );

}


export default CreatureForm;