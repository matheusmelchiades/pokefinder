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
  mobileSmall: `(max-width: ${sizes.mobileSmall}px)`,
  mobileMedium: `(max-width: ${sizes.mobileMedium}px)`,
  mobileLarge: `(max-width: ${sizes.mobileLarge}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  laptop: `(max-width: ${sizes.laptop}px)`,
  laptopLarge: `(max-width: ${sizes.laptopLarge}px)`,
  desktop: `(max-width: ${sizes.desktop}px)`,
  desktopLarge: `(max-width: ${sizes.desktopLarge}px)`,
};
