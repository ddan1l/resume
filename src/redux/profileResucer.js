import {GET_DATA} from "./types"

const initialState = {
    processing: false,
    profileData: {
        basics: {
            name: "",
            surName: "",
            label: "",
            location: "",
            web: "",
            picture: "",
            email: "",
            phone: "",
            links: {
                instagram: "",
                facebook: "",
                twitter: ""
            }
        },
        education: "",
        about: {
            intro: ""
        },
        skills: {
            basic: [
                {
                    title: "",
                    description:  ""
                },
                {
                    title: "",
                    description:  ""
                },
                {
                    title: "",
                    description:  ""
                },
                {
                    title: "",
                    description:  ""
                },
            ],
        },
    }
}

export const profileReducer =  (state = initialState, action) => {
    switch (action.type){
        case GET_DATA:
            return {
                ...state, profileData: action.payload
            }
        default: return state
    }


}