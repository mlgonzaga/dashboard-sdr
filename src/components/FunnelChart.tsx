

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const OtherFunnel: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current);

    const setOption = () => {
      const width = chartRef.current?.clientWidth || 0;

      // Ajuste responsivo para o legend
      const isSmallScreen = width < 600;
      const legendOrient = isSmallScreen ? 'vertical' : 'horizontal';
      const legendTop = isSmallScreen ? 'middle' : 0;
      const legendLeft = isSmallScreen ? 'right' : 0;

      const option: echarts.EChartsOption = {
        title: {
          text: '',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        legend: {
          data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
          orient: legendOrient,
          top: legendTop,
          left: legendLeft,
          itemGap: 5,
          textStyle: {
            fontSize: isSmallScreen ? 8 : 10,
          },
        },
        series: [
          {
            name: 'Funnel',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid',
              },
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: 'Visit' },
              { value: 40, name: 'Inquiry' },
              { value: 20, name: 'Order' },
              { value: 80, name: 'Click' },
              { value: 100, name: 'Show' },
            ],
          },
        ],
      };

      myChart.setOption(option);
    };

    setOption();

    const handleResize = () => {
      setOption();
      myChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      myChart.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className="w-full p-3" ref={chartRef} style={{ width: '100%', height: '350px' }} />;
};

export default OtherFunnel;
