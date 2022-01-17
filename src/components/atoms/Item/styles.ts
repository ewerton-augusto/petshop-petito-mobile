import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/styles';

export default StyleSheet.create({
  informacao: {
    padding: 24,
  },
  nome: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calculo: {
    color: colors.dark,
    fontSize: 14,
    marginVertical: 8,
  },
  preco: {
    color: colors.purple,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: {
    color: colors.dark,
    fontSize: 16,
    marginRight: 8,
  },
  quantidade: {
    width: 42,
  },
});
