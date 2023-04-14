import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div({
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

export const Image = styled.img(
  {
    height: '100px',
  },
  props => ({
    src: props.src,
    alt: props.alt,
  })
);

export const UserBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
});

export const UserName = styled.p({
  fontWeight: '700',
});
export const UserTag = styled.p({
  color: theme.colors.acent,
});
export const Line = styled.hr({
  width: '90%',
  color: theme.colors.hr,
});

export const SocialBox = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'left',
  gap: '16px',
});
export const SocialProp = styled.li({
  display: 'flex',
  gap: '8px',
});
