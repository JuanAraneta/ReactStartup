import AlbumComponent from 'AlbumComponent';

export default class LittleAlbum extends React.Component{
	constructor(props){
		super();
		this.state = {
			name: '',
			image: '',
		};
		

	}

	render(){
		return	(
				<div>
					<li>
						<p onClick={() => this.refs.child.getAlbumTracks()}>{this.props.name}</p>
						<img src={this.props.images} style={{width: 100, height: 100}}/>
						<AlbumComponent ref='child' name={this.props.name} albumID={this.props.albumID}/>
					</li>
				</div>
			);
	}
}