import { createSlice } from "@reduxjs/toolkit";
import { duplicatedFrameworks,shuffle } from "../../data/data";

export const CardSlice = createSlice({
    name:'cards',
    initialState:{
        cards:shuffle(duplicatedFrameworks),
        activeCards:[],
        point:200,
        status:"",
        total:{
            opened:0,
            closed:30,
            all:30,
        }
    },
    reducers:{
        openCard: (state, action) => {
            const findCard = state.cards.find((card) => card.id === action.payload);
            findCard.status = true;
            state.activeCards = [...state.activeCards, findCard];
            state.status = "selected";
          },
          closeCard: (state) => {
            state.activeCards.map(
              (item) =>
                (state.cards.find((framework) => framework.id === item.id).status = false)
            );
            state.status = "";
            state.activeCards = [];
          },
          correctMatch: (state) => {
            state.point = state.point + 50;
            state.activeCards = [];
            state.status = "success";
            state.total = {
              opened: (state.total.opened += 2),
              closed: (state.total.closed -= 2),
              all: 30,
            };
          },
          failMatch: (state) => {
            state.point = state.point - 10;
            state.activeCards = [];
            state.status = "failed";
          },
          resetGame: (state) => {
            state.cards = shuffle(duplicatedFrameworks);
            state.activeCards = [];
            state.point = 200;
            state.status = "";
            state.total = {
              opened: 0,
              closed: 30,
              all: 30,
            };
          },
    }
})

export const {resetGame,closeCard,failMatch,openCard,correctMatch} = CardSlice.actions;
export default CardSlice.reducer