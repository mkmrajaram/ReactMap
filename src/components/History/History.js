import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {getLocations} from '../../store/actions';
import styles from './History.style';

export default function History(props) {
  const data = useSelector(state => state.locationReducer.locations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, []);

  return (
    <View style={styles.historyContainer}>
      <View style={styles.topCotainer}>
        <Text style={styles.topHeaderText}>Search History</Text>
        <TouchableOpacity onPress={() => props.setShowHistory(false)}>
          <Image
            style={styles.topImageIcon}
            source={require('../../../assets/close.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listContainer}>
        {data.map(item => {
          return (
            <View key={item.id} style={styles.listItem}>
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  props.setActiveItem(item);
                }}>
                <Image
                  style={styles.itemImage}
                  source={require('../../../assets/location.png')}
                />
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
