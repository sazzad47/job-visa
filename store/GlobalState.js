import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'
import { getData } from '../utils/fetchData'
import { initialState } from './initialState';


export const DataContext = createContext()


export const DataProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducers, initialState)
    const { cart, auth } = state

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if(firstLogin){
            getData('auth/accessToken').then(res => {
                if(res.err) return localStorage.removeItem("firstLogin")
                dispatch({ 
                    type: "AUTH",
                    payload: {
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }

        
    },[])

   

    useEffect(() => {
        if(auth.token){
            getData('userData/visa', auth.token)
            .then(res => {
                if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                
                dispatch({type: 'ADD_VISA_APPLICATIONS', payload: res.applications})
            })
            getData('userData/job', auth.token)
            .then(res => {
                if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                
                dispatch({type: 'ADD_JOB_APPLICATIONS', payload: res.applications})
            })
            getData('userData/loan', auth.token)
            .then(res => {
                if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                
                dispatch({type: 'ADD_LOAN_APPLICATIONS', payload: res.applications})
            })
            getData('userData/payment', auth.token)
            .then(res => {
                if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
                
                dispatch({type: 'ADD_PAYMENT', payload: res.payments})
            })

         
        }else{
            dispatch({type: 'ADD_VISA_APPLICATIONS', payload: []})
            dispatch({type: 'ADD_JOB_APPLICATIONS', payload: []})
            dispatch({type: 'ADD_LOAN_APPLICATIONS', payload: []})
            dispatch({type: 'ADD_PAYMENT', payload: []})
        }
    },[auth.token])

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}