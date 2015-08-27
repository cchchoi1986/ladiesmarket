var NavBar = React.createClass({
    render: function () {
        return (
            <nav>
                <div className="brand">Ladies Market</div>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>My Cart</li>
                </ul>
            </nav>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <NavBar />
        );
    }
});

React.render( <App />, document.getElementById('content'));