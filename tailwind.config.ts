import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Aeonik', 'sans-serif'],
				aeonik: ['Aeonik', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				pear: {
					DEFAULT: '#c5ea08',
					100: '#272e02',
					200: '#4e5d03',
					300: '#748b05',
					400: '#9bb907',
					500: '#c5ea08',
					600: '#d6f72e',
					700: '#e0f962',
					800: '#eafb97',
					900: '#f5fdcb'
				},
				apple: {
					DEFAULT: '#a4c309',
					100: '#212702',
					200: '#424e04',
					300: '#627506',
					400: '#839c07',
					500: '#a4c309',
					600: '#cff415',
					700: '#dbf750',
					800: '#e7f98a',
					900: '#f3fcc5'
				},
				lavender: {
					DEFAULT: '#ffbee5',
					100: '#590035',
					200: '#b1006a',
					300: '#ff0b9d',
					400: '#ff64c1',
					500: '#ffbee5',
					600: '#ffcaea',
					700: '#ffd7ef',
					800: '#ffe4f4',
					900: '#fff2fa'
				},
				royal: {
					DEFAULT: '#000000',
					100: '#000000',
					200: '#000000',
					300: '#000000',
					400: '#000000',
					500: '#000000',
					600: '#000000',
					700: '#000000',
					800: '#000000',
					900: '#000000'
				},
				floral: {
					DEFAULT: '#f9f8ef',
					100: '#47431b',
					200: '#8e8536',
					300: '#c4ba62',
					400: '#ded9a9',
					500: '#f9f8ef',
					600: '#fbfaf3',
					700: '#fcfbf6',
					800: '#fdfcf9',
					900: '#fefefc'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				cta: '5px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					from: { opacity: '0', transform: 'translateX(-10px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-slow': {
					'0%, 100%': { 
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.6',
						transform: 'scale(1.05)'
					}
				},
				'gradient-x': {
					'0%, 100%': { 
						'background-position': '0% 50%'
					},
					'50%': { 
						'background-position': '100% 50%'
					}
				},
				'text-slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'pulse-slow': 'pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'text-slide-up': 'text-slide-up 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
