export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    ADD_MODAL: 'ADD_MODAL',
    ADD_ORDERS: 'ADD_ORDERS',
    ADD_USERS: 'ADD_USERS',
    ADD_CATEGORIES: 'ADD_CATEGORIES',
}
export const VISA_APPLICANT_ACTIONS = {
    CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS: 'CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS',
    CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS: 'CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS',
    CHANGE_VISA_APPLICANTS_VISA_INPUTS: 'CHANGE_VISA_APPLICANTS_VISA_INPUTS',
    CHANGE_VISA_APPLICANTS_HOME_INPUTS: 'CHANGE_VISA_APPLICANTS_HOME_INPUTS',
    CHANGE_VISA_APPLICANTS_BANK_INPUTS: 'CHANGE_VISA_APPLICANTS_BANK_INPUTS',
    CHANGE_VISA_APPLICANTS_MEDICAL_INPUTS: 'CHANGE_VISA_APPLICANTS_MEDICAL_INPUTS',
    CHANGE_VISA_APPLICANTS_CONTACT_INPUTS: 'CHANGE_VISA_APPLICANTS_CONTACT_INPUTS',
}
export const LOAN_APPLICANT_ACTIONS = {
    CHANGE_LOAN_APPLICANTS_LOAN_INPUTS: 'CHANGE_LOAN_APPLICANTS_LOAN_INPUTS',
    CHANGE_LOAN_APPLICANTS_INPUTS: 'CHANGE_LOAN_APPLICANTS_INPUTS',
    CHANGE_LOAN_APPLICANTS_FATHER_INPUTS: 'CHANGE_LOAN_APPLICANTS_FATHER_INPUTS',
    CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS: 'CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS',
    CHANGE_LOAN_APPLICANTS_LAND_INPUTS: 'CHANGE_LOAN_APPLICANTS_LAND_INPUTS',
    CHANGE_LOAN_APPLICANTS_BANK_INPUTS: 'CHANGE_LOAN_APPLICANTS_BANK_INPUTS',
    CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS: 'CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS',
}
export const JOB_APPLICANT_ACTIONS = {
    CHANGE_JOB_APPLICANTS_JOB_INPUTS: 'CHANGE_JOB_APPLICANTS_JOB_INPUTS',
    CHANGE_JOB_APPLICANTS_INPUTS: 'CHANGE_JOB_APPLICANTS_INPUTS',
    CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS: 'CHANGE_JOB_APPLICANTS_PASSPORT_INPUTS',
    CHANGE_JOB_APPLICANTS_CONTACT_INPUTS: 'CHANGE_JOB_APPLICANTS_CONTACT_INPUTS'
}
export const JOBS_ACTIONS = {
    CHANGE_JOBS_CREATE_INPUTS: 'CHANGE_JOBS_CREATE_INPUTS',
}


export const addToCart = (product, cart) => {
    if(product.inStock === 0)
    return ({ type: 'NOTIFY', payload: {error: 'This product is out of stock.'} }) 

    const check = cart.every(item => {
        return item._id !== product._id
    })

    if(!check) return ({ type: 'NOTIFY', payload: {error: 'The product has been added to cart.'} }) 

    return ({ type: 'ADD_CART', payload: [...cart, {...product, quantity: 1}] }) 
}

export const decrease = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id) item.quantity -= 1
    })

    return ({ type: 'ADD_CART', payload: newData })
}

export const increase = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id) item.quantity += 1
    })

    return ({ type: 'ADD_CART', payload: newData })
}


export const deleteItem = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData})
}

export const updateItem = (data, id, post, type) => {
    const newData = data.map(item => (item._id === id ? post : item))
    return ({ type, payload: newData})
}