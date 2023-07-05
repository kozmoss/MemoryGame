import React,{ useState,useEffect }  from 'react'
import questionİmage from "../../assets/question2.png"
import { useDispatch, useSelector } from 'react-redux';
import {closeCard,failMatch,openCard,correctMatch} from '../../redux/CardSlice'
  const Card = ({framework}) => {
    const [open,setOpen] = useState(false);
    const {activeCards,cards,total} = useSelector((state) => state.cards)
    const dispatch = useDispatch();
    const toggleHandle = () => {
      total.closed > 0 && setOpen(true)}
   
  useEffect(() => {
    open && dispatch(openCard(framework.id));
  }, [dispatch, open, framework.id]);

  useEffect(() => {
    if(activeCards.length === 2){
      if(activeCards[0].name === activeCards[1].name){
        framework.id === activeCards[0].id && dispatch(correctMatch());
        setOpen(false)
      } else {
        setTimeout(() => {
          activeCards.map((item) => dispatch(closeCard(item.id)));
          framework.id === activeCards[0].id && dispatch(failMatch())
        },700);
        setOpen(false)
      }
    }
  },[activeCards,activeCards.length,cards,dispatch,framework.id])
  
  return (
    <div
      className="w-[120px] h-[150px] flex items-center justify-center  rounded"
      onClick={toggleHandle}
    >
      <div className="group w-full h-full">
        <div
          className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
            framework.status &&
            "[transform:rotateY(180deg)] [backface-visibility:hidden]"
          }`}
        >
          <div className="absolute inset-0 rounded flex items-center justify-center bg-slate-200">
            <img
              src={questionİmage}
              alt="pokemon"
              className="w-[50px] h-[80px] object-cover"
            />
          </div>
          <div className="w-[120px] h-[150px] absolute inset-0 text-purple-700 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded bg-slate-200 flex items-center justify-center">
            <div className=" w-full h-[150px] flex flex-col items-center justify-center">
              <img
                src={
                  "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
                  framework.name +
                  ".png"
                }
                alt={framework.name}
                className="w-[100px] h-[100px] object-fill"
              />
              <span className="uppercase text-xs py-2 tracking-widest text-purple-700">
                {framework.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card