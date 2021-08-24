const localStorageKeyName = 'recordList'
const recordListModel = {
    clone(data:RecordItem[] | RecordItem){
        return  JSON.parse(JSON.stringify(data))
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];

    },
    save(data:RecordItem[]) {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))//JSON.stringify把object变成字符串}
    }
}


export default recordListModel
/*
export {model}*/
