export default function Section(props) {
    return (
      <section>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
  
          <ul className={props.className}>{props.children}</ul>
        </div>
      </section>
    );
  }
  