import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { useState } from 'react';

type Props = {
    index: number;
    item:  Item;
    onExcluir: (index: number) => void
}
export const TableItem = ({ index, item, onExcluir }: Props) => {

  return(
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>

      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>    
      </C.TableColumn>

      <C.TableColumn>{item.title}</C.TableColumn>

      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
        </C.Value>
      </C.TableColumn>

      <C.TableColumn>
        <button onClick={(e) => onExcluir(index)}>Excluir</button>
      </C.TableColumn>

    </C.TableLine>
  );
};