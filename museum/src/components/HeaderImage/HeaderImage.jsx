export default function HeaderImage(props) {
  return (
        <div style={{backgroundImage: `url(${props.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
  );
}