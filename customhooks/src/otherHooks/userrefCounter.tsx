import { useRef } from 'react';

const Counter = () => {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert(`You clicked ${ref.current} times`)
    }

    return (
        <div>
            {/* <p>{`${ref.current} times clicked!`}</p> Don't read write ref.current during render*/}
            <button className={`max-w-fit mt-1 p-1 border-2 border-blue-300 rounded-md`} onClick={handleClick}>
                click me!
            </button>
        </div>
    )
}

export default Counter;
