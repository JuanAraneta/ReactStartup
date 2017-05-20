import LittleAlbum from 'LittleAlbum';

export default class ArtistComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			artistID: '',
			albumsList: [],
		};

	}

	getArtistAlbums(){
		fetch("https://api.spotify.com/v1/artists/" + this.props.artistID + "/albums")
		.then((data) => {
			return data.json();
		}).then((album) => {
			this.setState({
				albumsList: []
			});
			album.items.forEach((items) => {
	        	items.available_markets.forEach((market) =>{
	        		market=='US'?this.state.albumsList.push(items):null
	        	})
	        })
	 
			this.setState({
				albumsList: this.state.albumsList 
			});
			console.log(this.state.albumsList)
		})
	}	

	render(){
		return (
			<div>
			  	<h2>{this.state.albumsList.length>0?<div>Albums of {this.props.name}</div>:null}</h2>
				<ul>
					{this.state.albumsList.map((Album, index) => { 
						return (
							<LittleAlbum  key={index} 
										  name={Album.name}
										  images={Album.images.length > 0 ? Album.images[1].url : 'https://goo.gl/dzuBgt'}
										  albumID={Album.id}
							>
							</LittleAlbum>
						)
					})}
			  	</ul>
		    </div>
		)
	}
}