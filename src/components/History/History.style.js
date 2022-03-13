import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  historyContainer: {
    flex: 1,
    backgroundColor: '#370691',
    flexDirection: 'column',
  },
  topCotainer: {
    backgroundColor: Platform.OS === 'ios' ? '#370691' : '#4c04d1',
    padding: 10,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topImageIcon: {tintColor: 'white'},
  listContainer: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  listItem: {
    backgroundColor: '#fdfcff',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  itemImage: {
    tintColor: '#370691',
  },
  itemText: {
    color: '#000000',
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
