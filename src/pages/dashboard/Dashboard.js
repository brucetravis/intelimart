import React from 'react'
import './Dashboard.css'
import { DollarSign, Package, Tag, Users } from 'lucide-react'
import Kpi from '../../components/cards/Kpi'
import Sales from '../../components/charts/sales/Sales'
import BestProduct from '../../components/charts/bestsellingproduct/BestProduct'

export default function Dashboard() {

    // An array for for the card data
    const kpiCards = [
        { cardName: 'top-product-sold active', cardIcon: <Tag size={24} stroke="#a79bfa" />, cardText: 'Total Sales', cardStat: '3' },
        { cardName: 'orders-card', cardIcon: <Package size={24} stroke="#facc15" />, cardText: 'Total Orders', cardStat: '130' },
        { cardName: 'users-card', cardIcon: <Users size={24} stroke="#3b82f6" />, cardText: 'Total Users', cardStat: '342' },
        { cardName: 'revenue-card', cardIcon: <DollarSign size={24} stroke="#16a34a" />, cardText: 'Total Revenue', cardStat: '$10000' },
        { cardName: 'lowStock-card', cardIcon: <DollarSign size={24} stroke="#16a34a" />, cardText: 'Low Stock', cardStat: '$10000' }
    ]

    // An array for the Sales chart
    const monthlySalesData = [
        { month: 'Jan', sales: 120 },
        { month: 'Feb', sales: 150 },
        { month: 'Mar', sales: 130 },
        { month: 'Apr', sales: 160 },
        { month: 'May', sales: 180 },
        { month: 'Jun', sales: 200 },
        { month: 'Jul', sales: 220 },
        { month: 'Aug', sales: 210 },
        { month: 'Sep', sales: 190 },
        { month: 'Oct', sales: 230 },
        { month: 'Nov', sales: 250 },
        { month: 'Dec', sales: 300 }
    ];

    const bestSellingProducts = [
        { name: 'Laptop', sold: 120 },
        { name: 'Smartphone', sold: 90 },
        { name: 'Headphones', sold: 60 },
        { name: 'Smartwatch', sold: 30 }
    ];

    // Array of colors for each slice
    const COLORS = ['#16a34a', '#facc15', '#3b82f6', '#a79bfa'];


  return (
    <section
        className='dashboard-page'
    >
        <div
            className='dashboard-cards'
        >
            {kpiCards.map((card, index) => (
                <Kpi
                    key={index}
                    cardName={card.cardName}
                    cardIcon={card.cardIcon}
                    cardText={card.cardText}
                    cardStat={card.cardStat}
                />
            ))}
        </div>

        <div
            className='dashboard-graphs'
        >
            <BestProduct data={bestSellingProducts} colors={COLORS} />
            <Sales data={monthlySalesData} />
        </div>
    </section>
  )
}