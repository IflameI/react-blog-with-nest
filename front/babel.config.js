module.exports = (api) => {
	// This caches the Babel config
	api.cache.using(() => process.env.NODE_ENV);
	return {
		presets: [
			'@babel/preset-env',
			'@babel/preset-typescript',
			'@babel/preset-react'],
	};
};
