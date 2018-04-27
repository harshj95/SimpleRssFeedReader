import React from 'react';
import { Text, View, Image } from 'react-native';
import FeedCard from './FeedCard';

const FeedDetail = ({ feedItem }) => {
  const { title, description, thumbnail } = feedItem;
  const { textContainerStyle, imageStyle, imageContainerStyle, headerTextStyle } = styles;

  return (
    <FeedCard>
      <View style={imageContainerStyle}>
        <Image style={imageStyle} source={{ uri: thumbnail }}/>
      </View>
      <View style= {textContainerStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </FeedCard>
  );
};

const styles = {
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 16
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 10
  }
}

export default FeedDetail;
