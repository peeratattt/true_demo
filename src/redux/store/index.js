import {configureStore} from '@reduxjs/toolkit'
import reducerRoot from '../slices'

export default configureStore({reducer: reducerRoot})