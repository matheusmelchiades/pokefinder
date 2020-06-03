export const sizes = {
  mobileSmall: 320,
  mobileMedium: 375,
  mobileLarge: 575,
  tablet: 700,
  laptop: 992,
  laptopLarge: 1180,
  desktop: 1520,
  desktopLarge: 1800,
};

export default {
  mobileSmall: `(min-width: ${sizes.mobileSmall}px)`,
  mobileMedium: `(min-width: ${sizes.mobileMedium}px)`,
  mobileLarge: `(min-width: ${sizes.mobileLarge}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  laptopLarge: `(min-width: ${sizes.laptopLarge}px)`,
  desktop: `(min-width: ${sizes.laptopLarge}px)`,
  desktopLarge: `(min-width: ${sizes.desktopLarge}px)`,
};
