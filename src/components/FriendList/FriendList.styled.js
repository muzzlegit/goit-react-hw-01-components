import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div({
  padding: '8px',
  height: '400px',
  width: '280px',
  gap: '16px',
  color: theme.colors.text,
  fontSize: '20px',
  borderRadius: '16px',
  borderTop: '1px solid rgba(255, 255, 255, .5)',
  borderLeft: '1px solid rgba(255, 255, 255, .5)',
  background: 'rgba(255, 255, 255, .1)',
  backdropFilter: 'blur(5px)',
  boxShadow: theme.shadows.box,
});
export const List = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
});
