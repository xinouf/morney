const localStorageKeyName = 'tagList'
type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'duplicated' | 'success' // 联合类型  success 表示成功 duplicated 表示标签名重复
    save: () => void
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data
    },
    create(name) {
        //this.data = [{id:'1', name:'1'},{id:'2', name:'2'}]
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            return 'duplicated'
        }
        this.data.push({id:name, name:name})
        this.save()
        return 'success'
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))//JSON.stringify把object变成字符串}
    }
}


export default tagListModel
/*
export {model}*/
