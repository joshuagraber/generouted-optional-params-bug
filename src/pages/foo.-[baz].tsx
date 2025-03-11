import { useParams } from '../router'

export default function BrokenRoute() {
  const { baz } = useParams('/foo/:baz?')
  
  return (
    <div>
      <h3>Broken Route</h3>
      <p>Optional parameter: {baz ?? 'Not provided'}</p>
    </div>
  )
}
