import postcssGlobalData from '@csstools/postcss-global-data';
import postcssCustomMedia from 'postcss-custom-media';

/** Makes the `@custom-media` breakpoints in tokens.css available to every scoped component style. */
export default {
  plugins: [postcssGlobalData({ files: ['src/styles/tokens.css'] }), postcssCustomMedia()],
};
