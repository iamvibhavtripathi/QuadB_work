module.exports = {
    // Other webpack configuration...
    resolve: {
      fallback: {
        buffer: require.resolve('buffer'), // Add this line
      },
    },
  };
  