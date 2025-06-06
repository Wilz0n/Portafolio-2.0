export default function Navbar() {
    
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-4">
        <li><a href="/">Home</a></li>
        <li><a href="/about">Sobre mí</a></li>
        <li><a href="/projects">Proyectos</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  );
}