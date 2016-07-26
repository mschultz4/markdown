var Output = React.createClass({
            getInitialState: getInitialState,
            handleChange: handleChange,
            render: render
});

ReactDOM.render(<Output/>, document.getElementById('markdown'));

function render() {           
    return (
        <div>
            <textarea placeholder="write markdown here" rows="25" cols="100" onChange={this.handleChange}></textarea>
            <div id="content" dangerouslySetInnerHTML={this.state.value}></div>
        </div>
    );
}

function getInitialState() {
    return {value: {__html: ""}};
}

function handleChange(e){
    var markdown = {__html: marked(e.target.value)};
    this.setState({value: markdown});
}

