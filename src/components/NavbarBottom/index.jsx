export const NavbarBottom = () => {
  return (
    <nav className="container mx-auto px-4 mt-4">
        <ul className="bg-white rounded flex justify-center items-center gap-2 p-4 text-slate-600 font-semibold">
            <li><a href="#" className="text-blue-500">Todas</a></li>
            <li><a href="#">Pendientes</a></li>
            <li><a href="#">Completadas</a></li>
        </ul>
    </nav>
  )
}
