import * as React from 'react';

type ButtonProps = {
    label: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export function Button(props: ButtonProps) {
    const { label, onClick } = props;
  return (
    <>
    <button onClick={onClick}>{label}</button>
    <div>Live reload test</div>
    </>
  );
}
export default Button;
