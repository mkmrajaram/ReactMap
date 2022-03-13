import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapComponent from '../../components/Map/MapComponent';
import Search from '../../components/Search/Search';
import History from '../../components/History/History';
import {useDispatch} from 'react-redux';
import {setLocation} from '../../store/actions';

import styles from './HomeScreen.style';

export default function HomeScreen() {
  const [showHistory, setShowHistory] = useState(false);
  const dispatch = useDispatch();
  const setActiveItem = item => {
    setShowHistory(false);
    if (item) {
      dispatch(
        setLocation({
          latitude: parseFloat(item.lat),
          longitude: parseFloat(item.lng),
        }),
      );
    }
  };

  return (
    <View style={styles.homeContainer}>
      {showHistory ? (
        <History
          setShowHistory={setShowHistory}
          setActiveItem={setActiveItem}
        />
      ) : (
        <View style={styles.mapContainer}>
          <MapComponent />
          <Search setShowHistory={setShowHistory} />
        </View>
      )}
    </View>
  );
}
