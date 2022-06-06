import Post from './Post/Post'

const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg'
function App() {
  return (
    <div>
      <Post imageUrl={imageUrl} imageAlt='placeholder' />
    </div>
  );
}

export default App;
