import { render, screen } from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';


test('renders learn react link', () => {
  TestRenderer.create(<App/>);
});
