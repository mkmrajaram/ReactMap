import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBox: {
    position: 'absolute',
    top: 30,
    width: '100%',
  },
  searchBoxArea: {width: '100%', paddingHorizontal: 20, flexDirection: 'row'},
  searchBoxContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: '#370691',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButtonContainer: {
    marginLeft: 5,
  },
  googlePlace: {borderRadius: 5, height: 10, backgroundColor: 'red'},
  searchButton: {
    width: 40,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#370691',
    borderRadius: 5,
  },
  gpTextInput: {
    height: 35,
    color: '#370691',
    fontSize: 14,
  },
  searchButtonImage: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
});

export default styles;
