import PetCard from "./PetCard"
import {FILTER_TYPES} from "../constants";
import {getAgeInMonths} from "../util";
export default function PetList({pets, filterType}){
    return <div className="pet-list">{pets.filter((pet)=> {
        if(filterType == -1){
            return true;
        }
        if(filterType == FILTER_TYPES.before){
            return getAgeInMonths(pet.bornAt) > 1;
        }
        if(filterType == FILTER_TYPES.after){
            return getAgeInMonths(pet.bornAt) <= 1;
        }
    }).map((pet)=><PetCard key={pet.id} name={pet.name} bornAt={pet.bornAt} avatar={pet.avatar}/>)}</div>
}