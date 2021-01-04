// Styled jsx(css in js) - to apply css to individual components

// css modules
import styles from '../styles/about.module.css'

function Heading(props) {
  const color = Math.random() > 0.5 ? 'red' : 'coral';
  return(
    <div>
      <h1>{props.heading}</h1>
      <style jsx>
        {`
          h1{
            color: ${color};
          }
        `}
      </style>
    </div>
  )
}



export default function About() {
  return (
    <div>
      <Heading heading="h1 with jsx styles" />
      {/* adding the module styles */}
      <h3 className={styles.blue}>About</h3>
    </div>
  ) 
}