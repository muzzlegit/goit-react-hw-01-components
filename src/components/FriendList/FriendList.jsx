import PropTypes from 'prop-types';
//COMPONENTS
import FriendListItem from './FriendListItem';
//STYLES
import { Box, List } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Box>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
