import { adding_item , deleting_item ,delete_all} from "./ActionsType";

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

const day27_deleteALL=()=>
{
    return{

        type:delete_all,

    }
}
export {day27_addItem , day27_delItem , day27_deleteALL};