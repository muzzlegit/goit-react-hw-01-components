import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div({
  padding: '8px',
  height: '620px',
  width: '300px',
  gap: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.colors.text,
  fontSize: '20px',
  borderRadius: '16px',
  borderTop: '1px solid rgba(255, 255, 255, .5)',
  borderLeft: '1px solid rgba(255, 255, 255, .5)',
  background: 'rgba(255, 255, 255, .1)',
  backdropFilter: 'blur(5px)',
  boxShadow: theme.shadows.box,
});

export const ColCell = styled.th(
  {
    textAlign: 'center',
    padding: '4px',
    border: theme.borders['1px'],

    borderColor: theme.colors.warm,
    backgroundColor: theme.colors.pGray,
  },
  props => ({
    backgroundColor: theme.colors[props.color],
  })
);
export const RowCell = styled.td(
  {
    textAlign: 'center',
    padding: '4px',
    border: theme.borders['1px'],
    borderColor: theme.colors.pGray,
  },
  props => ({
    backgroundColor: theme.colors[props.background],
    color: theme.colors[props.color],
  })
);
