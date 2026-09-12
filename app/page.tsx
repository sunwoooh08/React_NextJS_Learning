const NameDisplayer = (name: String) => {
  return (
    <main>
      <h1>Hello, {name}!</h1>
    </main>
  );
}

export default function Home() {
  const name = "Sunwoo";
  
  return NameDisplayer(name);
}