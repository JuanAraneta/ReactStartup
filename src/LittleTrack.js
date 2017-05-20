export default class LittleAlbum extends React.Component{
	constructor(props){
		super();
		this.state = {
			name: '',
			preview_url: '',
			spotifyUrl: '',
		};
	}

	render(){
		return	(
				<div>
					<li>
						<p>Enjoy 30 seconds of {this.props.name} track.</p>
						<audio controls> 
							<source src={this.props.preview_url} />
						</audio>
						<a href={this.props.spotifyUrl}>See in spotify</a>
					</li>
				</div>
			);
	}
}