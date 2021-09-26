import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

import unsplash from './utils/api';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = { photos: [] };
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    }).catch(err => console.log(err));

    this.setState({ photos: response.data.results});
  }

  render(){
    return(
      <div className="ui container mt-2" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList photos={this.state.photos}/>
      </div>
    );
  }
}

export default App;
