import React, { Component, useEffect } from "react";
import {
  buyCake,
  addCake,
  fetchUsers,
  axiosUsersRequest,
  axiosUsersSuccess,
  axiosUsersFailure,
} from "../redux";
import { connect } from "react-redux";
import axios from "axios";


// class CakeContainer extends Component {
//   state = {  } 
//   render() { 
//     return userData.loading ? (
//       <h2>Loading</h2>
//     ) : userData.error ? (
//       <h2>{userData.error}</h2>
//     ) : (
//       <div>
//         <h3>Users List</h3>
//         {
//           userData && userData.users && userData.users.map( user => <p>{user.name}</p>)
//         }
//       </div>
//     )
//   }
// }
 
// export default CakeContainer;

function CakeContainer ({userData, fetchUsers}) {

    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? (
      <h2>Loading</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        <h3>Users List</h3>
        {
          userData && userData.users && userData.users.map( user => <p>{user.name}</p>)
        }
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {    
    userData: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   fetchUsers : () => dispatch(fetchUsers()),  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
