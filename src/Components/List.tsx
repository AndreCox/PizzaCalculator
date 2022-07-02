import React, { useEffect, useState } from 'react';
import Pizza from './Pizza';
import { observer } from 'mobx-react-lite';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { store } from '../Store';

const List = observer(({ pizzas, ...props }: any) => {
  return (
    <div className="">
      <Flipper flipKey={store.sortedPizzaList()}>
        {store.sortedPizzaList().map((d, i: any) => (
          <Flipped key={d.id} flipId={d.id}>
            <Pizza {...d} index={i} id={d.id} />
          </Flipped>
        ))}
      </Flipper>
    </div>
  );
});

export default List;
