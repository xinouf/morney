import clone from "@/lib/clone";

const localStorageKeyName = 'recordList'

const recordStore ={
    recordList: [] as RecordItem[],
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.recordList
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList))//JSON.stringify把object变成字符串}
    },
    createRecord(record: RecordItem){
        const deepClone: RecordItem = clone(record)

        deepClone.createdAt = new Date().toISOString()
        this.recordList?.push(deepClone)//地址不变，所以push进去还是原来的东西，所以得深拷贝赋值给新的参数
        recordStore.saveRecords()
    },
}
recordStore.fetchRecords()
export default recordStore