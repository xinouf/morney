import clone from "@/lib/clone";

const localStorageKeyName = 'recordList'

const recordListModel = {
    data: [] as RecordItem[],

    create(record:RecordItem){
        // eslint-disable-next-line no-undef
        const deepClone: RecordItem = clone(record)
        deepClone.createdAt = new Date()
        this.data.push(deepClone)//地址不变，所以push进去还是原来的东西，所以得深拷贝赋值给新的参数
    },
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.data
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))//JSON.stringify把object变成字符串}
    }
}


export default recordListModel
/*
export {model}*/
