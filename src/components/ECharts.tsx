import ReactEChartsCore from 'echarts-for-react/lib/core'
import * as echarts from 'echarts/core'
import { BarChart, PieChart } from 'echarts/charts'
import { EChartsOption } from 'echarts-for-react'
import { ScatterChart, EffectScatterChart } from 'echarts/charts'
import {
	GridComponent,
	TooltipComponent,
	LegendComponent,
	TitleComponent,
	ToolboxComponent,
	DataZoomComponent
} from 'echarts/components'

import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	PieChart,
	LegendComponent,
	CanvasRenderer,
	BarChart,
	ScatterChart,
	EffectScatterChart,
	ToolboxComponent,
	DataZoomComponent
])

type EChartProps = {
	option: EChartsOption
}

export const ECharts = ({ option }: EChartProps) => (
	<ReactEChartsCore
		echarts={echarts}
		option={option}
		style={{ height: '100%', width: '100%' }}
	/>
)
