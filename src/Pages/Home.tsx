import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Pizza,
  List,
  Action,
  ActionModal,
} from './../Components';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { store } from './../Store';

interface AppProps {}

const Home = observer(({}: AppProps) => {
  // Return the App component.
  return (
    <>
      <h1>Home</h1>
      <List pizzas={store.sortedPizzaList()} />
      <Action
        className="bottom-12 right-4"
        onClick={() => (store.modalOpen = true)}
      />
      <ActionModal open={store.modalOpen}>action modal is open</ActionModal>
    </>
  );
});

export default Home;
