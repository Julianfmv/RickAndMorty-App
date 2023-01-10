import Card from './Card';

export default function Cards(props) {
   const { characters } = props;

   const charsMap = characters.map(({name, species, gender, image}, idx) => {
      return <Card
      key = {idx}
      name = {name}
      species = {species}
      gender = {gender}
      image = {image}
      onClose = {() => alert('Emulamos que se cierra la card')}
      />
   })
  

   return (
      <div>
         {charsMap}
      </div>
   )
}
