import storeSlice from './store.slice'
import undoable from 'redux-undo'

export default {
  storeReducer: undoable(storeSlice)
}