export function ClothCard({ cloth_url }) {
  return (
    <Card>      
      <img class="w-full block rounded-b" src= { `../images/${cloth_url}` } />
    </Card>
  );
}