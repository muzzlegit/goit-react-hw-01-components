import PropTypes from 'prop-types';
//STYLES
import {
  Box,
  Image,
  UserBox,
  UserName,
  UserTag,
  Line,
  SocialBox,
  SocialProp,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  console.log(username, tag, location, avatar, stats);
  return (
    <Box>
      <UserBox>
        <Image src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <span>{location}</span>
      </UserBox>
      <Line />
      <SocialBox>
        <SocialProp>
          <span>Followers</span>
          <span>{followers}</span>
        </SocialProp>
        <SocialProp>
          <span>Views</span>
          <span>{views}</span>
        </SocialProp>
        <SocialProp>
          <span>Likes</span>
          <span>{likes}</span>
        </SocialProp>
      </SocialBox>
    </Box>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
