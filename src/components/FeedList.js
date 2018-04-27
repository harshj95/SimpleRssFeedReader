import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import FeedDetail from './FeedDetail';
import axios from 'axios';

var URL_HEAD = 'https://api.rss2json.com/v1/api.json?rss_url=';
var URL_TAIL = 'https://pulse.zerodha.com/feed.php';

var parseString = require('react-native-xml2js').parseString;
var respString;

class FeedList extends Component {
  constructor () {
    super()
    this.state = {
      feedItems: []
    }
  }

  componentDidMount() {
    axios.get(URL_TAIL)
      .then(response =>
        {
          parseString(response.data, function (err, result) {
            console.log(result.rss.channel[0]);
            respString = result.rss.channel[0].item;
          });
          this.setState({ feedItems: respString })
        }
      );
  }

  renderFeed() {
    return this.state.feedItems.map(feedItem =>
      <FeedDetail key={feedItem.link} feedItem={feedItem}/>
    );
  }

  render() {
    //console.log(this.state);
    return (
      <ScrollView>
        {this.renderFeed()}
      </ScrollView>
    );
  }
}

export default FeedList;
