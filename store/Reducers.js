import { ACTIONS } from './Actions'
import { VISA_APPLICANT_ACTIONS } from './Actions';
import { LOAN_APPLICANT_ACTIONS } from './Actions';


const reducers = (state, action) => {
    switch(action.type){
        case VISA_APPLICANT_ACTIONS.CHANGE_VISA_APPLICANTS_PERSONAL_INPUTS: 
            return {
                ...state,
                visaApplicant: {
                    ...state.visaApplicant,
                    personalInfo: {
                        ...state.visaApplicant.personalInfo,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case VISA_APPLICANT_ACTIONS.CHANGE_VISA_APPLICANTS_PASSPORT_INPUTS: 
            return {
                ...state,
                visaApplicant: {
                    ...state.visaApplicant,
                    passportInfo: {
                        ...state.visaApplicant.passportInfo,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case VISA_APPLICANT_ACTIONS.CHANGE_VISA_APPLICANTS_VISA_INPUTS: 
            return {
                ...state,
                visaApplicant: {
                    ...state.visaApplicant,
                    visaProcessingInfo: {
                        ...state.visaApplicant.visaProcessingInfo,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case VISA_APPLICANT_ACTIONS.CHANGE_VISA_APPLICANTS_HOME_INPUTS: 
            return {
                ...state,
                visaApplicant: {
                    ...state.visaApplicant,
                    home: {
                        ...state.visaApplicant.home,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case VISA_APPLICANT_ACTIONS.CHANGE_VISA_APPLICANTS_BANK_INPUTS: 
            return {
                ...state,
                visaApplicant: {
                    ...state.visaApplicant,
                    bank: {
                        ...state.visaApplicant.bank,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case VISA_APPLICANT_ACTIONS.CHANGE_VISA_APPLICANTS_MEDICAL_INPUTS: 
            return {
                ...state,
                visaApplicant: {
                    ...state.visaApplicant,
                    medical: {
                        ...state.visaApplicant.medical,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case VISA_APPLICANT_ACTIONS.CHANGE_VISA_APPLICANTS_CONTACT_INPUTS: 
            return {
                ...state,
                visaApplicant: {
                    ...state.visaApplicant,
                    contact: {
                        ...state.visaApplicant.contact,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case LOAN_APPLICANT_ACTIONS.CHANGE_LOAN_APPLICANTS_LOAN_INPUTS: 
            return {
                ...state,
                loanApplicant: {
                    ...state.loanApplicant,
                    loanInfo: {
                        ...state.loanApplicant.loanInfo,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case LOAN_APPLICANT_ACTIONS.CHANGE_LOAN_APPLICANTS_INPUTS: 
            return {
                ...state,
                loanApplicant: {
                    ...state.loanApplicant,
                    appliantInfo: {
                        ...state.loanApplicant.appliantInfo,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case LOAN_APPLICANT_ACTIONS.CHANGE_LOAN_APPLICANTS_FATHER_INPUTS: 
            return {
                ...state,
                loanApplicant: {
                    ...state.loanApplicant,
                    fatherInfo: {
                        ...state.loanApplicant.fatherInfo,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case LOAN_APPLICANT_ACTIONS.CHANGE_LOAN_APPLICANTS_MOTHER_INPUTS: 
            return {
                ...state,
                loanApplicant: {
                    ...state.loanApplicant,
                    motherInfo: {
                        ...state.loanApplicant.motherInfo,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case LOAN_APPLICANT_ACTIONS.CHANGE_LOAN_APPLICANTS_LAND_INPUTS: 
            return {
                ...state,
                loanApplicant: {
                    ...state.loanApplicant,
                    landDocument: {
                        ...state.loanApplicant.landDocument,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case LOAN_APPLICANT_ACTIONS.CHANGE_LOAN_APPLICANTS_BANK_INPUTS: 
            return {
                ...state,
                loanApplicant: {
                    ...state.loanApplicant,
                    bankDetails: {
                        ...state.loanApplicant.bankDetails,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case LOAN_APPLICANT_ACTIONS.CHANGE_LOAN_APPLICANTS_COMMUNICATION_INPUTS: 
            return {
                ...state,
                loanApplicant: {
                    ...state.loanApplicant,
                    communication: {
                        ...state.loanApplicant.communication,
                        [action.payload.name]: action.payload.value
                    }
                }
             };
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload
            };
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: action.payload
            };
        case ACTIONS.ADD_CART:
            return {
                ...state,
                cart: action.payload
            };
        case ACTIONS.ADD_MODAL:
            return {
                ...state,
                modal: action.payload
            };
        case ACTIONS.ADD_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case ACTIONS.ADD_USERS:
            return {
                ...state,
                users: action.payload
            };
        case ACTIONS.ADD_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
}

export default reducers