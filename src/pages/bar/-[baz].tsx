import { useParams } from '../../router'

export default function WorkingRoute() {
  const { baz } = useParams('/bar/:baz?')
  
  return (
    <div>
      <h3>Working Route</h3>
      <p>Optional parameter: {baz ?? 'Not provided'}</p>
    </div>
  )
}
