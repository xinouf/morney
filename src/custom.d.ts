type RecordItem = {//类型声明，不需要告诉值
    tags: string[]//可以在tags后面加个？：tags？，这样下面的tag就不用声明
    notes: string
    type: string
    amount: number//数据类型
    createdAt?: Date//类/构造函数  创建时间
}/*不用声明，下面的可以反推，但最好不要省*/