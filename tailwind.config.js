/** @type {import('tailwindcss').Config} */

const isWidgetOnly = process.env.MODE === 'widget';

// original tailwind config module exports
// module.exports = {
//   important: isWidgetOnly ? '#jupiter-terminal' : false,
//   corePlugins: {
//     preflight: isWidgetOnly ? false : true,
//   },
//   mode: 'jit',
//   darkMode: 'class',
//   content: ['./src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         'jupiter-input-light': '#EBEFF1',
//         'jupiter-jungle-green': '#24AE8F',
//         'jupiter-primary': '#FBA43A',
//         warning: '#FAA63C',

//         'v3-bg': 'rgba(28, 41, 54, 1)',
//         'v3-primary': '#c7f284',
//         'v3-modal': '#222B33',
//         'v2-lily': '#E8F9FF',
//         purple: {
//           50: '#F1ECFF',
//           100: '#D5C7FF',
//           200: '#B8A2FF',
//           300: '#AA8FFF',
//           400: '#9C7CFF',
//           500: '#8E6AFF',
//           600: '#8057FF',
//           700: '#6443CB',
//           800: '#5036A2',
//           900: '#281563',
//           1000: '#100723',
//         },
//         blue: {
//           50: '#CFE1FF',
//           100: '#BAD3FF',
//           200: '#A3C5FF',
//           300: '#80A9EE',
//           400: '#5B81C2',
//           500: '#3C5C93',
//           600: '#2A4A80',
//           700: '#283F65',
//           800: '#1F3251',
//           900: '#1E293B',
//           1000: '#131C2C',
//         },
//         green: {
//           50: '#CFFFCC',
//           100: '#A6F6A0',
//           200: '#8BE07D',
//           300: '#74C267',
//           400: '#64A658',
//           500: '#59944E',
//           600: '#43703B',
//           700: '#3E6837',
//           800: '#31522B',
//           900: '#22411C',
//           1000: '#172C13',
//         },
//         yellow: {
//           50: '#F9F3C5',
//           100: '#F3EA9D',
//           200: '#F0E375',
//           300: '#F1DE54',
//           400: '#EED23B',
//           500: '#E5C827',
//           600: '#D1B411',
//           700: '#BEA202',
//           800: '#9B8402',
//           900: '#786704',
//           1000: '#5E5005',
//         },
//         red: {
//           50: '#FFA7B0',
//           100: '#FF8794',
//           200: '#FF6E7E',
//           300: '#FF586A',
//           400: '#FF4458',
//           500: '#EF2B40',
//           600: '#D1172A',
//           700: '#A81826',
//           800: '#820F1A',
//           900: '#6A0912',
//           1000: '#4F050C',
//         },
//         orange: {
//           50: '#F8D8A1',
//           100: '#F6C475',
//           200: '#F3B14F',
//           300: '#F19E38',
//           400: '#EC8B24',
//           500: '#CE700D',
//           600: '#B76209',
//           700: '#A05607',
//           800: '#844707',
//           900: '#703C07',
//           1000: '#532D05',
//         },
//         grey: {
//           50: '#E5E5E8',
//           100: '#C9CACB',
//           200: '#AFAFB1',
//           300: '#949497',
//           400: '#797A7E',
//           500: '#5E5F64',
//           600: '#44444A',
//           700: '#292A30',
//           800: '#17181F',
//           900: '#0E0F16',
//           1000: '#07080E',
//         },
//         salmon: {
//           50: '#F9DCD7',
//           100: '#F6CBC3',
//           200: '#F3B9AF',
//           300: '#F1A89C',
//           400: '#EE9688',
//           500: '#EB8574',
//           600: '#E87360',
//           700: '#E5624C',
//           800: '#C34934',
//           900: '#A73926',
//           1000: '#7D281A',
//         },
//         punch: {
//           50: '#FBEBF0',
//           100: '#F6D8E1',
//           200: '#F2C4D1',
//           300: '#EEB0C2',
//           400: '#E99DB3',
//           500: '#E589A4',
//           600: '#E17594',
//           700: '#DC6285',
//           800: '#D84E76',
//           900: '#C32F5A',
//           1000: '#A5133D',
//         },
//         navy: {
//           50: '#CBCCD1',
//           100: '#9799A3',
//           200: '#7D7F8C',
//           300: '#62667C',
//           400: '#494C5E',
//           500: '#2F3347',
//           600: '#24283E',
//           700: '#171C2D',
//           800: '#151930',
//           900: '#0C101E',
//           1000: '#060912',
//         },
//         dark: {
//           50: '#373941',
//           100: '#33353D',
//           200: '#2E3138',
//           300: '#292C33',
//           400: '#24272F',
//           500: '#1E2129',
//           600: '#1A1C25',
//           700: '#151820',
//           800: '#10131B',
//           900: '#0B0E17',
//           1000: '#060912',
//         },
//         light: {
//           50: '#F8F9FC',
//           100: '#EEF0F5',
//           200: '#EBECF1',
//           300: '#E4E4E4',
//           400: '#E5E6E9',
//           500: '#D1D1D1',
//           600: '#CACACA',
//           700: '#C0C0C0',
//           800: '#B3B3B3',
//           900: '#9E9E9E',
//           1000: '#8D8D8D',
//         },
//         accent: {
//           50: '#FFFFFF',
//           100: '#A3C5FF',
//           200: '#B8A2FF',
//           300: '#8057FF',
//           400: '#D84E76',
//         },
//       },
//       fontSize: {
//         xxs: ['0.625rem', '1rem'],
//       },
//       backgroundImage: {
//         'v3-text-gradient': 'linear-gradient(247.44deg, #C7F284 13.88%, #00BEF0 99.28%)',
//       },
//       keyframes: {
//         shine: {
//           '100%': {
//             'background-position': '200% center',
//           },
//         },
//         hue: {
//           '0%': {
//             '-webkit-filter': 'hue-rotate(0deg)',
//           },
//           '100%': {
//             '-webkit-filter': 'hue-rotate(-360deg)',
//           },
//         },
//       },
//       animation: {
//         shine: 'shine 3.5s linear infinite',
//         hue: 'hue 10s infinite linear',
//       },
//     },
//   },
//   variants: {
//     extend: {
//       // Enable dark mode, hover, on backgroundImage utilities
//       backgroundImage: ['dark', 'hover', 'focus-within', 'focus'],
//     },
//   },
// };

// based on explorer-core tailwind configs
module.exports = {
  // !! Important for terminal css to work in explorer-core --------
  // add inner terminal id for all terminals used in explorer-core
  important: isWidgetOnly ? ':is(#deposit-fmsol-integrated-terminal-inner, #withdraw-fmsol-integrated-terminal-inner, #integrated-terminal-inner, #drawer-jup-terminal-inner)' : false,
  corePlugins: {
    preflight: false
  },
  // !! ------------------------------------------------------------
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F1ECFF",
          100: "#D5C7FF",
          200: "#B8A2FF",
          300: "#AA8FFF",
          400: "#9C7CFF",
          500: "#8E6AFF",
          600: "#8057FF",
          700: "#6443CB",
          800: "#5036A2",
          900: "#281563",
          1000: "#100723",
        },
        blue: {
          50: "#CFE1FF",
          100: "#BAD3FF",
          200: "#A3C5FF",
          300: "#80A9EE",
          400: "#5B81C2",
          500: "#3C5C93",
          600: "#2A4A80",
          700: "#283F65",
          800: "#1F3251",
          900: "#1E293B",
          1000: "#131C2C",
        },
        green: {
          50: "#CFFFCC",
          100: "#A6F6A0",
          200: "#8BE07D",
          300: "#74C267",
          400: "#64A658",
          500: "#59944E",
          600: "#43703B",
          700: "#3E6837",
          800: "#31522B",
          900: "#22411C",
          1000: "#172C13",
        },
        yellow: {
          50: "#F9F3C5",
          100: "#F3EA9D",
          200: "#F0E375",
          300: "#F1DE54",
          400: "#EED23B",
          500: "#E5C827",
          600: "#D1B411",
          700: "#BEA202",
          800: "#9B8402",
          900: "#786704",
          1000: "#5E5005",
        },
        red: {
          50: "#FFA7B0",
          100: "#FF8794",
          200: "#FF6E7E",
          300: "#FF586A",
          400: "#FF4458",
          500: "#EF2B40",
          600: "#D1172A",
          700: "#A81826",
          800: "#820F1A",
          900: "#6A0912",
          1000: "#4F050C",
        },
        orange: {
          50: "#F8D8A1",
          100: "#F6C475",
          200: "#F3B14F",
          300: "#F19E38",
          400: "#EC8B24",
          500: "#CE700D",
          600: "#B76209",
          700: "#A05607",
          800: "#844707",
          900: "#703C07",
          1000: "#532D05",
        },
        grey: {
          50: "#E5E5E8",
          100: "#C9CACB",
          200: "#AFAFB1",
          300: "#949497",
          400: "#797A7E",
          500: "#5E5F64",
          600: "#44444A",
          700: "#292A30",
          800: "#17181F",
          900: "#0E0F16",
          1000: "#07080E",
        },
        salmon: {
          50: "#F9DCD7",
          100: "#F6CBC3",
          200: "#F3B9AF",
          300: "#F1A89C",
          400: "#EE9688",
          500: "#EB8574",
          600: "#E87360",
          700: "#E5624C",
          800: "#C34934",
          900: "#A73926",
          1000: "#7D281A",
        },
        punch: {
          50: "#FBEBF0",
          100: "#F6D8E1",
          200: "#F2C4D1",
          300: "#EEB0C2",
          400: "#E99DB3",
          500: "#E589A4",
          600: "#E17594",
          700: "#DC6285",
          800: "#D84E76",
          900: "#C32F5A",
          1000: "#A5133D",
        },
        navy: {
          50: "#CBCCD1",
          100: "#9799A3",
          200: "#7D7F8C",
          300: "#62667C",
          400: "#494C5E",
          500: "#2F3347",
          600: "#24283E",
          700: "#171C2D",
          800: "#151930",
          900: "#0C101E",
          1000: "#060912",
        },
        dark: {
          50: "#373941",
          100: "#33353D",
          200: "#2E3138",
          300: "#292C33",
          400: "#24272F",
          500: "#1E2129",
          600: "#1A1C25",
          700: "#151820",
          800: "#10131B",
          900: "#0B0E17",
          1000: "#060912",
        },
        light: {
          50: "#F8F9FC",
          100: "#EEF0F5",
          200: "#EBECF1",
          300: "#E4E4E4",
          400: "#E5E6E9",
          500: "#D1D1D1",
          600: "#CACACA",
          700: "#C0C0C0",
          800: "#B3B3B3",
          900: "#9E9E9E",
          1000: "#8D8D8D",
        },
        accent: {
          50: "#FFFFFF",
          100: "#A3C5FF",
          200: "#B8A2FF",
          300: "#8057FF",
          400: "#D84E76",
        },
      },
      gap: {
        1: "2px",
        2: "4px",
        3: "6px",
        4: "8px",
        5: "12px",
        6: "16px",
        7: "20px",
        8: "24px",
        9: "32px",
        10: "36px",
        11: "40px",
        12: "48px",
      },
      padding: {
        1: "2px",
        2: "4px",
        3: "6px",
        4: "8px",
        5: "12px",
        6: "16px",
        7: "20px",
        8: "24px",
        9: "32px",
        10: "36px",
        11: "40px",
        12: "48px",
      },
      borderWidth: {
        none: "0px",
        0.5: "0.5px",
        2: "2px",
      },
      maxWidth: {
        xs: "327px",
        sm: "347px",
        md: "616px",
        lg: "820px",
        xl: "1152px",
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};