import React from 'react';
import KegForm from './KegForm';
import KegList from './KegList';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
                  formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;                          
    if (this.state.formVisibleOnPage) {             //if true
      currentlyVisibleState = <KegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";         
    } else {                                        //if false
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />;
      buttonText = "Add Keg";                    
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default KegControl;