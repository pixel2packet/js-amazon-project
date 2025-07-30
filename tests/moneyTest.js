import {formatCurrency} from '../scripts/utils/money.js';


console.log('Test suite: formatCurrency');

if (formatCurrency(2095) === '20.95') {
    console.log('   Test case 1(2095-20.95): Passed Successfully');
} else {
    console.log('   Test case 1(2095-20.95): Failed');
}

if (formatCurrency(0) === '0.00') {
    console.log('   Test case 2(0-0.00): Passed Successfully');
} else {
    console.log('   Test case 2(0-0.00): Failed');
}

if (formatCurrency(2000.5) === '20.01') {
    console.log('   Test case 3(2000.5-20.01): Passed Successfully');
} else {
    console.log('   Test case 3(2000.5-20.01): Failed');
}