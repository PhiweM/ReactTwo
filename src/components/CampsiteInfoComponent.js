import { Component } from "react/cjs/react.production.min";

class CampsiteInfo extends Component {

    render() {
        if(this.props.campsite !== undefined){
            return(
                <div className="row" campsite={this.state.selectedCampsite}>
                </div>
            );
        }
         else {
             return(
                 <div></div>
             );
         }
    }
}

export default CampsiteInfo;