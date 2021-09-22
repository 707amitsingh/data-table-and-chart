export const transformGridData = (data) => {
    const processedData = []
    const columns = data[0].map( col => col.split(' ').join(''))
    data.forEach((item,index) => {
        if(index > 0) {
            const factoryObject = {}
            columns.forEach((col, i) => {
                factoryObject[col] = item[i]
            })
            processedData.push(factoryObject)
        }
    })
    return processedData;
}