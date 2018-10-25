// @flow
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import { actions } from 'redux/Avatar';
import Avatar from './Avatar';

const mapStateToProps = (state: State): AvatarState => ({
  username: state.avatar.username,
  userAvatarUrl: state.avatar.userAvatarUrl,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Object => ({
  fetchUser: (username: string): Dispatch<FetchUserRequestAction> =>
    dispatch(actions.fetchUserRequest(username)),
  push: (pathName: string): Dispatch<*> => dispatch(push(pathName)),
  updateUsername: (username: string): Dispatch<UpdateUsernameAction> =>
    dispatch(actions.updateUsername(username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(Avatar));
