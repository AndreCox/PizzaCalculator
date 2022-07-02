import {
  action,
  makeAutoObservable,
  observable,
  autorun,
  reaction,
  configure,
} from 'mobx';

//define store class which will be used to store data, add extra states here
configure({ enforceActions: 'never' });

class Store {
  //define your data here
  modalOpen = false;
  pizzaList = [
    {
      id: 0,
      name: 'Medium',
      size: 15,
      price: '16',
      area: 0,
      ppi: 0,
    },
    {
      id: 1,
      name: 'Small',
      size: 10,
      price: '10',
      area: 0,
      ppi: 0,
    },
    {
      id: 2,
      name: 'Large',
      size: 20,
      price: '22',
      area: 0,
      ppi: 0,
    },
  ];

  constructor() {
    makeAutoObservable(this);
    for (let i = 0; i < this.pizzaList.length; i++) {
      this.pizzaList[i].area =
        Math.pow(this.pizzaList[i].size / 2, 2) * Math.PI;
    }
    autorun(() => {
      for (let i = 0; i < this.pizzaList.length; i++) {
        this.pizzaList[i].area =
          Math.pow(this.pizzaList[i].size / 2, 2) * Math.PI;

        this.pizzaList[i].ppi =
          Number(this.pizzaList[i].price) / this.pizzaList[i].area;
      }
    });
  }
  //you can add functions to manipulate data here
  sortedPizzaList = () => {
    return this.pizzaList.slice().sort((a, b) => {
      return a.ppi - b.ppi;
    });
  };
}

export const store = new Store();
