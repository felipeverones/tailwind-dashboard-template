import React from 'react';
import BarChart from '../../charts/BarChart01TaxaAnual';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCardTaxaAprovação() {

  const chartData = {
    labels: [
      '2018', '2019', '2020', '2021', '2022', '2023',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Não-Aprovados',
        data: [
          10, 11, 15, 14, 19, 10,
        ],
        backgroundColor: tailwindConfig().theme.colors.sky[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[600],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Blue bars
      {
        label: 'Aprovados',
        data: [
          40, 35, 37, 30, 20, 41,
        ],
        backgroundColor: tailwindConfig().theme.colors.violet[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Taxa de Aprovação</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCardTaxaAprovação;
