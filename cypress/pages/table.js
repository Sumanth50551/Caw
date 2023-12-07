class tablePage{

  elements={

      summaryButton: () =>  cy.get('summary'),
      tableData:() =>       cy.get('#jsondata'),
      refreshButton:() =>      cy.get('#refreshtable'),
      tablerowdata:() =>       cy.get('#tablehere tr'),
     

  }

  SummaryButtonClick(){

      this.elements.summaryButton().click();
  
  }

  fillData(tableData){

      this.elements.tableData().clear();
      this.elements.tableData().type(tableData,{ parseSpecialCharSequences: false });
  
  }

  RefreshButton(){

      this.elements.refreshButton().click();
  
  }

  verifyData(data){
     
      this.elements.tablerowdata().next().each(($row, index) => {
          cy.wrap($row).find('td').as('tableData');
          
          cy.get('@tableData').eq(0).invoke('text').then((name) => {
           
              expect(name.trim()).to.equal(data[index].name);
           
          });
    
          cy.get('@tableData').eq(1).invoke('text').then((age) => {
           
              expect(age.trim()).to.equal(data[index].age.toString());
           
          });
    
          cy.get('@tableData').eq(2).invoke('text').then((gender) => {
           
              expect(gender.trim()).to.equal(data[index].gender);
            });
          });
      
  }
  

 
}

module.exports = new tablePage();