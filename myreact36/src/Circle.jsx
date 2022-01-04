function Circle({ number, backgroundColor, onClick, onContextMenu }) {
  return (
    <div
      style={{ ...defaultStyle, backgroundColor }}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {number}
    </div>
  );
}

const defaultStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  lineHeight: '100px',
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '3rem',
  userSelect: 'none',
};

export default Circle;
