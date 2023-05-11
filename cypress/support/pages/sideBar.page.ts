export default class SideBar {

getLaunchesButton(){
    return cy.contains('div', 'Launches');
}

clickLaunchesButton(){
    return this.getLaunchesButton().click();
} 
  
}