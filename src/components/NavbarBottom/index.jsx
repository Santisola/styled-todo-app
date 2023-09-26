/* eslint-disable react/prop-types */
export const NavbarBottom = ({ page, onNav }) => {
  return (
    <nav className="container mx-auto px-4 mt-4">
        <ul className="bg-white rounded flex justify-center items-center gap-2 p-4 text-slate-600 font-semibold">
            <li>
              <a
                href="#"
                onClick={() => onNav('todas')}
                className={`${page === 'todas' ? 'text-blue-500' : ''}`}
              >Todas</a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => onNav('pendientes')}
                className={`${page === 'pendientes' ? 'text-blue-500' : ''}`}
              >Pendientes</a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => onNav('completadas')}
                className={`${page === 'completadas' ? 'text-blue-500' : ''}`}
              >Completadas</a>
            </li>
        </ul>
    </nav>
  )
}
