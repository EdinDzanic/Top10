import ActiveButton from './ActiveButton';
import { connect } from 'react-redux'
import { toggleMode } from './../actions';

const mapStateToProps = (state, ownProps) => (
    { active: ownProps.mode === state.selectedMode }
);

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(toggleMode(ownProps.mode))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveButton)