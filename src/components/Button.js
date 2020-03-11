import React from 'react';

class Button extends React.Component {
  render () {
    return (
      <div className='button-wrapper'>
        <button className={this.props.className} onClick={this.props.handleClick}>{this.props.innerText}</button>
      </div>
    );
  }
}

export default Button;