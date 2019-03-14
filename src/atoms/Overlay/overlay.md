```jsx
import Button from '../Button';

initialState = { isOpen: false };

const open = () => {
    console.log('open')
    setState({ isOpen: true })
}

const close = () => {
    console.log('close')
    setState({ isOpen: false })
}

<div>
    <Button onClick={open}>
        Open Overlay
    </Button>
    <Overlay open={state.isOpen} onClose={close}>Content</Overlay>
</div>
```
