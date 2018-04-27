import React from 'react';
import { Text, View, Image } from 'react-native';
import FeedCard from './FeedCard';
import HTML from 'react-native-render-html';

const FeedDetail = ({ feedItem }) => {
  const { title, description } = feedItem;
  const { textContainerStyle, headerTextStyle, htmlStyle } = styles;

  return (
    <FeedCard>
      <View style= {textContainerStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <HTML style={htmlStyle} html={description}/>
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
    fontSize: 16,
  },
  htmlStyle: {
    marginTop: 10
  }
}

export default FeedDetail;
