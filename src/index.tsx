import { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import About from './pages/About';
import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition  } from 'react-transition-group';
import NavBar from './NavBar';

interface RoutesI {
  path: string,
  name: string,
  element: JSX.Element,
  nodeRef: any
}

const routes: RoutesI[] = [
  {
    path: "/",
    name: 'Main',
    element: <Main/>,
    nodeRef: createRef(),
  },
  {
    path: "/about",
    name: 'About',
    element: <About/>,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example/>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  }
])

function Example() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

  return (
    <body>
      <NavBar/>
    <div>
    <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          {(state) => (
            <div ref={nodeRef} className="page">
              {currentOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  </body>
);
};

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container)
root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
