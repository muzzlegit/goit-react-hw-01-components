import PropTypes from 'prop-types';
//STYLES
import { Box, Title, Item, Label, Percentage } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  console.log('🚀 ~ stats:', stats);
  return (
    <Box>
      {title ? <Title>{title}</Title> : null}
      <ul>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}</Percentage>
            </Item>
          );
        })}
      </ul>
    </Box>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
