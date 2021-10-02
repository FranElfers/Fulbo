import React from 'react';
import Svg, { Path } from "react-native-svg"

export const BallIcon = () => {
	return <Svg
		width='100%'
		height='100%'
		viewBox="0 0 100 100"
		fill='#606873'
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M79.463 20.537A41.4 41.4 0 0050.004 8.296a41.43 41.43 0 00-29.466 12.241c-16.246 16.242-16.246 42.68 0 58.925a41.416 41.416 0 0029.47 12.242 41.4 41.4 0 0029.459-12.237c16.246-16.242 16.246-42.68-.004-58.93zm-28.709-3.87h-1.496c.255-.005.496-.038.75-.038.255 0 .492.033.746.037zm25.259 54.166h-9.346l-5.242 10.484a33.151 33.151 0 01-11.42 2.054 33.166 33.166 0 01-11.443-2.059l-5.229-10.437h-9.312a33.166 33.166 0 01-6.763-14.717L25 45.833l-5.067-10.137a33.067 33.067 0 016.496-9.267 33.308 33.308 0 0113.417-8.204L50 25l10.158-6.771a33.376 33.376 0 0113.417 8.2 33.084 33.084 0 016.492 9.254L75 45.833l7.742 10.325a33.133 33.133 0 01-6.73 14.675z"
			fill='#606873'
		/>
		<Path
			d="M35.417 45.833l6.25 16.667h16.666l6.25-16.667L50 35.417 35.417 45.833z"
			fill='#606873'
		/>
	</Svg>
}

export const UserIcon = props => <Svg
	width='100%'
	height='100%'
	viewBox="0 0 100 100"
	fill='#606873'
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<Path
		d="M83.838 74.57a36.524 36.524 0 00-7.871-11.67 36.681 36.681 0 00-11.67-7.87c-.04-.02-.078-.03-.117-.05 6.084-4.394 10.039-11.552 10.039-19.628 0-13.38-10.84-24.22-24.219-24.22-13.379 0-24.219 10.84-24.219 24.22 0 8.076 3.955 15.234 10.04 19.638-.04.02-.079.03-.118.05a36.365 36.365 0 00-11.67 7.87 36.683 36.683 0 00-7.87 11.67 36.296 36.296 0 00-2.882 13.486.78.78 0 00.781.801h5.86a.78.78 0 00.781-.761c.195-7.54 3.223-14.6 8.574-19.952C34.815 62.617 42.168 59.57 50 59.57c7.832 0 15.186 3.047 20.723 8.584 5.351 5.352 8.379 12.412 8.574 19.952.01.43.351.761.781.761h5.86a.782.782 0 00.78-.8 36.392 36.392 0 00-2.88-13.497zM50 52.148a16.688 16.688 0 01-11.875-4.921 16.688 16.688 0 01-4.922-11.875c0-4.483 1.748-8.702 4.922-11.875A16.688 16.688 0 0150 18.555c4.482 0 8.701 1.748 11.875 4.922a16.688 16.688 0 014.922 11.875c0 4.482-1.748 8.7-4.922 11.875A16.688 16.688 0 0150 52.148z"
		fill='#606873'
	/>
</Svg>

export const OptionsIcon = props => <Svg
	width='100%'
	height='100%'
	viewBox="0 0 100 100"
	fill="#606873"
	xmlns="http://www.w3.org/2000/svg"
	{...props}
>
	<Path
		d="M87.5 75h-75v-8.333h75V75zm0-20.833h-75v-8.334h75v8.334zm0-20.834h-75V25h75v8.333z"
		fill="#606873"
	/>
</Svg>
