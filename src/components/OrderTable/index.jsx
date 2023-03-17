import { Container } from './styles'

export function OrderTable() {
  const isAdmin = false

  return (
    <Container>
      <main>
        <h1>Order history</h1>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Code</th>
              <th>Detailing</th>
              <th>DateTime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {isAdmin ? (
                <td>
                  <select name='type'>
                    <option value='pending'>🔴 Pending</option>
                    <option value='preparing'>🟡 Preparing</option>
                    <option value='delivered'>🟢 Delivered</option>
                  </select>
                </td>
              ) : (
                <td>
                  <span>🔴 Pending</span>
                </td>
              )}

              <td>
                <p>00000004</p>
              </td>
              <td>
                <p>1 x Radish Salad, 1 x Parma Toast</p>
              </td>
              <td>
                <p>05/20 at 18h00</p>
              </td>
            </tr>

            <tr>
              {isAdmin ? (
                <td>
                  <select name='type'>
                    <option value='pending'>🔴 Pending</option>
                    <option value='preparing'>🟡 Preparing</option>
                    <option value='delivered'>🟢 Delivered</option>
                  </select>
                </td>
              ) : (
                <td>
                  <span>🔴 Pending</span>
                </td>
              )}

              <td>
                <p>00000004</p>
              </td>
              <td>
                <p>1 x Radish Salad, 1 x Parma Toast</p>
              </td>
              <td>
                <p>05/20 at 18h00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </Container>
  )
}
