import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import locale from 'antd/lib/locale/zh_CN'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './utils/store'
import { Color } from './styles/color'
import { createGlobalStyle } from 'styled-components'
import { getMenuRoutes } from './utils/menu.tsx'
import { Menus } from './consts/menu.tsx'
// import { RouterGuardian } from './components/RouterGuardian.tsx'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'PingFang SC',
    'PingFang TC',
    'PingFang HK',
    'Microsoft Yahei',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  body::-webkit-scrollbar,
  div::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  body::-webkit-scrollbar-track,
  div::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${Color.BackgroundWhite};
  }

  body::-webkit-scrollbar-thumb,
  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ccc;
  }

  textarea::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  textarea::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${Color.BackgroundWhite};
  }

  textarea::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ccc;
  }

  .ant-message {
    z-index: 10000;
  }

  .ant-btn {
    border-radius: 4px;
    box-shadow: none;
  }

  .ant-modal-content {
    border-radius: 8px;
  }

  .ant-radio-wrapper {
    color: ${Color.TextDarkGray};
  }

  .ant-image-preview-operations-wrapper {
    z-index: 6700;
  }

  .ant-popover-inner-content {
    padding: 16px;
  }

  .ant-popover-inner {
    border-radius: 4px;
  }

  .ant-popover-arrow {
    display: none;
  }

  .ant-input {
    background: ${Color.TableStreakBg};
    border: 1px solid ${Color.TableStreakBg};
    transition: all 0.5s;
    
    &:focus {
      background: ${Color.BackgroundWhite};
    }
  }
  .ant-input-affix-wrapper {
    background: ${Color.TableStreakBg};
    border: 1px solid ${Color.TableStreakBg};
    transition: all 0.5s;
  }
  .ant-input-affix-wrapper-focused{
    background: ${Color.BackgroundWhite};
  }
  
  .ant-input-disabled, .ant-input[disabled], .ant-input-affix-wrapper-disabled {
    background: ${Color.DisabledBg};
    border: 1px solid ${Color.TableStreakBg};
  }
  
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: ${Color.TableStreakBg};
    transition: all 0.5s;
    border-color: ${Color.TableStreakBg};
  }
  .ant-select-disabled.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: ${Color.TableStreakBg};
    transition: all 0.5s;
  }

  .ant-picker {
    width: 100%;
    background: ${Color.TableStreakBg};
    border: 1px solid ${Color.TableStreakBg};
    transition: all 0.5s;
  }
  .ant-picker:not(.ant-picker-disabled).ant-picker-status-error {
    background: ${Color.TableStreakBg};
  }
  .ant-picker.ant-picker-disabled {
    border: 1px solid ${Color.TableStreakBg};
  }
  .ant-picker .ant-picker-suffix {
    color: ${Color.TextThirdly};
  }
  .ant-btn-link {
    color: ${Color.Primary};
  }
  .ant-btn-text {
    padding: 0;
    color: ${Color.Primary};
    &>span {
      text-decoration: underline;
    }
  }
  .ant-table-tbody {
    transition: all 0.5s;
  }
  .ant-table-tbody tr:nth-child(2n-1) {
    background-color: ${Color.BackgroundTable};
  }
  .ant-table-tbody tr:nth-child(2n-1) .ant-table-cell-fix-right {
    background: ${Color.BackgroundTable};
  }
  .ant-table-cell-row-hover {
    background: ${Color.TableCheckedBg} !important;
  }
  .ant-btn-primary {
    background-color: ${Color.Primary};
  }
  @keyframes opacity-animate {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<ConfigProvider
			locale={locale}
			theme={{
				token: {
					colorPrimary: Color.Primary
				}
			}}
		>
			<BrowserRouter>
				<>
					<GlobalStyle />
					<Routes>
						<Route path='/' element={<App />}>
							{getMenuRoutes(Menus)}
						</Route>
						<Route path='*' element={<Navigate replace to='/' />} />
					</Routes>
				</>
			</BrowserRouter>
		</ConfigProvider>
	</Provider>
)
