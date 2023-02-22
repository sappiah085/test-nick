import BottomNav from "./components/bottomNav";
import Feature from "./components/feature";
import JointCard from "./components/jointCard";
import Search from "./components/search";
import TopNav from "./components/topNav";

function App() {
  return (
    <div className="max-w-sm gap-4 min-h w-full flex flex-col p-6 items-center mx-auto relative">
      <TopNav />
      <Feature />
      <Search />
      <h3 className="pl-3 self-start font-bold text-xl">Food Joints 🍔</h3>
      {[1, 2, 3, 44, 5, 6, 7].map((el) => (
        <JointCard key={el} />
      ))}
      <BottomNav />
    </div>
  );
}

export default App;
