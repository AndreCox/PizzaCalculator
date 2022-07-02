import React from 'react';
import Card from './Card';
import Input from './Input';
import { store } from '../Store';
import { observer } from 'mobx-react-lite';

const Pizza = observer(
  ({ size, price, area, id, ppi, index, ...props }: any) => {
    return (
      <Card {...props}>
        <div className="flex flex-row">
          <h1 className="text-2xl">{index}</h1>
          <Input
            placeholder="Size In Inches"
            value={Number(size)}
            onChange={(e: any) => {
              console.log(id);
              // if empty, set to 0
              if (e.target.value === '') {
                store.sortedPizzaList()[index].size = 0;
                return;
              }
              // check if the value is a number
              if (Number(e.target.value)) {
                store.sortedPizzaList()[index].size = e.target.value;
              }
            }}
          />
          <Input
            placeholder="Price"
            value={Number(price)}
            onChange={(e: any) => {
              console.log(e.target.value);
              // if empty, set to 0
              if (e.target.value === '') {
                store.sortedPizzaList()[index].price = 0;
                return;
              }
              // check if the value is a number
              if (Number(e.target.value)) {
                store.sortedPizzaList()[index].price = e.target.value;
              }
              // check if the value is a decimal
              if (Number(e.target.value).toString().includes('.')) {
                store.sortedPizzaList()[index].price = e.target.value;
              }
            }}
          />
        </div>
        <p>Area: {area}in²</p>
        <p>Price Per Inch² {ppi}</p>
      </Card>
    );
  },
);

export default Pizza;
