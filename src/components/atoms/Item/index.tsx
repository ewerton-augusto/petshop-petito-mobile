import React from 'react';
import { Text } from 'react-native';

interface ItemProps {
  nome: string;
  preco: number;
  descricao: string;
}

const Item: React.FC<ItemProps> = ({ nome, preco, descricao }) => {
  return (
    <>
      <Text>{nome}</Text>
      <Text>{preco}</Text>
      <Text>{descricao}</Text>
    </>
  );
};

export default Item;
