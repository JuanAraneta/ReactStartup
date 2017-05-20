import LittleArtist from 'LittleArtist';

class IndexComponent extends React.Component {
	constructor(){
		super();
		this.state = {
			ArtistList: [],
		};
		this.searchArtists = this.searchArtists.bind(this);
	}


	searchArtists(){
		let queryString = document.getElementById("searchField").value;
		fetch('https://api.spotify.com/v1/search?q=' + queryString + '&type=artist')
		.then((data) => {
			return data.json();
		})
		.then((artist) => {
	        artist.artists.items.forEach((items) => {
	        	this.state.ArtistList.push(items)
	        })
	        this.setState({
	            ArtistList: this.state.ArtistList
	        });
    	})
	}

	render () {
		return (
		  <div>
		  	<h1>Search an Artist</h1>
		  	<input type="search" id="searchField"/>
		  	<button onClick={() => this.searchArtists()}>Search</button>
		  	<ul>
				{this.state.ArtistList.map((Artist, index) => { 
					return (
						<LittleArtist key={index} 
									  name={Artist.name}
									  images={Artist.images.length > 0 ? Artist.images[1].url : 'https://goo.gl/dzuBgt'}
									  artistID={Artist.id}
						>
						</LittleArtist>
					)
				})}
		  	</ul>
		  </div>

		 );
	}
}

ReactDOM.render(<IndexComponent />, document.getElementById('app'));

