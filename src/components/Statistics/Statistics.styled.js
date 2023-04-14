import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.section({
  padding: '8px',
  height: '400px',
  width: '280px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
export const Title = styled.h2({
  fontWeight: '700',
});
export const Item = styled.li({
  display: 'flex',
});
export const Label = styled.p({
  height: '60px',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colors.white,
  backgroundColor: theme.colors.primaryDark,
  border: theme.borders['1px'],
  borderColor: theme.colors.pGray,
});
export const Percentage = styled.span({
  height: '60px',
  width: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.primaryLight,
  border: theme.borders['1px'],
  borderColor: theme.colors.pGray,
});
