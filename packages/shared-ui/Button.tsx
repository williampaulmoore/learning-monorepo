import * as React from 'react';

export function Button(props: any) {
    return <button onClick={() => props.onClick()}>{props.childern}</button>;
}

export default Button;
