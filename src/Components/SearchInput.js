import React from 'react';
import {compose,withState,withHandlers} from 'recompose';

const SearchInput = ({searchText,onKeyDown,onChange}) =>
            (<input type='text' placeholder='Search' value={searchText} onChange={onChange} onKeyDown={onKeyDown} />);

const enhance = compose(
  withState('searchText','updateSearchText',''),
  withHandlers({
    onChange:props => e => props.updateSearchText(e.target.value),
    onKeyDown:props => e => {
      const {onSeachItem,searchText,updateSearchText} = props;
      if(e.keyCode === 13){
          onSeachItem(searchText);
          updateSearchText('');
      }
    }
  })
);

export default enhance(SearchInput);
