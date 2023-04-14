import styled from '@emotion/styled';
import theme from 'theme';

export const ItemBox = styled.li({
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '16px',
  borderRadius: '8px',
  border: theme.borders['1px'],
  borderColor: 'rgba(255, 255, 255, .1)',
  color: theme.colors.text,
  backgroundColor: theme.colors.primaryLight,
});
export const Status = styled.span(
  {
    height: '20px',
    width: '20px',
    borderRadius: '50%',
  },
  props => ({
    backgroundColor:
      props.status === 'true' ? theme.colors.green : theme.colors.red,
  })
);
