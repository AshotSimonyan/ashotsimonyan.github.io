import { styled } from 'styles';

const ButtonStyle = styled('button', {
  // mini reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  lineHeight: 1,
  cursor: 'pointer',
  borderRadius: '$1',
  display: 'inline-block',
  transition: '$main',

  variants: {
    size: {
      1: {
        height: '53px',
        lineHeight: '53px',
        fontSize: '$3',
        px: '$6',

        '@bp1': {
          height: '50px',
          lineHeight: '50px',
        },
      },
      2: {
        height: '32px',
        lineHeight: '32px',
        fontSize: '$1',
        px: '$2',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover': {
          backgroundColor: "$primaryHover"
        },
      },
      secondary: {
        backgroundColor: '$primaryLight',
        color: '$primary',
        '&:hover': {
          backgroundColor: "$primaryLightHover"
        },
      },
      outline: {
        backgroundColor: '$white',
        color: '$textColor',
        border: '1px solid $grey',
        '&:hover': {
          borderColor: "$primaryHover"
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 1,
  },
});

export { ButtonStyle };
