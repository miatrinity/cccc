//custom types start with c -> e.g. boxShadow cg = custom grey
module.exports = {
  purge: [],
  theme: {
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      cg: '0 0 0 1px rgba(37,37,37,.12)',
      cp: '0 0 0 .2rem rgba(184,50,128, 0.8)',
      nav: '0 0.5px 0.5px rgba(0,0,0,0.4)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1150px',
    },
    fontSize: {
       xs: '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {
      // gridTemplateColumns: {
      //   // 3:1 two column layout
      //   '3-1': '3fr 1fr',
      // },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      // borderRadius: { 
      //   circle: '50%',
      // },
      maxWidth: {
        xxs: '180px',
      },
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
    plugins: [
    require('@tailwindcss/ui'),
  ],
}
