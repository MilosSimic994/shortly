import ShortUrl from "./components/ShortUrl";

import Header from "./components/Header";
import ShortForm from "./components/ShortForm";
import MainNav from "./components/MainNav";

function App() {
  return (
    <main className="App">
      <MainNav />
      <Header />
      <ShortForm />
      <ShortUrl />
    </main>
  );
}

export default App;
