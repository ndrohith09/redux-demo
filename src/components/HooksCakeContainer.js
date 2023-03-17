import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function HooksCakeContainer() {
        const numOfCakes = useSelector(state => state.cake.numOfCakes);
        const dispatch = useDispatch();
        return (
            <>
            <h2>Hooks Num of cake - {numOfCakes} </h2>
            <button
            onClick={() => dispatch({type: 'BUY_CAKE'})}
            >Buy Cake</button>
            </>
        );
    }
 
export default HooksCakeContainer;