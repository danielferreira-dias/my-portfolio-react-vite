import './App.css'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="w-full font-serif overflow-auto">
        <section className="h-screen flex items-center justify-center text-white">
          <div>
            <h1 className='text-center text-2xl'>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center text-white">
          <div>
            <h1 className='text-center text-2xl'>Skills</h1>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center text-white">
          <div>
            <h1 className='text-center text-2xl'>Experience</h1>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center text-white">
          <div>
            <h1 className='text-center text-2xl'>Projects</h1>
          </div>
        </section>
        <section className="h-screen flex items-center justify-center text-white">
          <div>
            <h1 className='text-center text-2xl'>Contacts</h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App
