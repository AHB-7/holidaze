import { Navbar } from "./components/global/navbar";
import { AppRouter } from "./routes/routes";

function App() {
    return (
        <>
            <Navbar />
            <AppRouter />
        </>
    );
}

export default App;
