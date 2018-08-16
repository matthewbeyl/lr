import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQB } from '../../redux/actions/playerActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const mapStateToProps = state => ({
    user: state.user,
    quarterbacks: state.quarterbacks
});

class QBPage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          teamQBs: []
        }
      }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchQB());
    }
    handleSelect = (event) => {
        console.log(event.target.value);
        console.log(this.state);
        this.setState({
            teamQBs: event.target.value,
        })
    }

    goToRb = (event) => {
        event.preventDefault();        
        // this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state.quarterback })
        this.props.history.push('/rb')
    }

    render() {
        let qbList;
        if (this.props.quarterbacks.quarterbacks.Players) {
            qbList = this.props.quarterbacks.quarterbacks.Players.map((QB, index) => {
                return (
                    // <p key={index}>{QB.displayName}</p>
                    
                        <option key={index}>{QB.displayName}</option>
                )
            })
            // console.log(this.props.quarterbacks.quarterbacks.Players);
        }

        return (
            <div>
                {/* {JSON.stringify(this.props.quarterbacks)} */}
                <form onSubmit={this.goToRb}>
                    <h1>Select Quarterback(s)</h1>
                    <select onChange={this.handleSelect}>
                        {qbList}
                    </select>
                    <select onChange={this.handleSelect}>
                        {qbList}
                    </select>
                    <Button type="submit" variant="contained">NEXT</Button>
                </form>
            </div>
        )
    }
}

const StyledQBPage = withStyles(styles)(QBPage);
export default connect(mapStateToProps)(StyledQBPage);