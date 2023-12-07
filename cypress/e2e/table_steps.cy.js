const table = require("../pages/table");

describe('Dymanic data insertion and assert the results',()=>{


    it('verify table data dynamically',()=>{

        cy.fixture('testdata.json').then((data) => {
        cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
        table.SummaryButtonClick();
        table.fillData(JSON.stringify(data));
        table.RefreshButton();
        table.verifyData(data);
        
        });
        
        });
    });