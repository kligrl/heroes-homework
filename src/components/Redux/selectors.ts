import { IHeroObject } from "../Database/Database.type";
import { RootState } from "./store";

export const selectHeroes = (state: RootState): IHeroObject[] => state.heroes.heroesList
