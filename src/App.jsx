import { Header, Footer, Services, About, Mid, Middle } from './components';

const App = () => {


  return (
    <div className='min-h-screen bg-[#0B0B0D] h-[480vh] max-[320px]:h-auto max-[768px]:h-auto max-[320px]:w-auto'>

      <Header />



      <Services />
      <About />
      <Mid />
      <Middle />
      <Footer />


    </div>
  )
}

export default App
