import Header from "./components/Header";
import Entry from "./components/Entry";
import "./App.css";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.key} entry={entry} />;
  });
  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
