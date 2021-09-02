type RecordItem = {//类型声明，不需要告诉值
    tags: Tag[]//可以在tags后面加个？：tags？，这样下面的tag就不用声明
    notes: string
    type: string
    amount: number//数据类型
    createdAt?: string//类/构造函数  创建时间
}/*不用声明，下面的可以反推，但最好不要省*/
type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'duplicated' | 'success' // 联合类型  success 表示成功 duplicated 表示标签名重复
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove:(id:string)=>boolean
    save: () => void
}
type RootState = {
    recordList: RecordItem[],
    createRecordError:Error | null,
    createTagError:Error | null,
    tagList: Tag[],
    currentTag?: Tag,
}
interface Window{

}
