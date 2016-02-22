var Actionwords = {
  iStartTheCoffeeMachine: function (lang) {
    this.sut.start(lang);
  },

  iShutdownTheCoffeeMachine: function () {
    this.sut.stop();
  },

  messageMessageShouldBeDisplayed: function (message) {
    expect(this.sut.get('message')).toEqual(message || "");
  },

  coffeeShouldBeServed: function () {
    expect(this.sut.get('coffeeServed')).toBeTruthy();
  },

  coffeeShouldNotBeServed: function () {
    expect(this.sut.get('coffeeServed')).toBeFalsy();
  },

  iTakeACoffee: function () {
    this.sut.takeCoffee();
  },

  iEmptyTheCoffeeGrounds: function () {
    this.sut.emptyGrounds();
  },

  iFillTheBeansTank: function () {
    this.sut.fillBeans();
  },

  iFillTheWaterTank: function () {
    this.sut.fillTank();
  },

  iTakeCoffeeNumberCoffees: function (coffee_number) {
    while ((coffee_number > 0)) {
      this.iTakeACoffee();
      coffee_number = coffee_number - 1;
    }
  },
  theCoffeeMachineIsStarted: function () {
    this.iStartTheCoffeeMachine();
  },
  fiftyCoffeesHaveBeenTakenWithoutFillingTheTank: function () {
    this.iTakeCoffeeNumberCoffees(30);
    this.iFillTheBeansTank();
    this.iEmptyTheCoffeeGrounds();
    this.iTakeCoffeeNumberCoffees(20);
    this.iFillTheBeansTank();
    this.iEmptyTheCoffeeGrounds();
  },
  thirtyEightCoffeesAreTakenWithoutFillingBeans: function () {
    this.iTakeCoffeeNumberCoffees(37);
    this.iEmptyTheCoffeeGrounds();
    this.iFillTheWaterTank();
    this.iTakeACoffee();
  }
};