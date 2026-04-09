import React, { useEffect } from 'react'
import './Analytics.css'
import RevenueChart from '../../components/charts/revenue/RevenueChart'
import Sales from '../../components/charts/sales/Sales'
import OrdersChart from '../../components/charts/orders/Orders'
import BestProduct from '../../components/charts/bestsellingproduct/BestProduct'
import LowStockTable from '../../components/tables/LowStocks'

export default function Analytics() {
  
  // An array for the revenue chart
  const revenueData = [
    { date: 'Mon', revenue: 12000 },
    { date: 'Tue', revenue: 14500 },
    { date: 'Wed', revenue: 13800 },
    { date: 'Thu', revenue: 16200 },
    { date: 'Fri', revenue: 19000 },
    { date: 'Sat', revenue: 21000 },
    { date: 'Sun', revenue: 18500 }
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

  // An array for for the Orders chart
  const ordersData = [
    { month: 'Jan', orders: 120 },
    { month: 'Feb', orders: 150 },
    { month: 'Mar', orders: 130 },
    { month: 'Apr', orders: 160 },
    { month: 'May', orders: 180 },
    { month: 'Jun', orders: 200 },
    { month: 'Jul', orders: 220 },
    { month: 'Aug', orders: 210 },
    { month: 'Sep', orders: 190 },
    { month: 'Oct', orders: 230 },
    { month: 'Nov', orders: 250 },
    { month: 'Dec', orders: 300 }
  ];

  // Array for the pie chart
  const bestSellingProducts = [
    { name: 'Laptop', sold: 120 },
    { name: 'Smartphone', sold: 90 },
    { name: 'Headphones', sold: 60 },
    { name: 'Smartwatch', sold: 30 },
  ];

  // Array of colors for each slice
  const COLORS = ['#16a34a', '#facc15', '#3b82f6', '#a79bfa'];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  return (
    <section
      className='analytics-page'
    >
      <h4>Reports & Analytics</h4>

      <div>
        <div className='mb-3'>
          <Sales data={monthlySalesData} />
        </div>

        <div className='graphs'>
          <RevenueChart data={revenueData} />
          <OrdersChart data={ordersData} />
        </div>

        <div className='graphs'>
          <BestProduct data={bestSellingProducts} colors={COLORS} />
          <LowStockTable />
        </div>
      </div>

    </section>
  )
}
