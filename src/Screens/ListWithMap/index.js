import React, {Component} from 'react';
import {View, Text,StyleSheet , Button} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles';
import Shop from '../../Components/Shop';
import {getPlaces, changeTheScreen , getReview} from '../../Store/Actions/shopActions';
import {connect} from 'react-redux';
import shopReducer from '../../Store/Reducers/shopReducer';
import ChangeTheMode from '../../Components/ChangeTheMode';
import Map from '../../Components/Map';
class ListWithMap extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }
  componentDidMount() {
    this.props.fetchPlaces();
    this.props.fetchReviews();
   // console.log('state', this.state);
  }

  render() {
   //console.log('allllll props', this.props.reviews);
    let MapView = (
        
      <View style={styles.containerTwo}>
        <Map
         // style={styles.map}
          places={this.props.places}
          navigation={this.props.navigation}
          reviews = {this.props.reviews}
        />
       <ChangeTheMode
          //action
          screenChanged={this.props.onChangeScreenMode}
          //reducer
          isListMode={this.props.isListMode}
        />
      </View>
    );

    let list = (
      <View style={styles.container}>
       
        <Shop
          places={this.props.places}
          isLoading={this.props.isLoading}
          navigation={this.props.navigation}
          reviews = {this.props.reviews}
        />
        <ChangeTheMode
          //action
          screenChanged={this.props.onChangeScreenMode}
          //reducer
          isListMode={this.props.isListMode}
        />
      </View>
    );

    return (
      <View>
        {this.props.isListMode ? list : MapView}
      </View>
    );
  }
}

const mapStateToProps = ({shop , reviewsState}) => ({
  places: shop.places,
  isLoading: shop.isLoading,
  isListMode: shop.isListMode,
  reviews: reviewsState.reviews,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaces: () => {
      dispatch(getPlaces());
    },
    onChangeScreenMode: () => {
      dispatch(changeTheScreen());
    },
    fetchReviews: () => {
      dispatch(getReview());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListWithMap);
