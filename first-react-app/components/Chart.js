var myLayout = new GoldenLayout({
    content: [{
        type: 'row',
        content:[{
            type:'react-component',
            component: 'test-component',
            props: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type:'react-component',
                component: 'test-component',
                props: { label: 'B' }
            },{
                type:'react-component',
                component: 'test-component',
                props: { label: 'C' }
            }]
        }]
    }]
});
//Open the element with 'someId' in a new window
myLayout.root.getItemsById( 'someId' )[ 0 ].popout();

//Add another component to the layout
myLayout.root.contentItems[ 0 ].addChild({
    type:'react-component',
    component: 'testComponent',
    props: { label: 'X' }
});
var TestComponent = React.createClass({
    render: function() {
        return (<h1>{this.props.label}</h1>)
    }
});

myLayout.registerComponent( 'testComponent', TestComponent );

//Once all components are registered, call
myLayout.init();