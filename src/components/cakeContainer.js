import React, { Component } from 'react'
import { buyCake, addCake } from '../redux'
import { connect } from 'react-redux'
class CakeContainer extends Component {
    state = {  } 

    componentDidMount() {
        console.log('this.props', this.props) ;
        // console.log('this.props', this.props.numOfCakes.length) ;
    }

    render() { 
        const { numOfCakes , buyCake , addCake , info} = this.props;
        return (
            <>
            <h1>Cake Container</h1>
            <h3>Num of cakes : {numOfCakes}</h3>
            {info?.length ? <h4>Status : {info}</h4> : null}
            <button 
            onClick={buyCake}
            >Buy Cake</button>
            <button 
            onClick={addCake}
            >Add Cake</button>
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
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer);