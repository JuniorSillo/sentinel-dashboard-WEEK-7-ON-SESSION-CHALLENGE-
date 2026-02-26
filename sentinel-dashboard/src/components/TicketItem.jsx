import React from 'react'

const TicketItem = () => {
  return (
    <div>
      <p><strong>ID:</strong>{ticket.id}</p>
      <p><strong>Descriptiopn:</strong>{ticket.description}</p>
      <p><strong>Priority:</strong>{ticket.priority}</p>
    </div>
  )
}

export default TicketItem
