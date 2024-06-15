/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customColor: 'rgb(18, 29, 51)',
        bgColor: 'rgb(20, 70, 153)',
        formColor: 'rgba(255, 255, 255, 0.1)',
        walletColor: 'rgba(239, 236, 254, 0.5)',
        walletOther: 'rgb(247, 245, 255)',
        walletActive: 'rgb(239, 236, 254)',
        walletText: 'rgb(115, 73, 242)',
        walletBorder: 'rgb(222, 216, 253)',
        exchangeColor: 'rgba(236, 245, 254, 0.5)',
        exchangeText: 'rgb(12, 108, 242)',
        exchangeOther: 'rgb(236, 245, 254)',
        exchangeLightColor: 'rgb(61, 137 245)',
        currencyColor: 'rgb(245, 250, 254)',
        currencyBorder: 'rgb(216, 222, 253)'
      },
      backgroundImage: {
        'home-hero-gradient': "url('/images/home-hero-gradient.jpg')",
        'wallet-image': "url('/images/homepage.png')",
        'exchange-image': 'url(/images/exchange-bg.png)',
      },
      backgroundSize: {
        '625px': '625px',
        '375px': '375px',
      },
      backgroundPosition: {
        'center-bottom': 'center bottom',
        'right-bottom-2.5rem': 'right bottom 2.5rem',
        'top-right-180px': 'right top 180px',
        'left-bottom': 'left bottom 2.5rem',
        'left-top': 'left top 150px',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
}
