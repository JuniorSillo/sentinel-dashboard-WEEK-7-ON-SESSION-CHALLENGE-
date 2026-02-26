import DashboardLayout from './components/DashboardLayout';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import { useTickets } from './hooks/useTickets';

function App() {
  const { tickets, isLoading, error, addTicket } = useTickets();

  return (
    <DashboardLayout>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      <TicketForm onAddTicket={addTicket} />
      <TicketList tickets={tickets} />
    </DashboardLayout>
  );
}

export default App;