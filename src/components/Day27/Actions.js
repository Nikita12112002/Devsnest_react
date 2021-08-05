import { adding_item , deleting_item} from "./ActionsType";

const day27_addItem=(item)=>
{
    return{

        type: adding_item,
        payload:item,
        
    };
};

const day27_delItem=(id)=>
{
    return{

        type:deleting_item,
        payload:id,
    }
};

export {day27_addItem , day27_delItem};