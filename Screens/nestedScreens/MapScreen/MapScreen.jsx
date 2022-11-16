import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";

import MapView, {Marker} from "react-native-maps";

const initialState = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

const zoomMap = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const MapScreen = ({route}) => {

 const [coords, setCoords] = useState(initialState);
 const [title, setTitle] = useState('');

  useEffect(() => {
    if (route.params) {
        const {latitude, longitude} = route.params.location.coords
        setTitle(route.params.name);
        setCoords({latitude, longitude});
    }
  }, [route.params]);



  return (
    <View style={styles.container}>
      <MapView initialRegion={{...coords, ...zoomMap}} style={styles.map}>
      
      <Marker coordinate={coords}
      title={title? title:'Photo was maked here'}
      />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
