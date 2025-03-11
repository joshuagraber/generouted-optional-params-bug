import { Link } from '../router'

export default function HomePage() {
  return (
    <div>
      <h1>Generouted Bug Reproduction</h1>
      <ul>
        <li>
          <Link to="/foo/:baz?" params={{ baz: 'test'}}>Broken route (/foo/test)</Link>
        </li>
        <li>
          <Link to="/foo/:baz?" params={{}}>Broken route base (/foo)</Link>
        </li>

        <li>
          <Link to="/bar/:baz?" params={{ baz: 'test'}}>Working route (/bar/test)</Link>
        </li>
        <li>
          <Link to="/bar/:baz?" params={{}}>Working route base (/bar)</Link>
        </li>
      </ul>
    </div>
  )
}
