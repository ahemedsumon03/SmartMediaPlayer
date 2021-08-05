import React, {Component} from 'react';
import MenuBar from "../components/MenuBar";
import SmartMedia from "../components/SmartMedia";

class SmartMediaPage extends Component {
    render() {
        return (
            <div>
                <MenuBar/>
                <SmartMedia/>
            </div>
        );
    }
}

export default SmartMediaPage;