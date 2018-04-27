import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import FeedDetail from './FeedDetail';
import axios from 'axios';

var URL_HEAD = 'https://api.rss2json.com/v1/api.json?rss_url=';
var URL_TAIL = 'http://pulse.zerodha.com/feed.php';

class FeedList extends Component {
  constructor () {
    super()
    this.state = {
      feedItems: []
    }
  }

  componentDidMount() {
    axios.get(URL_HEAD+URL_TAIL)
      .then(response =>
        {
          this.setState({ feedItems: response.data.items })
          console.log(response.data.items)
        }
      );
  }

  renderFeed() {
    return this.state.feedItems.map(feedItem =>
      <FeedDetail key={feedItem.guid} feedItem={feedItem}/>
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderFeed()}
      </ScrollView>
    );
  }
}

export default FeedList;
