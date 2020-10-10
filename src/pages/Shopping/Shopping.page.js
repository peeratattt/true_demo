import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import styles from './Shopping.style'
import {useDispatch, useSelector} from 'react-redux'
import {add, completed, undo, redo} from '../../redux/slices/store.slice'
import { ActionCreators } from 'redux-undo'

const TextList = onPress => (v, k) => {
  return (
    <TouchableOpacity key={k} onPress={() => onPress(k)}>
      <View style={styles.viewTextlist}>
        <CheckBox value={v.status === 'Completed'}/>
        <Text style={styles.textList}>{v.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const BottomBtn = props => {
  return (
    <View style={styles.viewBottomBtn}>
      <Button title="Undo" onPress={props.onUndo}></Button>
      <Button title="Redo" onPress={props.onRedo}></Button>
    </View>
  )
}

const FilterBtn = (props) => {
  const lengthAll = props.data.length
  const lengthActive = props.data.filter(v => v.status === 'Active').length
  const lengthComplete = props.data.filter(v => v.status === 'Completed').length
  return (
    <View style={styles.viewFilterBtn}>
      <Text>Show: </Text>
      <Button onPress={() => props.onPress('All')} title={`All (${lengthAll})`}></Button>
      <Button onPress={() => props.onPress('Active')} title={`Active (${lengthActive})`}></Button>
      <Button onPress={() => props.onPress('Completed')} title={`Completed (${lengthComplete})`}></Button>
    </View>
  )
}

const ShoppingPage = props => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.storeReducer.present.list)
  const [val, setVal] = React.useState('')
  const [status, setStatus] = React.useState('All')
  const onAdd = () => {
    if (val !== '') {
      console.log('onAdd')
      dispatch(add(val))
      setVal('')
    }
  }

  const onCompleted = (key) => {
    console.log('onCompleted: ', key)
    dispatch(completed(key))
  }

  const onUndo = () => {
    // dispatch(undo())
    dispatch(ActionCreators.undo())
  }
  const onRedo = () => {
    // dispatch(redo())
    dispatch(ActionCreators.redo())
  }
  console.log('list: ', list)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Shopping Page</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setVal(text)}
        value={val}
      ></TextInput>
      <Button
        style={styles.btn}
        title="Add Shopping List"
        onPress={onAdd}
      ></Button>
      <FilterBtn onPress={setStatus} data={list}/>
      <View style={styles.containerTextList}>
        {list?.filter(v => status === 'All' ? true : v.status === status).map(TextList(onCompleted))}
      </View>
      <BottomBtn onUndo={onUndo} onRedo={onRedo} />
    </SafeAreaView>
  )
}

export default ShoppingPage;