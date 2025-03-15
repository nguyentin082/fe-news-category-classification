import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';

const COLORS = ['#3B7080', '#D1495B', '#E59F3A', '#F4D35E', '#A0C4FF'];

interface BarData {
    name: string;
    value: number;
}

interface MyBarChartProps {
    classes: string[];
    probability: number[][];
}

const MyBarChart: React.FC<MyBarChartProps> = ({ classes, probability }) => {
    const chartData: BarData[] = classes.map((name, index) => ({
        name: name.replace(/\b\w/g, (char) => char.toUpperCase()),
        value: probability[0][index] * 100, // Chuyển thành phần trăm
    }));

    return (
        <div className="w-full h-[300px] flex justify-center items-center col-span-2">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                    <XAxis
                        type="number"
                        domain={[0, 100]}
                        tick={{ fontSize: 12 }}
                    />
                    <YAxis
                        dataKey="name"
                        type="category"
                        width={100} // Tăng chiều rộng để không mất chữ
                        tick={{ fontSize: 14 }} // Tăng font chữ
                    />
                    <Tooltip
                        formatter={(value: number) => `${value.toFixed(2)}%`}
                    />{' '}
                    <Bar dataKey="value">
                        {chartData.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyBarChart;
