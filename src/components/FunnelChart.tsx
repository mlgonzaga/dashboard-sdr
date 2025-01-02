
import { Funnel, FunnelConfig } from '@ant-design/plots';

interface DataItem {
  action: string;
  pv: number;
}

const FunnelChart: React.FC = () => {
  const data: DataItem[] = [
    { action: 'Grupo 1', pv: 50000 },
    { action: 'Grupo 2', pv: 35000 },
    { action: 'Grupo 3', pv: 25000 },
    { action: 'Grupo 4', pv: 15000 },
    { action: 'Grupo 5', pv: 8000 },
    { action: 'Grupo 6', pv: 2000 },

  ];

  if (data.length === 0) {
    return <div>Não há dados a serem exibidos</div>;
  }

  

  const config: FunnelConfig = {
    data,
    xField: 'action',
    yField: 'pv',
    shapeField: 'pyramid',
    label: [
      {
        text: (d: DataItem) => d.pv.toString(),
        position: 'inside',
        fontSize: 16,
      },
      {
        render: (_:string, __:string, i: number) => {
          if (i>0)
            return (
              <div
                style={{
                  height: 1,
                  width: 30,
                  background: '#aaa',
                  margin: '0 20',
                }}
              ></div>
            );
        },
        position: 'top-right',
      },
      {
        text: (d: DataItem, i: number, data: DataItem[]) => {
          if (i) return ((d.pv / data[i - 1].pv) * 100).toFixed(2) + '%';
        },
        position: 'top-right',
        textAlign: 'left',
        textBaseline: 'middle',
        dx: 40,
      },
    ],
  };

  return <Funnel {...config} />;
};

export default FunnelChart;


