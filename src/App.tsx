import HeroSection from './components/HeroSection';

function App() {
  console.log('App component rendering');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50">
      <div className="p-4 text-red-500">Test Element</div>
      <HeroSection />
    </div>
  );
}

export default App;