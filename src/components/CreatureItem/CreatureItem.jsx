import { useState } from "react";

function CreatureItem({ creature }) {

  const [showStar, setShowStar] = useState(false)


  const handleStar = () => {
    console.log('clicked!');

    setShowStar(!showStar)
  }

  let emoji = ''
  if (showStar) {
    emoji = '⭐️';
  } else if (creature.origin === 'USA') {
    emoji = '🇺🇸';
  } else {
    emoji = '💔';
  }



  console.log(creature.name, showStar);
  return (
    <li
      className={creature.origin === "scotland" && "green"}
    >
      {creature.name} is from {creature.origin}
    <button
      onClick={handleStar}
    >STAR!</button>
    {emoji}
    {/* {showStar ? '⭐️' : '💔'} */}

    </li>
  );
};

export default CreatureItem;




// other options for className
//turnery operator
// className={creature.origin === "scotland" ? "green" : "purple"}

