import { TODO_ADD_TASK, TODO_CHANGESTATE_TASK } from '../mutations'

const state = {
  list: [],
}

// TODO: Добавить возможность смены статуса конкретной задачи
// TODO: Добавить возможность удаления конкретной задачи
const mutations = {
  [TODO_ADD_TASK](state, item) {
    state.list.push(item)
  },
  
  [TODO_CHANGESTATE_TASK](state, item) {
    if (!item.isDone) {
      item.isDone = true;
    } else {
      state.list.splice(state.list.indexOf(item), 1);
    }
  }
}

export default { state, mutations }
