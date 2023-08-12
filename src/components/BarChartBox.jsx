import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import '../assets/scss/components/BarChartBox.scss'
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    }   
];
const BarChartBox = ({dataShops}) => {
    console.log("here is data shops", dataShops);
    return (
        <div className='admin-barChartBox'>
            <h1>Tổng doanh thu các shop</h1>
            <ResponsiveContainer width="98%" height={250}>
                <BarChart width={150} height={40} data={dataShops}>
                    <XAxis dataKey="shopName" />
                    <Tooltip
                        contentStyle={{ background: "blue" }}
                        labelStyle={{ display: "none" }} 
                        cursor={{fill: "none"}}
                    />                        
                    <Bar dataKey="revenue" fill="#fc5209" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartBox