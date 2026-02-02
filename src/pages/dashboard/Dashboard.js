import React from 'react'
import './Dashboard.css'
import { DollarSign, Package, Tag, Users } from 'lucide-react'
import Kpi from '../../components/cards/Kpi'
import Sales from '../../components/charts/sales/Sales'
import ProductPie from '../../components/charts/products/ProductPie'

export default function Dashboard() {

    // An array for for the card data
    const kpiCards = [
        { cardName: 'users-card active', cardIcon: <Users size={24} stroke="#3b82f6" />, cardText: 'Total Users', cardStat: '342' },
        { cardName: 'revenue-card', cardIcon: <DollarSign size={24} stroke="#16a34a" />, cardText: 'Total Revenue', cardStat: '$10000' }, 
        { cardName: 'orders-card', cardIcon: <Package size={24} stroke="#facc15" />, cardText: 'Total Orders', cardStat: '130' },  
        { cardName: 'top-product-sold', cardIcon: <Tag size={24} stroke="#a79bfa" />, cardText: 'Top Product Sold', cardStat: '3' }
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

    const productRevenueData = [
        { name: "Product A", revenue: 4000 },
        { name: "Product B", revenue: 3000 },
        { name: "Product C", revenue: 2000 },
        { name: "Product D", revenue: 1000 }
    ];


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
            <ProductPie data={productRevenueData} />
            <Sales data={monthlySalesData} />
        </div>
    </section>
  )
}