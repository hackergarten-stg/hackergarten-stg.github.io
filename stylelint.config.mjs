const tokenOnly = ['px', 'rem', 'em', 'ch'];

/** Component and global CSS may only use design tokens; literal values belong in tokens.css. */
export default {
  overrides: [{ files: ['**/*.astro'], customSyntax: 'postcss-html' }],
  rules: {
    'color-no-hex': true,
    'color-named': 'never',
    'function-disallowed-list': ['rgb', 'rgba', 'hsl', 'hsla', 'hwb', 'lab', 'lch', 'oklab', 'oklch'],
    'declaration-property-unit-disallowed-list': {
      '/^(margin|padding|gap|row-gap|column-gap|inset|top|right|bottom|left)/': tokenOnly,
      '/^(min-|max-)?(width|height)$/': tokenOnly,
      '/^(font-size|letter-spacing|border-radius)$/': tokenOnly,
      '/^(border|outline)/': tokenOnly,
      '/^grid-template-(columns|rows)$/': tokenOnly,
      '/^(backdrop-)?filter$/': tokenOnly,
      '/^(transition|animation)(-duration|-delay)?$/': ['s', 'ms'],
    },
    'declaration-property-value-allowed-list': {
      'line-height': ['/^var\\(--/'],
      '/^(font-family|font-weight|box-shadow)$/': ['/^var\\(--/'],
    },
  },
  ignoreFiles: ['src/styles/tokens.css', 'src/styles/reset.css', 'dist/**', '.astro/**'],
};
