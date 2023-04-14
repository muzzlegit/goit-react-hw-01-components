import PropTypes from 'prop-types';
//STYLES
import { ItemBox, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemBox>
      <Status status={isOnline.toString()}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ItemBox>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
