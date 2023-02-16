import {useReducer} from 'react';
const WITHDRAWL_PLEASE = "Changing_Withdrawl";
const DEPOSIT_PLEASE = "Changing_Deposit"
const UPDATE_TOTAL_PLEASE = "Changing_Total";

function reducer(state,action){
    if(action.type === WITHDRAWL_PLEASE){
        return{
            ...state,
            withdrawlamount: action.payload
        };
    }
    if(action.type === DEPOSIT_PLEASE){
        return{
            ...state,
            depositamount: action.payload
        };
    }
    if(action.type === UPDATE_TOTAL_PLEASE){
        return{
            ...state,
            totalamount: action.payload
        }
    }
    // else{
    //     return state;
    // }
}


export default function Total(){
    const[state, dispatch] = useReducer(reducer, {
        withdrawlamount: '',
        depositamount: '',
        totalamout: 0
    })
    function onWithdrawl(event){
        dispatch({
            type: WITHDRAWL_PLEASE,
            payload: event.target.value
        })
    }
    function onDeposit(event){
        dispatch({
            type: DEPOSIT_PLEASE,
            payload: event.target.value
        })
    }
    function onTotal(event){
        dispatch({
            type: UPDATE_TOTAL_PLEASE,
            payload: event.target.value
        })
    }
//-----------------------------------------------------------------------------------
    // function onDepositClick(DEPOSIT_PLEASE, UPDATE_TOTAL_PLEASE){
    //     UPDATE_TOTAL_PLEASE = UPDATE_TOTAL_PLEASE+DEPOSIT_PLEASE;
    //     console.log(DEPOSIT_PLEASE)
    // }
    // function onWithdrawlClick(WITHDRAWL_PLEASE, UPDATE_TOTAL_PLEASE){
    //     UPDATE_TOTAL_PLEASE = UPDATE_TOTAL_PLEASE-WITHDRAWL_PLEASE;
    // }
    let theTotal = (
        <div>
            <p>Total</p>
            <p></p>
        </div>
    )
    let Withdrawl = (
        <div>
            <button>Withdrawl</button>
            <input value={state.withdrawlamount} onChange={onWithdrawl}/>
        </div>
    )
    let Deposit = (
        <div>
            <button>Deposit</button>
            <input value={state.depositamount} onChange={onDeposit}/>
        </div>
    )

    return(
        <div>
            {theTotal}
            {Withdrawl}
            {Deposit}
        </div>
    )
}