const calc_screen = require('../src/screen/calc_screen')
const chai = require("chai")
const { expect } = chai

let result

describe('Moducore E2E - Kiosk Mode User Action Test', async () => {

    it('should validate results after doing the basic methematical operation by using calc application | TC_MOD_APP_CAL_01', async () => {
        console.log('------------------------------ || TC_MOD_APP_CAL_01 || ---------------------------------------')

        /* 
        Test Objective : Validate results after doing the basic methematical operation by using calc application
        Precondition : 
        - User is already open the Calculator Application

        Input 01 : - Perform Addition Operation
        Input 02 : - Perform Substraction Operation
        Input 03 : - Perform Multiplication Operation
        Input 04 : - Perform Division Operation
        Input 05 : - Perform Multiple Operations

        Expetced Outcome 01/02/03/04/05 : 
        - Verify the Result
        */

        console.log('----- Input 01 : Perform Addition Operation --------------------------------------------------')
        await calc_screen.data.pressCalcKey('Num_5')
        await calc_screen.data.pressCalcKey('Num_7')
        await calc_screen.data.pressCalcKey('Num_8')
        await calc_screen.data.pressCalcKey('Operator_Add')
        await calc_screen.data.pressCalcKey('Num_6')
        await calc_screen.data.pressCalcKey('Num_0')
        await calc_screen.data.pressCalcKey('Num_1')
        await calc_screen.data.pressCalcKey('Num_3')

        console.log('----- Expected Outcome 01 : Validate Results -------------------------------------------------')
        // 578 + 6013 = 6591
        result = await calc_screen.data.getResults()
        expect(result).to.equal(6591)
        await calc_screen.data.pressCalcKey('Operator_Clear')

        console.log('----- Input 02 : Perform Substraction Operation ----------------------------------------------')
        await calc_screen.data.pressCalcKey('Num_4')
        await calc_screen.data.pressCalcKey('Num_9')
        await calc_screen.data.pressCalcKey('Num_2')
        await calc_screen.data.pressCalcKey('Num_2')
        await calc_screen.data.pressCalcKey('Operator_Substract')
        await calc_screen.data.pressCalcKey('Num_2')
        await calc_screen.data.pressCalcKey('Num_0')
        await calc_screen.data.pressCalcKey('Num_1')
        await calc_screen.data.pressCalcKey('Num_5')

        console.log('----- Expected Outcome 02 : Validate Results -------------------------------------------------')
        // 4922 - 2015 = 2907
        result = await calc_screen.data.getResults()
        expect(result).to.equal(2907)
        await calc_screen.data.pressCalcKey('Operator_Clear')

        console.log('----- Input 03 : Perform Multiplication Operation --------------------------------------------')
        await calc_screen.data.pressCalcKey('Num_1')
        await calc_screen.data.pressCalcKey('Num_4')
        await calc_screen.data.pressCalcKey('Num_4')
        await calc_screen.data.pressCalcKey('Operator_Multiply')
        await calc_screen.data.pressCalcKey('Num_8')
        await calc_screen.data.pressCalcKey('Num_5')
        await calc_screen.data.pressCalcKey('Num_7')

        console.log('----- Expected Outcome 03 : Validate Results -------------------------------------------------')
        // 144 * 857 = 123408
        result = await calc_screen.data.getResults()
        expect(result).to.equal(123408)
        await calc_screen.data.pressCalcKey('Operator_Clear')

        console.log('----- Input 04 : Perform Division Operation --------------------------------------------------')
        await calc_screen.data.pressCalcKey('Num_7')
        await calc_screen.data.pressCalcKey('Num_4')
        await calc_screen.data.pressCalcKey('Num_8')
        await calc_screen.data.pressCalcKey('Num_1')
        await calc_screen.data.pressCalcKey('Operator_Divide')
        await calc_screen.data.pressCalcKey('Num_6')
        await calc_screen.data.pressCalcKey('Num_0')
        await calc_screen.data.pressCalcKey('Num_7')

        console.log('----- Expected Outcome 04 : Validate Results -------------------------------------------------')
        // 7481 / 607 = 12.32454695222
        result = await calc_screen.data.getResults()
        expect(result).to.equal(12.32454695222)
        await calc_screen.data.pressCalcKey('Operator_Clear')

        console.log('----- Input 05 : Perform Multiple Operations -------------------------------------------------')
        await calc_screen.data.pressCalcKey('Operator_SqRt')
        await calc_screen.data.pressCalcKey('Operator_Parans')
        await calc_screen.data.pressCalcKey('Num_7')
        await calc_screen.data.pressCalcKey('Num_8')
        await calc_screen.data.pressCalcKey('Operator_Multiply')
        await calc_screen.data.pressCalcKey('Num_9')
        await calc_screen.data.pressCalcKey('Operator_Divide')
        await calc_screen.data.pressCalcKey('Num_6')
        await calc_screen.data.pressCalcKey('Operator_Substract')
        await calc_screen.data.pressCalcKey('Num_1')
        await calc_screen.data.pressCalcKey('Num_7')
        await calc_screen.data.pressCalcKey('Operator_Parans')
        await calc_screen.data.pressCalcKey('Operator_Add')
        await calc_screen.data.pressCalcKey('Num_7')
        await calc_screen.data.pressCalcKey('Dec_Point')
        await calc_screen.data.pressCalcKey('Num_3')
        await calc_screen.data.pressCalcKey('Num_7')

        console.log('----- Expected Outcome 05 : Validate Results -------------------------------------------------')
        // √(78*9/6-17)+7.37 = 17.37
        result = await calc_screen.data.getResults()
        expect(result).to.equal(17.37)
        await calc_screen.data.pressCalcKey('Operator_Clear')
    })

})