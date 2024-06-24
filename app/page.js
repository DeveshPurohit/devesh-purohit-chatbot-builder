import Navbar from "@/Components/Navbar";
import ReactflowContainer from "@/Components/ReactflowContainer/ReactflowContainer";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
     <Navbar />
     <ReactflowContainer />
    </main>
  );
}
