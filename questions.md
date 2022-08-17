### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

The diference is that PureComponent implements ShouldComponentUpdate with a Shallow comparison that can break with a rerender issue, because when comparing scalar values (numbers, strings) it compares their values. But when comparing objects, it does not compare their attributes - only their references are compared (e.g. "do they point to same object?"), and it always returns false, and it will cause a rerender.

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

TBH I need to research more about it.

### 3. Describe 3 ways to pass information from a component to its PARENT.

Actually I know just one way that is pass down the setter method/function to the child and able the child component to set any information to the Parent. But I will research more about it.

### 4. Give 2 ways to prevent components from re-rendering.

useCallback and useMemo are good options to avoid component rerenders, both are similar that memoize values and callback functions. For example:
` const onClick = useCallback({currentTarget} => {console.log('Clicked Item : ', currentTarget);}, [item]);` will not rerender the component if the user tries to click in the same item many times.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragment allows us to group a list of children Elements without use a div element like:

```javascript
<React.Fragment>
  <p>Hello</p>
  <p>Hello</p>
  <p>Hello</p>
</React.Fragment>
```

but I really don't know where might break the app.

### 6. Give 3 examples of the HOC pattern.

I have used some HOCS from `recompose` library in the past, ie:

- withHandlers: provide handlers to the enhanced component
- withState: provide state to the enhanced component
  Another HOC that I was used to use is the useLayoutX that provide layout elements to the enhanced component.

### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

For handling exceptions with promises we need to add `.catch` after the promise call, now with async await I'm used to use `try...catch` block

### 8. How many arguments does setState take and why is it async.

We can pass 2 parameters to the class components based method `setState`, the state object, and a callback to be fired after the state be updated. This function is asynchronous because React batch multiple setState calls to improve the performance

### 9. List the steps needed to migrate a Class to Function Component.

- convert all state attributes to the useState hook, ie:

```javascript
state = {
  name: '',
};
```

to

```javascript
const [name, setName] = useState('');
```

- convert all lifecycle methods to the useEffect hook logic, ie:

```javascript
//componentDidMount to useEffect with empty dependency array
componentDidMount(){
  console.log('mounted')
}
//to
useEffect(()=>console.log('mounted'), [])

//componentDidUpdate to useEffect with dependency array containing the observables state fields/props
componentDidUpdate(prevProps, prevState){
  if(prevProps.name !== this.props.name){
    console.log('name updated')
  }
}
//to
useEffect(()=>{
  if(name){
    console.log('name updated')
  }
}, [name])

//componentWillUnmount to useEffect with return inside the effect function
componentWillUnmount(){
  console.log('leaving')
}
//to
useEffect(()=>{return ()=>console.log('leaving')}, [])
```

- change the `class` to a simple `function`, ie:
```javascript
class Name extends React.Component{}
//to
function Name(){}
```

### 10. List a few ways styles can be used with components.
- we can do inline styles with an object containing the component style, ie:
```javascript
<div style={{backgroundColor: 'red'}}
```
- we can import the css file and reference each element using `className` prop, ie:
```javascript
import './styles.css';
<div className="container"/>
```

### 11. How to render an HTML string coming from the server.
Before NextJS we had a lot of tricks using webpack server, but nowadays with NextJS we can do the server side rendering using `getServerSideProps` method inside the NextJS Page component.