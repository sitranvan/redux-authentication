import React, { Component, useState } from 'react'
import Counter from './components'
// function CounterFeature() {
//     const [count, setCount] = useState(0)

//     const handleIncrease = () => {
//         setCount(prevCount => prevCount + 1)
//     }
//     const handleDecrease = () => {
//         setCount(prevCount => prevCount - 1)
//     }
//     return (
//         <Counter count={count} onIncrease={handleIncrease} onDecrease={handleDecrease} />
//     )
// }

class CounterFeature extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    handleIncrease = () => {
        this.setState(previousValue => ({
            count: previousValue.count + 1,
        }));
    }
    handleDecrease = () => {
        this.setState(previousValue => ({
            count: previousValue.count - 1,
        }));
    }

    render() {
        return <Counter count={this.state.count} onIncrease={this.handleIncrease} onDecrease={this.handleDecrease} />
    }
}


export default CounterFeature

