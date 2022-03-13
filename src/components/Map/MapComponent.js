import React from 'react';
import MapView, {Marker} from 'react-native-maps';

import {useSelector} from 'react-redux';

export default function MapComponent() {
  const {activeLocation} = useSelector(state => state.locationReducer);
  return (
    <MapView style={{flex: 1}} region={activeLocation}>
      <Marker
        coordinate={{
          latitude: activeLocation.latitude,
          longitude: activeLocation.longitude,
        }}
      />
    </MapView>
  );
}
