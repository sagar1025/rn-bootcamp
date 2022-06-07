import { StyleSheet, Pressable, View, Image, Text } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {

  const [image, setImage] = useState('');
  const [hasimage, setHasImage] = useState(false);

  async function fetchImage(){
    let response = await fetch('https://foodish-api.herokuapp.com/api/');
    response = await response.json();
    setImage(response.image);
    setHasImage(!hasimage)
  };

  useEffect(() => {
    !hasimage && fetchImage();
  });

  return (
    <View style={styles.container}>
      {
        hasimage ?
        <View>
            <Image
              style={styles.img}
              source={{uri: image}}
            />
            <Pressable onPress={fetchImage} style={styles.btn}>
              <Text style={{color: 'white',}}>New Image</Text>
            </Pressable>
          </View>
          :
          <Pressable onPress={fetchImage} style={styles.btn}>
            <Text style={{color: 'white',}}>New Image</Text>
          </Pressable>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  btn: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
  }
});
