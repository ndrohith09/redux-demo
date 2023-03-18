import React, { Component } from 'react'
import { buyCake, addCake } from '../redux'
import { connect } from 'react-redux'

class NewCakeContainer extends Component {
    state = {  
        number : 1
    }

    render() { 

        const { numOfCakes , buyCake , info} = this.props;
 
        return (
            <>
            <h1>Cake Container</h1>
            <h3>Num of cakes : {numOfCakes}</h3>
            {info?.length ? 
            <h4>Status : {info}</h4> : 
            null }
            <input type='number' value={this.state.number}             
            onChange={
                (e) => this.setState({number : e.target.value})
            } />            
            <button 
            onClick={ 
                () => buyCake(this.state.number)
            }
            >Buy {this.state.number} Cake</button>
            {/* <button 
            onClick={addCake}
            >Add Cake</button> */}
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
        info : state.cake.info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number)),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(NewCakeContainer);