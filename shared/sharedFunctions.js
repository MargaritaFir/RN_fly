export function changeFormatDate(data){
    const arrMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'  ]
    const currentData = data.split('-'),
        year = currentData[0],
        month = parseInt(currentData[1]),
        day = parseInt(currentData[2]);

        return `${day} ${arrMonth[month-1]} ${year}`

}