describe('calcMonthlyPayment', function() {
  it('should handle rates with 3 decimal places', function () {
    const userValues = {
      amount: 100000,
      years: 30,
      rate: 2.275
    };
    expect(calcMonthlyPayment(userValues)).toEqual('383.52');
  })
})

describe('calcMonthlyPayment', function() {
  it('should calculate monthly rate correctly', function () {
    const userValues = {
      amount: 100000,
      years: 10,
      rate: 6
    };
    expect(calcMonthlyPayment(userValues)).toEqual('1110.21');
  })
})

describe('calcMonthlyPayment', function () {
  it('should return a result with 2 decimal places', function () {
    const userValues = {
      amount: 500000,
      years: 30,
      rate: 2.5
    };
    expect(calcMonthlyPayment(userValues)).toEqual('1975.60');
  })
})

describe('calcMonthlyPayment', function() {
  it('should return NaN if userValues are left blank', function () {
    const userValues = {
      amount: undefined,
      years: undefined,
      rate: undefined,
    };
    expect(calcMonthlyPayment(userValues)).toEqual('NaN');
  })
})

describe('calcMonthlyPayment', function() {
  it('should calculate loan amount correctly for very high loan amounts', function () {
    const userValues = {
      amount: 5000000,
      years: 30,
      rate: 2.5,
    };
    expect(calcMonthlyPayment(userValues)).toEqual('19756.04');
  })
})







