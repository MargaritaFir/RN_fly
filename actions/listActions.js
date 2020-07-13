
export const GET_LIST ='GET_LIST';
export const GET_DATE_LIST ='GET_DATE_LIST'


export const getList = () => {
    console.log('action_get_List');
    return {
        type: GET_LIST,
        
    }
}

export const getDateList = (date) => {
    console.log('action_get_List')
    console.log(date);
    return {
        type: GET_DATE_LIST,
        date        
    }
}




