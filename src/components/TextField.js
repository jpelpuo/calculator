import React, {Component} from 'react';

class TextField extends Component{
    render() {
        const {valueResult, valueOperation} = this.props;
        return (
            <div>
                <form action="" className="form">
                    <input type="text" className="form-control border-bottom-0" id="result" value={valueResult} readOnly/>
                    <input type="text" className="form-control border-top-0" id="operation" value={valueOperation} readOnly/>
                </form>
            </div>
        );
    }
}

export default TextField;