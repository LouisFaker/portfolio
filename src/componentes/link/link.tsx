
function Link(props: { texto: string; url: string }) {
  return (
    <a href={props.url}>{props.texto}</a>
  );
}

export default Link;