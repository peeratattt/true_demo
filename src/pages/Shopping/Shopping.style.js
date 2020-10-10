import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    alignItems: 'stretch'
  },
  textTitle: {
    alignSelf: 'center',
    fontSize: 20
  },
  textInput: {
    alignSelf: 'center',
    padding: 8,
    width: 200,
    marginVertical: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
  btn: {
    marginBottom: 16
  },
  containerTextList: {
    marginLeft: 24,
  },
  viewTextlist: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textList: {
    marginLeft: 16,
    fontSize: 20,
  },
  viewBottomBtn: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  viewFilterBtn: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }
})