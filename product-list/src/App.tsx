import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 space-y-16">
      <Home />
      <Wishlist />
      <Search />
    </div>
  );
}

export default App;