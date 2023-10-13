module.exports = {
	moduleFileExtensions: [
		// 测试的文件类型
		'ts',
		'js',
		'jsx',
		'tsx',
		'json'
	],
	transform: {
		// 转化方式, 匹配的文件要经过转译才能被识别，否则会报错
		'^.+\\.tsx?$': require.resolve('ts-jest'),
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
			require.resolve('jest-transform-stub'),
		'^.+\\.jsx?$': require.resolve('babel-jest')
	},
	transformIgnorePatterns: ['/node_modules/'], // 转化时忽略node_modules // support the same @ -> src alias mapping in source code
	moduleNameMapper: {
		// 模块映射，把别名映射到真正的路径下
		'^@/(.*)$': '<rootDir>/src/$1'
	}, // testEnvironment: 'jest-environment-jsdom-fifteen', // serializer for snapshots
	// snapshotSerializers: ['jest-serializer-vue'], // 对vue的组件做snapshot测试时使用jest-serializer-vue 第三方模块对快照做格式化
	testMatch: ['**/?(*.)+(spec|test|unit).[jt]s?(x)'], // https://github.com/facebook/jest/issues/6766
	testURL: 'http://localhost/'
}
