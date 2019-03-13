Select

```js
<Select name="ExampleSelect" placeholder="Example select..." options={[
    {name: 'option 1', value: 1},
    {name: 'option 2', value: 2},
    {name: 'option 3', value: 3}
]} 
onChange={(event) => window.alert(`You selected ${event.target.name} with value ${event.target.value}`)}
/>
```
