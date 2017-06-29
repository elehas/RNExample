import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image, url } = props.album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
          <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} title="Buy Now" />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 60,
    width: 60
  },
  thumbnailContainerStyle: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
};

export default AlbumDetail;
