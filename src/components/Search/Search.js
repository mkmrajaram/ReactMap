import React from 'react';
import {View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './Search.style';
import {addLocation} from '../../store/actions';
import {useDispatch} from 'react-redux';

export default function Search(props) {
  const diapatch = useDispatch();

  const saveLocation = (data, details) => {
    console.log(data, details);

    if (data.description && details.geometry.location) {
      console.log(data.description, details.geometry.location);
      let postData = {
        name: data.description,
        latitude: details.geometry.location.lat,
        longitude: details.geometry.location.lng,
      };
      diapatch(addLocation(postData));
    }
  };

  return (
    <SafeAreaView style={styles.searchBox}>
      <View style={styles.searchBoxArea}>
        <View style={styles.searchBoxContainer}>
          <GooglePlacesAutocomplete
            styles={{
              poweredContainer: {display: 'none'},
              textInput: styles.gpTextInput,
            }}
            fetchDetails={true}
            placeholder="Find Location..."
            onPress={(data, details = null) => saveLocation(data, details)}
            query={{
              key: 'AIzaSyDZc4oEtEHbhk7215Dbe5IPc1B-Kds3-VU',
              language: 'en',
            }}
          />
        </View>
        <View style={styles.searchButtonContainer}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => props.setShowHistory(true)}>
            <Image
              style={styles.searchButtonImage}
              source={require('../../../assets/search-history.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
