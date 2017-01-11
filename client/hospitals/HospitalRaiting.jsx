import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class HospitalRaiting extends Component {
  constructor() {
       super();
       this.state = {
           rating: 3,
       };
   }

   onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

  //usa {rating} para obtener el valor

    render() {
        const { rating } = this.state;
        return (
            <div>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}
