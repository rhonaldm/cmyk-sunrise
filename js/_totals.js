import { totals } from './_mockTotals.js';

const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
});

export function getTotals() {
  console.log('[ getTotals() ]',totals);
  const { totalAmount, totalSales, units } = totals;

  const uiTotals = document.querySelector('.totals');

  // inyects the values in both mobile and desktop divs:

  const uiTotalAmount = uiTotals.querySelectorAll('.totals__total-amount');
  uiTotalAmount.forEach((element) => (element.textContent = formatter.format(totalAmount)));

  const uiUnits = uiTotals.querySelectorAll('.totals__units');
  uiUnits.forEach((element) => (element.textContent = units));

  const uiTotalSales = uiTotals.querySelector('.totals__total-sales');
  uiTotalSales.textContent = formatter.format(totalSales);
}