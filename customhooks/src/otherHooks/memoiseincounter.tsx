import { useState, useEffect, memo } from 'react';

const MemoizeMyProps = (count: number) => {

    console.log("Rendered memoizedProp!");
    return (
        <div>
            innerCounte : {count}
        </div>
    )
}

export default MemoizeMyProps;
