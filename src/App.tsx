import React, { createRef } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import './App.css';
import NavBar from "./NavBar";
import About from './pages/About';
import Main from './pages/Main';

interface PropsI {
  path: string,
  element: JSX.Element,
  nodeRef: any
}

interface MatchI {
  match: any
}

  
const routes: PropsI[] = [
  {
    path: "/",
    element: <Main/>,
    nodeRef: createRef(),
  },
  {
    path: "/about",
    element: <About/>,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  }
])

function App(): JSX.Element {
  
  const location = useLocation();
  const currentOutlet = useOutlet();

  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

  return (
    <>
      <div>
        <NavBar/>
      </div>
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
    </>
  )
  }

  const container = document.getElementById('root') as Element | DocumentFragment
  const root = createRoot(container)
  root.render(<RouterProvider router={router} />)
  // return (
  //   <Router>
  //     <Routes>
  //       {routes.map(({ path, Component }) => (
  //         <React.Fragment key={`fragment-${path}`}>
  //           <Route key={path} path={path}>
  //           <>
  //           {({ match }: MatchI): React.ReactNode => (
  //             <CSSTransition
  //               in={match !== null}
  //               timeout={300}
  //               classNames="page"
  //               unmountOnExit
  //             >
  //               <div className="page">
  //                 <Component />
  //               </div>
  //             </CSSTransition>
  //           )}
  //           </>
  //         </Route>
  //       </React.Fragment>
  //       ))}
  //     </Routes>
  //   </Router>
  // );

  
  export default App;

   // <header className="App-header">
    //       <RouterProvider router={router}/>
    // </header>
