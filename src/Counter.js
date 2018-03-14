import React, { Component } from 'react'
import {connect} from 'react-redux'




class Counter extends Component {


    render() {
        return (
            <div>
                <h1>
                    Counter value: {this.props.ctr}
                </h1>
                <button onClick={this.props.onIncremenet} >increment</button>
                <button onClick={this.props.onDecremenent}>decrement</button>
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map( result => (
                            <li key={result.id} onClick={()=> this.props.onDeleteResult(result.id)}>
                                {result.value}
                            </li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>  {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncremenet: () => dispatch({type: 'INCREMENT'}),
        onDecremenent: () => dispatch({type: 'DECREMENT'}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
