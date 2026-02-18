/**
 * Inkblot Studio Design Tokens - Style Dictionary Configuration
 * Outputs: CSS, JSON, TypeScript, SCSS for web, AI, and component libraries
 */
export default {
  source: [
    'tokens/primitive/*.json',
    'tokens/semantic/*.json',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'inkblot-variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: ':root',
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'inkblot-tokens.js',
          format: 'javascript/es6',
          options: { outputReferences: true },
        },
        {
          destination: 'inkblot-tokens.json',
          format: 'json/flat',
          options: { outputReferences: false },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_inkblot-variables.scss',
          format: 'scss/variables',
          options: { outputReferences: true },
        },
      ],
    },
    // Flattened JSON for AI training - minimal, resolved values
    ai: {
      transformGroup: 'js',
      buildPath: 'dist/ai/',
      files: [
        {
          destination: 'inkblot-tokens-resolved.json',
          format: 'json/flat',
          options: { outputReferences: false },
        },
      ],
    },
  },
};
