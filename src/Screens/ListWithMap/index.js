import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Styles'; 
import Shop from '../../Components/Shop';
import {getPlaces, changeTheScreen} from '../../Store/Actions/shopActions';
import { connect } from 'react-redux'
import shopReducer from '../../Store/Reducers/shopReducer';
import ChangeTheMode from "../../Components/ChangeTheMode";
import Map from "../../Components/Map"
 class ListWithMap extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        this.props.fetchPlaces();
        console.log("allllll props" , this.props)
        console.log("state" , this.state)
      }

    render() {
        return (

            
            <View style={styles.container}>
            {this.props.isListMode ? (
                <Shop
            places={this.props.places}
           // isLoading={this.props.isLoading}
           // navigation={this.props.navigation}
          />
          ) : (
            <Map
            style={styles.map}
            places={this.props.places}
            navigation={this.props.navigation}
          />
          )}
          <ChangeTheMode
          //action
          screenChanged={this.props.onChangeScreenMode}
          //reducer
          isListMode={this.props.isListMode}
        />
            </View>
        )
    }
}

const mapStateToProps = ({ shop }) => ({
    places: shop.places,
   isLoading: shop.isLoading,
    isListMode: shop.isListMode
  });

  const mapDispatchToProps = (dispatch)=>{
      return{
        fetchPlaces: () => { dispatch(getPlaces())},
        onChangeScreenMode:() => {dispatch(changeTheScreen())
        
      }
   
      
    }
  
  };



export default connect(mapStateToProps, mapDispatchToProps)(ListWithMap)
