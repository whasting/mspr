import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state, ownProps) => {
  // featuredPets
  // posts

  return ({
    loggedIn: Boolean(state.session.currentUser)
  });
};

const mapDispatchToProps = dispatch => {
  // receiveFeaturedPets
  // receivePosts
  // receiveAnnouncement?
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
