import Card from "./Components/Card";
import Tasks from "./Pages/Tasks";

export default function App() {
  return (
    <div className='App'>
      <Card title={'Tasks'}>
        <Tasks />
      </Card>
    </div>
  );
}
