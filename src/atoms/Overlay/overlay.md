```jsx
import Button from '../Button';

initialState = { isOpen: false };

<div>
    <Button onClick={() => setState({ isOpen: true })}>
        Open Overlay
    </Button>
    <Overlay open={state.isOpen} showClose onClose={() => setState({ isOpen: false })}>
        <p>Content</p>
    </Overlay>
</div>
```
