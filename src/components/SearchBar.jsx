export default function SearchBar(props) {
   const onClickFunc = (charId = 'future API charId') => props.onSearch();
   return (
      <div>
         <input type='search' />
      <button onClick={onClickFunc}>Agregar</button>
      </div>
   );
}
