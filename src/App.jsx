// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCards from './components/MyCards';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header title='Adopta un perrito'/>
      <div className='cards'>
      <MyCards 
      image='/src/assets/imgs/chi.webp'
      name='Peke'
      description='Pequeños pero poderosos, los chihuahuas de pelaje largo son la raza de menor tamaño, pero poseen un gran corazón. Identificables al instante por su cabeza en forma de manzana y ojos de gacela, su mirada devota transmite la enorme calidez que se encuentra en su interior.'
      color='primary'
      desc='Chihuahuas'
      />
      
            
      <MyCards 
      image='/src/assets/imgs/pomerania.webp'
      name='Bombom'
      description='Originalmente son descendientes de los perros de trineo, aunque en la actualidad son mucho más pequeños: los pomerania son inteligentes, juguetones y están llenos de energía.'
      color='warning'
      desc='Pomerania'
      />

      <MyCards 
      image='/src/assets/imgs/Boston.webp'
      name='Dark'
      description='Alertas y afables, los Boston Terriers son perros amistosos y amorosos, fácilmente reconocibles por su distintivo pelaje blanco y negro, el cual les da ese efecto de "esmoquin".'
      color='success'
      desc='Boston Terrier'
      />

      <MyCards 
      image='/src/assets/imgs/Basset.webp'
      name='Dormilon'
      description='Los basset artesianos de Normandía son perros tenaces y de potente ladrido, con una nariz muy fina y que no tiran demasiado fuerte en la línea siguiendo el rastro de su marca.'
      color='dark'
      desc='Basset'
      />
      </div>
      <Footer />
    </>
  )
}

export default App
