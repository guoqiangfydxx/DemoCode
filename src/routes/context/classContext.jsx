import React from 'react'
const ReactTheme = React.createContext('light')

class ThemedButton extends React.Component {
    state = {}

    // static contextType = ReactTheme

    handleClick = (value) => {
        console.log('theme>>>', value)
    }

    render() {
        return (
            <ReactTheme.Consumer>
                {value => (
                    <button onClick={this.handleClick.bind(this, value)}>click me</button>
                )}
            </ReactTheme.Consumer>
        )
    }
}

class Toolbar extends React.Component {
    state = {}

    render() {
        return (
            <ThemedButton />
        )
    }
}

class TestClassContext extends React.Component {
    state = {

    }

    render() {
        return (
        <ReactTheme.Provider value='dark'>
            <Toolbar />
        </ReactTheme.Provider>
        )
    }
}

export default TestClassContext