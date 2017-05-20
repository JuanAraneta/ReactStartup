import ArtistComponent from 'ArtistComponent';

export default class LittleArtist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			images: '',
		};
		console.log(this.props.images)
	}

	render(){
		return (
			<div>
				<li> 
					<p onClick={() =>this.refs.child.getArtistAlbums()}>{this.props.name}</p>
					<img src={this.props.images} style={{width: 150, height: 150}}/>
					<ArtistComponent ref='child' name={this.props.name} artistID={this.props.artistID}/>
				</li>
			</div>
		);
	}
}
