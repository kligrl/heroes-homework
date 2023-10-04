import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultHeroesArray } from "../Database/Database";
import { IHeroObject } from "../Database/Database.type";

interface IHeroSlice {
    heroesList: IHeroObject[]
}

const initialState: IHeroSlice = {
    heroesList: defaultHeroesArray
}

export const heroSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        addHero: (state, action: PayloadAction<IHeroObject>) => {
            state.heroesList.push(action.payload)
        },
        editHero: (state, action: PayloadAction<IHeroObject>) => {
            // state.heroesList.map(hero => hero.id === action.payload.id ? action.payload: hero)
            state.heroesList.splice(state.heroesList.findIndex((hero) => hero.id === action.payload.id), 1, action.payload)
        },
        deleteHero: (state, action: PayloadAction<IHeroObject>) => {
            // state.heroesList.filter(hero => hero.id !== action.payload.id)
            state.heroesList.splice(state.heroesList.findIndex((hero) => hero.id === action.payload.id), 1)
        }
    }
})
