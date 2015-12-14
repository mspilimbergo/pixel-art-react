import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Dimensions = React.createClass({
  getInitialState: function() {
    return {columnsValue: 10, rowsValue: 10};
  },
  handleChange: function(event) {
    if (event.target.className === 'columns') {
      this.setState({columnsValue: event.target.value});
    } else if (event.target.className === 'rows') {
      this.setState({rowsValue: event.target.value});
    }
  },
  render: function() {
    //console.log('********* DIMENSIONS getCells');
    let columnsValue = this.state.columnsValue;
    let rowsValue = this.state.rowsValue;
    //console.log(columnsValue + ' ' + rowsValue);
    const { columns, rows } = this.props;

    const styles = {
      button: {
        width: "100%"
      }
    };

    return <div className="dimensions">
        <input type="text" className="columns" value={columnsValue} onChange={this.handleChange} />
        <input type="text" className="rows" value={rowsValue} onChange={this.handleChange}/>
        <button style={styles.button} onClick={() => this.props.setGridDimension(columnsValue, rowsValue)}>RESIZE</button>
        <button onClick={() => this.props.undo()}>back</button>
        <button onClick={() => this.props.redo()}>forward</button>
      </div>;
  }
});

function mapStateToProps(state) {
  return {
    columns: state.present.get('columns'),
    rows: state.present.get('rows')
  };
}
export const DimensionsContainer = connect(
  mapStateToProps,
  actionCreators
)(Dimensions);