import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone";
import createId from "@/lib/createId";
import router from "@/router";

Vue.use(Vuex)//把store绑到Vue.prototype上
type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag,
}

const store = new Vuex.Store({
    state: {
        recordList: [],
        tagList: [],
        currentTag: undefined
    } as RootState,
    mutations: {
        fetchRecords(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
            return this.recordList
        },
        createRecord(state, record) {
            const deepClone: RecordItem = clone(record)
            deepClone.createdAt = new Date()
            state.recordList.push(deepClone)//地址不变，所以push进去还是原来的东西，所以得深拷贝赋值给新的参数
            store.commit('saveRecords')
            /*  recordStore.saveRecords()*/
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList))//JSON.stringify把object变成字符串}
        },
        fetchTags(state) {
            return state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]')
        },
        createTag(state, name: string) {
            //this.data = [{id:'1', name:'1'},{id:'2', name:'2'}]
            const names = state.tagList.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                window.alert('标签重复')
            }

            const id = createId.toString()
            state.tagList.push({id, name: name})
            store.commit('saveTags')
            window.alert('添加成功')
        },
        saveTags(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList))//JSON.stringify把object变成字符串}
        },
        setCurrentTag(state, id: string) {
            state.currentTag = state.tagList.filter(t => t.id === id)[0]
        },
        updateTag(state, payload: {id:string, name:string}) {
            const {id, name} = payload
            const idList = state.tagList.map(item => item.id)
            if (idList.indexOf(id) >= 0) {
                const names = state.tagList.map(item => item.name)
                if (names.indexOf(name) >= 0) {
                    window.alert('标签名重复了')
                } else {
                    const tag = state.tagList.filter(item => item.id === id)[0]
                    tag.name = name
                    store.commit('saveTags')
                }
            }
        },
        removeTag(state, id: string) {
            let index = -1
            for (let i = 0; i < state.tagList.length; i++) {
                if(state.tagList[i].id === id){
                    index = i
                    break;
                }
            }
            if(index>=0){
                state.tagList.splice(index,1)
                store.commit('saveRecords')
                router.back()
            }else {
                window.alert('删除失败')
            }
        },
    }
})
store.commit('increment', 10)
export default store
