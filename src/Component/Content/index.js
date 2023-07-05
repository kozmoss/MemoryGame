import React  from 'react'
import {  useSelector } from 'react-redux';
import Card from '../Card'


function Content() {
  const {cards} = useSelector((state) => state.cards)
  
  return (
    <>
      <div className="w-full grid grid-cols-6 gap-2 mx-auto">
        {React.Children.toArray(
          cards.map((framework) => <Card
          framework={framework} 
          />)
        )}
      </div>
    </>
  );
}

export default Content;