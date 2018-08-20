import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQB } from '../../redux/actions/playerActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { TEAM_ACTIONS } from '../../redux/actions/teamActions';

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
    players: state.playerReducer
});

class QBPage extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            quarterbacks: []
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch(fetchQB());
    }

    handleSelect = (event) => {
        let pickedPlayer = this.props.players.quarterbacks.Players[event.target.value]
        console.log(pickedPlayer);
        this.setState({
            quarterbacks: [...this.state.quarterbacks, pickedPlayer]
        })
    }

    deleteFromState = (property) => {
        let newState = this.state.quarterbacks.filter(player => {
            return player.playerId !== property
        })
        this.setState({
            quarterbacks: newState
        })
    }

    goToRb = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: TEAM_ACTIONS.ADD_QBS , payload : this.state})
        this.props.history.push('/rb')
    }

    render() {
        let qbList;
        if (this.props.players.quarterbacks.Players) {
            qbList = this.props.players.quarterbacks.Players.map((QB, index) => {
                return (
                    <option key={index} value={index}>{QB.displayName}</option>
                )
            })
        }

        let pickedPlayersList = this.state.quarterbacks.map(QB => {
            return <div>
                {QB.displayName} {/*<button onClick={() => this.deleteFromState(QB.playerId)}>Delete</button> */}
            </div>
        })

        return (
            <div>
                <form onSubmit={this.goToRb}>
                    <h1>Select Quarterbacks</h1>
                    <select onChange={this.handleSelect}>
                        {qbList}
                    </select>
                    {pickedPlayersList}
                    <Button type="submit" variant="contained">NEXT</Button>

                </form>
            </div>
        )
    }
}

const StyledQBPage = withStyles(styles)(QBPage);
export default connect(mapStateToProps)(StyledQBPage);