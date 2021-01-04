import React, { Component } from 'react';
import '../styles/edit.css';

class Edit extends Component {
    constructor(Props){
        super(Props)
    }
    
    render() {
        const { handleClose, desc, show, header, footer  } = this.props;
		const showHideClassName = show ? 'show-div' : 'hide-div';
        return (
            <div>
                <div className={showHideClassName}>
      	   <div id="myModal" className="modal">
 
			  <div className="modal-content">
			    <div className="modal-header">
			      <span className="close" onClick={this.props.handleClose}>×</span>
			      <h2>{header}</h2>
			    </div>
			    <div className="modal-body">
			    	<p>{desc}</p> <p>
                        <label>password</label>
 
</p>                 </div><div className="modal-footer"><h3>{footer}</h3>
</div>               </div>
 
			</div>
 
		</div>
                
            </div>
        );
    }
}

export default Edit;