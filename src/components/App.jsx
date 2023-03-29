import useUpdatingClock from 'hooks/useUpdatingClock'

export default function App() {
  const {hour, minutes, seconds, amPm} = useUpdatingClock()

  return (
    <div className="df flex-col vh-100">
      <header className="pv24 bg-gold black-80 tc">
        <h1 className="mt0 mb0">LISTA DE ALUMNOS</h1>
        <div>By MARIO PRADO</div>
      </header>

      <section className="flex-grow-1 bg-black-80 fw4 white-80 tc pt24">

        <div>
          Apartado de nombre, carrera, especialidad{' '}
          <code>
            <span className="b white"></span>
          </code>
        </div>
        ---
        <div>
        </div>
        <div>
          <span className="gold">MATERIAS</span>
        </div>

        <div className="pa16 f-1-5em">
          {hour}:{minutes}:{seconds}
          <span className="f-initial pl4">{amPm}</span>
        </div>
      </section>
    </div>
  )
}
