import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

const Root = () => {
  return (
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  );
}

export default Root;