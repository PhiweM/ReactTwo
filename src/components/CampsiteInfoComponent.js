import { Component } from "react/cjs/react.production.min";

class CampsiteInfo extends Component {

    render() {
        if(this.props.campsite !== undefined){
            return(
                <div className="row" >
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