import React, { Component } from 'react'
import { addIceCream, buyIceCream } from '../redux'
import { connect } from 'react-redux';

class IceCreamContainer extends Component {
    state = {  } 

    componentDidMount() {
        console.log('this.props', this.props) ;
    }

    render() { 
        const { numOfIceCream , buyIceCream , addIceCream , info} = this.props;
        return (
            <>
            <h1>IceCream Container</h1>
            <h3>Num of IceCream : {numOfIceCream}</h3>
            {info?.length ? <h4>Status : {info}</h4> : null}
            <button 
            onClick={buyIceCream}
            >Buy IceCream</button>
            <button 
            onClick={addIceCream}
            >Add IceCream</button>
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream,
        info : state.iceCream.info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream()),
        addIceCream: () => dispatch(addIceCream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(IceCreamContainer);