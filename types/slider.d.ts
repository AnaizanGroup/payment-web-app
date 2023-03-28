/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module 'react-slick' {
	const Slider: React.ComponentType<
		Partial<import('react-slick/Slider').SliderProps>
	>;
	export const Range: React.ComponentType<
		Partial<import('rc-slider/lib/Range').RangeProps>
	>;
	export const Handle: React.ComponentType<
		Partial<import('rc-slider/lib/Handle').HandleProps>
	>;
	export const createSliderWithTooltip: typeof import('rc-slider/lib/createSliderWithTooltip').default;
	export default Slider;
}
