import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', income: 12000, expense: 10000 },
  { month: 'Feb', income: 15000, expense: 11000 },
  { month: 'Mar', income: 10000, expense: 13000 },
  { month: 'Apr', income: 17000, expense: 14000 },
  { month: 'May', income: 21000, expense: 18000 },
  { month: 'Jun', income: 25000, expense: 20000 },
  { month: 'Jul', income: 23000, expense: 24000 }
];

function GraphSection() {
  return (
    <div className="w-full h-80 bg-white rounded-2xl shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Cash Flow</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" horizontal={false} vertical={false} />
          <XAxis dataKey="month" axisLine={false} />
          <YAxis
            domain={[0, 30000]}
            tickFormatter={(value) => `${value / 1000}k`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#6366f1" name="Income" barSize={24} radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill="#facc15" name="Expense" barSize={24} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphSection;
