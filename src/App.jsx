// import Greeting from "./Greeting";
// import Profile from "./Profile";
// import Counter from "./Counter";
// import ClickButton from "./ClickButton";
// import Toggle, { CheckLoginStatus } from "./Toggle";
// import Fruits from "./Fruits";
// import Logger from "./Logger";
// import NameForm from "./NameForm";
// import Layout from "./Layout";

// Concepts import
import { element } from "./basics/concept1-jsx/01_basic";
import { element2 } from "./basics/concept1-jsx/02_embed_expression";
import { element3 } from "./basics/concept1-jsx/03_attributes";
import Welcome from "./basics/concept1-jsx/04_component";
import CheckLoginStatus from "./basics/concept1-jsx/05_conditional_rendering";
import Welcome2, { greetElement, ShowName } from "./basics/concept1-jsx/06_exercise1";
import MyButton from "./basics/concept1-jsx/07_exercise2";
import MyLoginStatus from "./basics/concept1-jsx/08_exercise3";
import WelcomeProp from "./basics/concept2-components/01_functional_component";
import WelcomeLegacy from "./basics/concept2-components/02_legacy_component";
import UserCard from "./basics/concept2-components/03_props";
import Counter from "./basics/concept2-components/04_state";
import Greeting from "./basics/concept2-components/05_exercise1";
import Profile from "./basics/concept2-components/06_exercise2";
import { GreetPassProp, GreetDestructure, MultipleProp, DefaultProp, PropButton, ArrayProp } from "./basics/concept3-props/01_passing_props";
import { Increment, MyGreeting, ToDoList, Decrement, ClassCounter, ToggleOnOff, UserProfile, IncrementCounter } from "./basics/concept4-state/state";
import { ClickButton, GreetButton, InlineEvent, InputBox, SubmitForm } from "./basics/concept5-event-handling/event_handling";
import { CompGreet, ConditionalGreeting, ConditionalToggle, Dashboard, LoadData, Notification, Notify, TernaryGreeting } from "./basics/concept6-conditional-rendering/conditional_rendering";
import { DailyTodoList, EmployeeList, FruitList, Groceries, NameList, NestedListCategories, Users } from "./basics/concept7-lists-keys/lists_keys";
import { LifecycleMountCompo, HookMountCompo, LifecycleUpdateCompo, HookUpdateCompo, LifecycleUnmountCompo, HookUnmountCompo, Timer, HookTimer, DataFetcher, TaskCleaner } from "./basics/concept8-lifecycle-hooks/lifecycle_hooks";
import { CheckboxForm, ClickCounter, ControlledCheckBox, ControlledInput, FocusInput, LoginForm, NameForm, SelectForm, UncontrolledForm, ControlledLoginForm, ControlledDropdown } from "./basics/concept9-forms-controlled-components/forms_contolled_uncontrolled_components";
import { Card, Layout, MyGameApp, MyReusableButtons } from "./basics/concept10-component-composition/Component_Composition";
import { Parent, UserContext } from "./advanced/concept1-contentapi-propdrilling/01_ContextAPIPropDrilling";
import { ThemeProvider, Toolbar } from "./advanced/concept1-contentapi-propdrilling/02_ThemeContext";
import { DeeplyNested, UserProvider } from "./advanced/concept1-contentapi-propdrilling/03_UserContextDeeplyNested";
import { DeepComponent, LanguageProvider } from "./advanced/concept1-contentapi-propdrilling/04_LanguageContext";
import { CombineDashboard } from "./advanced/concept1-contentapi-propdrilling/05_CombineContextState";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./advanced/concept2-react-router/Navbar";
import Home from "./advanced/concept2-react-router/Home";
import About from "./advanced/concept2-react-router/About";
import Contact from "./advanced/concept2-react-router/Contact";
import Login from "./advanced/concept2-react-router/Login";
import MyDashboard, { DashboardHome } from "./advanced/concept2-react-router/MyDashboard";
import Settings from "./advanced/concept2-react-router/Settings";
import NotFound from "./advanced/concept2-react-router/NotFound";
import { GreetingWithLogger } from "./advanced/concept3-higher-order-components/HOC";
import { ProtectedDashboard } from "./advanced/concept3-higher-order-components/HOC2";
import { ProtectedProfile } from "./advanced/concept3-higher-order-components/ProfileHOC";
import { EnhancedProfile, ThemedProfile } from "./advanced/concept3-higher-order-components/Profile2";
import { Profile1, Profile2, Profile3 } from "./advanced/concept3-higher-order-components/ProfileHooksCustom";

import { AuthProviderHoc, AuthProviderRender, DataProvider, DataProvider2, MouseTracker, MouseTracker2, ThemeProviderContext, TimerProvider } from "./advanced/concept4-render-props/RenderProps";
import { CounterComponent, NameComponent, RefactoredComponent, TimerComponent, ToggleComponent, useWindowWidth } from "./advanced/concept5-custom-hooks/CustomHooks";
import { CallbackCounter, CallbackCounter2, ExpensiveCalc, ExpensiveCalc2, GreetingMemo, GreetingMemo2 } from "./advanced/concept6-performance-optimization/PerformanceOptimization";

// Basics:
/* 
function App() {
  // return (
  //   // Parent element
  //   <> 
  //     <div>
  //       <h1>Hello Suraj</h1>
  //       <p>This is JSX in action!</p>
  //     </div>

  //     <div>
  //       <Greeting name="Suraj Chauhan" />
  //     </div>

  //     <div>
  //       <Profile name="Ritesh" age={25} />
  //     </div>
  //     <div>
  //       <h1>State - Counter</h1>
  //       <Counter />
  //     </div>
  //     <div>
  //       <h1>Event Handling</h1>
  //       <ClickButton />
  //     </div>
  //     <div>
  //       <h1>Conditional Rendering</h1>
  //       <Toggle />
  //       <CheckLoginStatus />
  //     </div>
  //     <div>
  //       <h1>Lists & Keys</h1>
  //       <Fruits />
  //     </div>
  //     <div>
  //       <h1>Lifecycle & Hooks</h1>
  //       <Logger />
  //     </div>
  //     <div>
  //       <h1>Forms and Controlled Components</h1>
  //       <NameForm />
  //     </div>
  //     <div>
  //       <h1>Component Composition</h1>
  //       <Layout />
  //     </div>
  //   </> // closing parent element
  // );


  let user = "suraj";
  // const isLoggedIn = true;
  const isLoggedIn = false;
  
  return (
    <>
      <h1>Welcome to React Foundations</h1>
      {element}
      {element2}
      {element3}
      <Welcome />
      <CheckLoginStatus />
      {greetElement}
      <Welcome2 />
      <ShowName />
      <MyButton />
      <MyLoginStatus />
      <WelcomeProp name="Binay" />
      <WelcomeLegacy name="Arijit" />
      <UserCard name="Suraj" role="Java Developer" />
      <Counter />
      <Greeting name="Riya" />
      <Profile name="Trisha" age="24" />
      <br />
      <h1>Working on Props</h1>
      <GreetPassProp name="Rakesh" />
      <GreetDestructure name="Sohan" />
      <MultipleProp name="Madan" age="25" role="Data Engineer" />
      <PropButton label="Click Me" onClick={() => alert("Prop Button Clicked!")} />
      <DefaultProp />
      <ArrayProp arr={["Suraj", "Sooraj", "Uma", "Sudhanshu"]} />
      <Increment />
      <MyGreeting initialName="Suraj Chauhan" />
      <ToDoList />
      <Decrement initialVal={10} />
      <ClassCounter />
      <ToggleOnOff />
      <UserProfile />
      <IncrementCounter />
      <h1>Event Handling</h1>
      <ClickButton />
      <InlineEvent />
      <GreetButton name="Suraj" />
      <InputBox />
      <h3>-- Form --</h3>
      <SubmitForm />
      <h1>--- Coniditional Rendering ---</h1>
      <ConditionalGreeting isLoggedIn={false} />
      <TernaryGreeting isLoggedIn={true} />
      <Notification hasMessage={true} />
      <ConditionalToggle />
      <Dashboard />
      <Dashboard role="admin" />
      <CompGreet />
      <CompGreet isLoggedIn={true} />
      <Notify hasNotification={true} />
      <LoadData />
      <h1>--- Lists & Keys ---</h1>
      <FruitList />
      <Users />
      <DailyTodoList />
      <NestedListCategories />
      <NameList />
      <EmployeeList />
      <Groceries />
      <br />
      <h1>Lifecycle & Hooks</h1>
      <LifecycleMountCompo />
      <HookMountCompo />
      <LifecycleUpdateCompo />
      <HookUpdateCompo value={8} />
      <LifecycleUnmountCompo />
      <HookUnmountCompo />
      <Timer />
      <HookTimer />
      <DataFetcher />
      <TaskCleaner />
      
      <br />
      <h1>Forms</h1>
      <NameForm />
      <CheckboxForm />
      <SelectForm />
      <LoginForm />
      <UncontrolledForm />
      <FocusInput />
      <br />
      <ClickCounter />
      <ControlledInput />
      <ControlledCheckBox />
      <ControlledDropdown />
      <ControlledLoginForm />
      <br />
      <h1>Component Compostion</h1>
      <MyGameApp />

      <Card title="Profile">
        <p>Name: Suraj Chauhan</p>
        <p>Role: Developer</p>
      </Card>
      <br />
      <Layout />
      <MyReusableButtons />
    </>
  )
}
*/

// Advanced: Router
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* Dashboard with nested routes */}
//         <Route path="/dashboard" element={<MyDashboard />}>
//           {/* Index route ensures /dashboard shows something */}
//           <Route index element={<DashboardHome />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>

//         <Route path="/login" element={<Login />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// All Advanced concepts:
// function App() {
//   return (
//     <>
//       <div>
//         <h1>Advanced React</h1>

//         <Parent username="Suraj" />

//         <UserContext.Provider value="Suraj Chauhan">
//           <Parent />
//         </UserContext.Provider>

//         <br />
//         <ThemeProvider>
//           <Toolbar />
//         </ThemeProvider>
//         <br />

//         <UserProvider>
//           <DeeplyNested />
//         </UserProvider>
//         <br />

//         <LanguageProvider>
//           <DeepComponent />
//         </LanguageProvider>

//         <br />
//         <h3>Cobination of context with State</h3>
//         <ThemeProvider>
//           <UserProvider>
//             <LanguageProvider>
//               <CombineDashboard />
//             </LanguageProvider>
//           </UserProvider>
//         </ThemeProvider>
//       </div>
//       <br />

//       {/* Concept 3 - Higher Order Components */}
//       <div>
//         <GreetingWithLogger name="Riya" />
//         <ProtectedDashboard />
//         <ProtectedProfile name="Suraj" age="25" email="surja@gmail.com" />
//         <EnhancedProfile name="Krishna" isLoggedIn={true} />
//         <ThemedProfile name="Mohan" />
//         <Profile1 name="Reena" isLoggedIn={true} />
//         <Profile2 name="Navneet" isLoggedIn={false} />
//         <Profile3 name="Himesh" />
//       </div>

//       {/* concept 4 - Render Props */}
//       <div>
//         <h1>Concept 4 - Render Props</h1>
//         <DataProvider render={(info) => <h2>{info}</h2>} />
//         <MouseTracker render={({ x, y }) => <p>Mouse postion: {x}, {y}</p>} />
//         <DataProvider2 data="Hello World">
//           {(text) => (
//             <>
//               <h1>{text}</h1>
//               <p>{text.toUpperCase()}</p>
//             </>
//           )}
//         </DataProvider2>

//         {/* <MouseTracker2 children={({ x, y}) => <p>Mouse at: ({x}, {y})</p>} /> */}
//         <MouseTracker2>
//           {({ x, y }) => <p>Mouse at: ({x}, {y})</p>}
//         </MouseTracker2>

//         <TimerProvider>
//           {(elapsed) => <p><strong>Elapsed: </strong>{elapsed} seconds</p>}
//       </TimerProvider>
//       <AuthProviderHoc name="Abhay" isLoggedIn={true} />
//       <AuthProviderRender isLoggedIn={true}>
//         {(auth) => auth ? <Profile3 name="Hitesh" /> : <div>Login required</div>}
//       </AuthProviderRender>
//       <ThemeProviderContext mytheme="light">
//         {(theme) => (
//           <div style={{ background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black" }}>
//             <h3>The theme is {theme}</h3>
//           </div>
//         )}
//       </ThemeProviderContext>
//     </div >

//     <div>
//       <h1>Concept 5 - Custom Hooks</h1>
//       <p>Window width: {useWindowWidth()}</p>
//       {/* Here useWindowWidth returns a width not ui, it contains logic so used just like a function */}
//       {/* <div>
//         <h3>Custom hook - useFetch</h3>
//         <div>{post ? post.title : "Loading..."}</div>
//         <div>{user ? user.name: "Loading..."}</div>
//       </div> */}
//       <CounterComponent />
//       <ToggleComponent />
//       <NameComponent />
//       <TimerComponent />
//       <RefactoredComponent />
//     </div>
//     </>
//   )
// }

function App() {
  return (
    <>
      <div style={{ margin:"20px", background:"#333"}}>
        <h1>Concept 6 - Performance Optimization</h1>

        <GreetingMemo name="Suraj" />
        <GreetingMemo name="Suraj" />
        <ExpensiveCalc num={5000} />
        <CallbackCounter />
        <GreetingMemo2 name="Cherry" />
        <ExpensiveCalc2 num={10} />
        <CallbackCounter2 />
        {/* <VirtualizedList>
          {(23, {background:"#999"})}
        </VirtualizedList> */}
      </div>


    </>
  )
}
export default App;