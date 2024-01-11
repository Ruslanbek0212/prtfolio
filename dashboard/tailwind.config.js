/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container : {
        padding : {
          sm: '15px',
          lg: '30px'
        },
      },
      boxShadow: {
        signBoxShadow: '0px 10px 110px 1px rgba(59, 59, 59, 0.08)',
      },
      colors: {
        Cblack : '#1F2128',
        Cprimarydark: '#242731',
        Cgray: '#5F6165',
        Cgraydark: '#72767C',
        Cwhite: '#FFF',
        Cprimarypurple: '#A162F7',
        Cdark: '#363D48',
        Cprimarygray: '#818891',
        Cblue:'#2884FF',
        Cdark1: '#242731',
        Cgraydark5: '#808191'
      },
      fontFamily: {
        dm : ["'DM Sans', sans-serif "]
      },
      backgroundColor: {
        Purple: '#A162F7',
        tertiary: '#E1DFA4',
        Lightblue: '#E3ECF1',
        Lightgray: '#F4E3E5',
        activeMenu: '#F3F5F8',
        darkActiveMenu: '#292E3D',
        Gray: '#5F6165',
        GrayDark: '#F5F5F5',
        Corange: '#FF764C',
        BgGray: '#F5F4F6',        
      },
      fontSize: {
        logo: ['24px', {
          fontWeight: 700,
          letterSpacing: 0
        }],
        menu: ['14px', {
          fontWeight: 500,
          letterSpacing: 0
        }],
        searchTittle: ['16px', {
          fontWeight: 500,
          lineHeight: '20px'
        }],
        Heading: ['20px', {
          fontWeight: 400,
          letterSpacing: 0
        }],
        subHeading: ['10px', {
          fontWeight: 700,
          lineHeight: '13px'
        }],
        subTittle1: ['14px', {
          fontWeight: 700,
          letterSpacing: 0
        }],
        subTittle2: ['14px', {
          fontWeight: 400, 
          letterSpacing: 0
        }],
        subTittle3: ['14px', {
          fontWeight: 600, 
          letterSpacing: 0
        }],
        signTitle: ['30px', {
          fontWeight: 700,
          lineHeight: '39px'
        }],
        signSubTitle: ['18px', {
          fontWeight: 400,
          lineHeight: 0
        }],
        signBtn: ['20px', {
          fontWeight: 700,
          lineHeight: '26px'
        }], 
        settingTitle: ['18px', {
          fontWeight: 500,
          lineHeight: '23px'
        }],
        settingSubTitle: ['16px', {
          fontWeight: 400,
          lineHeight: 0
        }],
        serviceTitle: ['12px', {
          fontWeight: 500,
          lineHeight: '16px'
        }],
        serviceSubTitle: ['16px', {
          fontWeight: 700,
          lineHeight: '20px'
        }],
        messagesTitle: ['13px', {
          fontWeight: 400,
          lineHeight: '20px'
        }],
        messagesSubTitle: ['13px', {
          fontWeight: 500,
          lineHeight: '16px'
        }],
        statisticTitle: ['20px', {
          fontWeight: 400,
          lineHeight: '26px'
        }],
        menu2: ['14px', {
          fontWeight: 500,
          lineHeight: '18px'
        }],
        subDate: ['11px', {
          fontWeight: 400,
          lineHeight: '14px'
        }],

      } 
    },
  },
  plugins: [],
}

