import { useContext} from 'react';
import {Context} from "../consts";

function useAppContext (){
    return useContext(Context)
}

export default useAppContext