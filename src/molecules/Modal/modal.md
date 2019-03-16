```jsx
import Button from '../../atoms/Button';

initialState = { isOpen: false };

<div>
    <Button onClick={() => setState({ isOpen: true })}>
        Open Modal
    </Button>
    <Modal title="My Modal" open={state.isOpen} onClose={() => setState({ isOpen: false })}>
        <p>Content</p>
    </Modal>
</div>
```
