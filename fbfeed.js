<script type="text/babel">
class Card extends React.Component {
	constructor( props ) {
		super( props );
	}
	
	render () {
		return (
			<h1>Hello World!</h1>
		);
	};
}

ReactDOM.render(
	<Card />,
	document.getElementById( "root" )
);
</script>